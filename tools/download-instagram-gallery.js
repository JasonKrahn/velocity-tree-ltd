const https = require("https");
const fs = require("fs");
const path = require("path");

const PROFILE_URL = "https://www.instagram.com/velocitylandtreeservice/";
const USERNAME = "velocitylandtreeservice";
const TARGET_COUNT = 9;
const OUTPUT_DIR = path.join(__dirname, "..", "public", "gallery", "instagram");
const METADATA_FILE = path.join(OUTPUT_DIR, "instagram_captions.json");

const REQUEST_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept: "application/json,text/html;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "x-ig-app-id": "936619743392459",
  Referer: PROFILE_URL,
};

function ensureOutputDirectory() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

function cleanupPreviousFiles() {
  const existing = fs.readdirSync(OUTPUT_DIR);
  for (const fileName of existing) {
    if (fileName.startsWith("ig_") || fileName === "instagram_captions.json") {
      fs.unlinkSync(path.join(OUTPUT_DIR, fileName));
    }
  }
}

function requestUrl(url, headers = REQUEST_HEADERS, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers }, (res) => {
      const statusCode = res.statusCode || 0;
      const location = res.headers.location;
      const chunks = [];

      if (
        [301, 302, 303, 307, 308].includes(statusCode) &&
        location &&
        redirects < 5
      ) {
        const redirectUrl = location.startsWith("http")
          ? location
          : new URL(location, url).toString();
        res.resume();
        resolve(requestUrl(redirectUrl, headers, redirects + 1));
        return;
      }

      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const body = Buffer.concat(chunks);
        if (statusCode < 200 || statusCode >= 300) {
          reject(
            new Error(
              `Request failed (${statusCode}) for ${url}. Response starts with: ${body
                .toString("utf8")
                .slice(0, 200)}`
            )
          );
          return;
        }

        resolve({ body, headers: res.headers });
      });
    });

    req.on("error", reject);
  });
}

function getExtensionFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const ext = path.extname(pathname).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".webp") {
      return ext;
    }
  } catch (_) {
    // ignore and fallback
  }
  return ".jpg";
}

function parseJsonPayload(buffer) {
  try {
    return JSON.parse(buffer.toString("utf8"));
  } catch (error) {
    throw new Error(`Could not parse JSON response: ${error.message}`);
  }
}

function extractCaption(node) {
  const edges = node?.edge_media_to_caption?.edges;
  if (!Array.isArray(edges) || edges.length === 0) {
    return "";
  }
  return edges[0]?.node?.text || "";
}

function extractImageCandidates(node) {
  if (node?.__typename === "GraphImage" && node.display_url) {
    return [node.display_url];
  }

  if (node?.__typename === "GraphSidecar") {
    const sidecarEdges = node?.edge_sidecar_to_children?.edges;
    if (Array.isArray(sidecarEdges)) {
      return sidecarEdges
        .map((edge) => edge?.node)
        .filter((child) => child && child.__typename === "GraphImage" && child.display_url)
        .map((child) => child.display_url);
    }
  }

  return [];
}

function extractTimelineNodes(data) {
  const pathCandidates = [
    data?.data?.user?.edge_owner_to_timeline_media?.edges,
    data?.graphql?.user?.edge_owner_to_timeline_media?.edges,
    data?.data?.xdt_api__v1__feed__user_timeline_graphql_connection?.edges,
  ];

  for (const edges of pathCandidates) {
    if (Array.isArray(edges) && edges.length > 0) {
      return edges.map((edge) => edge?.node).filter(Boolean);
    }
  }

  return [];
}

async function fetchProfilePosts() {
  const endpointCandidates = [
    `https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`,
    `https://www.instagram.com/${USERNAME}/?__a=1&__d=dis`,
  ];

  const errors = [];

  for (const endpoint of endpointCandidates) {
    try {
      const response = await requestUrl(endpoint);
      const payload = parseJsonPayload(response.body);
      const nodes = extractTimelineNodes(payload);

      if (nodes.length > 0) {
        return nodes;
      }

      errors.push(
        `No timeline nodes found in payload from ${endpoint}. JSON shape may have changed.`
      );
    } catch (error) {
      errors.push(`${endpoint}: ${error.message}`);
    }
  }

  throw new Error(
    `Could not fetch posts from Instagram public endpoints.\n${errors.join("\n")}`
  );
}

async function downloadBinary(url, filePath) {
  const { body } = await requestUrl(url, REQUEST_HEADERS);
  fs.writeFileSync(filePath, body);
}

async function main() {
  ensureOutputDirectory();
  cleanupPreviousFiles();

  console.log(`Fetching latest Instagram posts for @${USERNAME}...`);
  const nodes = await fetchProfilePosts();
  const selected = [];
  for (const node of nodes) {
    const imageUrls = extractImageCandidates(node);
    for (const imageUrl of imageUrls) {
      selected.push({ post: node, imageUrl });
      if (selected.length >= TARGET_COUNT) {
        break;
      }
    }
    if (selected.length >= TARGET_COUNT) {
      break;
    }
  }

  if (selected.length < TARGET_COUNT) {
    throw new Error(
      `Expected at least ${TARGET_COUNT} image assets, found ${selected.length}.`
    );
  }

  const metadata = [];

  for (let i = 0; i < selected.length; i += 1) {
    const { post, imageUrl } = selected[i];
    const ext = getExtensionFromUrl(imageUrl);
    const imageId = `ig_${i + 1}`;
    const fileName = `${imageId}${ext}`;
    const filePath = path.join(OUTPUT_DIR, fileName);

    await downloadBinary(imageUrl, filePath);
    console.log(`Downloaded ${fileName}`);

    metadata.push({
      id: imageId,
      fileName,
      caption: extractCaption(post),
      permalink: `https://www.instagram.com/p/${post.shortcode}/`,
      shortcode: post.shortcode,
      takenAt: post.taken_at_timestamp || null,
    });
  }

  fs.writeFileSync(METADATA_FILE, `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
  console.log(`Wrote ${METADATA_FILE}`);
}

main().catch((error) => {
  console.error(`Instagram gallery download failed: ${error.message}`);
  process.exitCode = 1;
});
