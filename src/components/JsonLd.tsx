import type { WithContext, LocalBusiness, Service, FAQPage } from "schema-dts";

// ── LocalBusiness Schema ──────────────────────────────────────────────
const localBusiness: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.velocitylts.com/#business",
    name: "Velocity Land & Tree Services",
    url: "https://www.velocitylts.com",
    telephone: "+1-204-226-7174",
    description:
        "Professional forestry mulching, lot clearing, land management, culvert & driveway installs, fence line & right-of-way management, property line management, over growth management, and land reclamation in Blumenort, Manitoba.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Blumenort",
        addressRegion: "MB",
        addressCountry: "CA",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 49.5963,
        longitude: -96.6914,
    },
    areaServed: [
        { "@type": "Place", name: "Blumenort, Manitoba" },
        { "@type": "Place", name: "Steinbach, Manitoba" },
        { "@type": "Place", name: "Niverville, Manitoba" },
        { "@type": "Place", name: "Ste. Anne, Manitoba" },
        { "@type": "Place", name: "Saint Malo, Manitoba" },
        { "@type": "Place", name: "Southeast Manitoba" },
    ],
    image: "https://www.velocitylts.com/gallery/gallery-14.png",
    logo: "https://www.velocitylts.com/gallery/gallery-22.png",
    priceRange: "$$",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "4",
        bestRating: "5",
    },
    sameAs: [
        "https://www.instagram.com/velocitylandtreeservice/",
        "https://www.facebook.com/p/Velocity-Land-Tree-Services-100066414313610/",
    ],
};

// ── Service Schemas ───────────────────────────────────────────────────
const services: WithContext<Service>[] = [
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Forestry Mulching",
        description:
            "Professional forestry mulching and brush clearing in Blumenort, Manitoba and surrounding areas. Eco-friendly land reclamation that turns overgrown land into usable space without burn piles. Serving farms, acreages, and rural properties across southeast Manitoba.",
        provider: { "@id": "https://www.velocitylts.com/#business" },
        areaServed: "Southeast Manitoba",
        serviceType: "Forestry Mulching",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Lot Clearing & Land Management",
        description:
            "Complete lot clearing and land management services for construction, agriculture, and development in Manitoba. From raw land to a build-ready site, we handle heavy clearing, subdivision grading, and site preparation.",
        provider: { "@id": "https://www.velocitylts.com/#business" },
        areaServed: "Southeast Manitoba",
        serviceType: "Land Clearing",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Culvert & Driveway Installation",
        description:
            "Expert gravel driveway installation, culvert installs, and grading services for rural properties in Blumenort, Manitoba and surrounding communities. Professional site grading for homes, farms, and commercial properties.",
        provider: { "@id": "https://www.velocitylts.com/#business" },
        areaServed: "Southeast Manitoba",
        serviceType: "Driveway Installation",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Fence Line & Right-of-Way Management",
        description:
            "Professional fence line clearing, right-of-way management, and property line maintenance using forestry mulching equipment in rural Manitoba. Keep your fence lines and property boundaries clear and accessible.",
        provider: { "@id": "https://www.velocitylts.com/#business" },
        areaServed: "Southeast Manitoba",
        serviceType: "Fence Line Clearing",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Septic System Design & Installation",
        description:
            "Certified septic system design and complete installation services in Manitoba. Licensed septic expert providing residential and commercial septic field installations, holding tanks, and soil testing for rural properties.",
        provider: { "@id": "https://www.velocitylts.com/#business" },
        areaServed: "Southeast Manitoba",
        serviceType: "Septic Installation",
    },
];

// ── FAQ Schema ────────────────────────────────────────────────────────
const faqPage: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is forestry mulching and how does it work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Forestry mulching is an eco-friendly land clearing method that uses a single machine to cut, grind, and clear trees, brush, and vegetation in one pass. Unlike traditional clearing, there are no burn piles, no hauling, and the mulched material returns nutrients to the soil. Velocity Land & Tree Services provides professional forestry mulching across southeast Manitoba.",
            },
        },
        {
            "@type": "Question",
            name: "How much does forestry mulching cost per acre in Manitoba?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Forestry mulching costs in Manitoba vary based on terrain, vegetation density, and accessibility. Light brush clearing is more affordable than heavy timber work. Contact Velocity Land & Tree Services at (204) 226-7174 for a free estimate on your specific project in the Blumenort and southeast Manitoba area.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need a permit for septic installation in Manitoba?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, septic system installations in Manitoba require permits and must comply with provincial regulations. As a certified septic expert, Velocity Land & Tree Services handles the full process including soil testing, system design, permitting, and installation for residential and commercial properties.",
            },
        },
        {
            "@type": "Question",
            name: "What areas do you serve in Manitoba?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Velocity Land & Tree Services is based in Blumenort, Manitoba and serves all of southeast Manitoba including Steinbach, Niverville, Ste. Anne, Saint Malo, the RM of Hanover, and surrounding communities. We provide forestry mulching, lot clearing, driveway installs, and septic services across the region.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between forestry mulching and traditional land clearing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Traditional land clearing requires multiple machines, creates debris piles for burning or hauling, and can cause soil erosion. Forestry mulching does everything in one pass—cutting, grinding, and spreading material as ground cover. It's faster, more environmentally friendly, prevents erosion, and costs less. Velocity Land & Tree Services specializes in forestry mulching for farms, acreages, and development sites.",
            },
        },
        {
            "@type": "Question",
            name: "Can you clear fence lines and property boundaries?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, fence line clearing and property line management are core services at Velocity Land & Tree Services. Our forestry mulching equipment can clear overgrown fence lines, rights-of-way, and property boundaries efficiently without damaging existing fences or structures.",
            },
        },
    ],
};

// ── Component ─────────────────────────────────────────────────────────
export default function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
                }}
            />
            {services.map((service, i) => (
                <script
                    key={`service-${i}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(service).replace(/</g, "\\u003c"),
                    }}
                />
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqPage).replace(/</g, "\\u003c"),
                }}
            />
        </>
    );
}
