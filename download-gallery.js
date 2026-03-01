const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrls = [
    'https://static.wixstatic.com/media/a15207_4c4f79ec6f814951bd8c1e347c3e2e99~mv2.png',
    'https://static.wixstatic.com/media/a15207_86dd8a5277a14ef79a1fe3fb0121613b~mv2.jpeg',
    'https://static.wixstatic.com/media/a15207_6a1c7ba6afcc4273b5cdfa6d0ac0e5bc~mv2.png',
    'https://static.wixstatic.com/media/a15207_04923a7437c7495891213edac79fb0e7~mv2.png',
    'https://static.wixstatic.com/media/a15207_19304a90fdfa41bfba220118e721a14a~mv2.png',
    'https://static.wixstatic.com/media/a15207_ebaf9d456bb64ebeb68d2732afa5a7fa~mv2.jpg',
    'https://static.wixstatic.com/media/a15207_67a24de3358e4fd18b45871b7e63ff70~mv2.png',
    'https://static.wixstatic.com/media/a15207_114d8813f77c4ccbbfa50bb0032faf80~mv2.jpeg',
    'https://static.wixstatic.com/media/a15207_b8345bab339446988c25fb0c3cbbe684~mv2.png',
    'https://static.wixstatic.com/media/a15207_a05a8885f7134896bcfa9b05c79f00d9~mv2.png',
    'https://static.wixstatic.com/media/a15207_6f87d427452c41f48c1daf016b32ed5e~mv2.png',
    'https://static.wixstatic.com/media/a15207_ae3b5dec172342fa90124a2a6ec470fd~mv2.png',
    'https://static.wixstatic.com/media/a15207_3f91f2a49ba34e33bd662dc509a6d889~mv2.png',
    'https://static.wixstatic.com/media/a15207_4e8e28521baf45618432982143ea17b9~mv2.png',
    'https://static.wixstatic.com/media/a15207_02e33ee462c72ca6efdba24c5f428e~mv2.png',
    'https://static.wixstatic.com/media/a15207_b80cb094742a4780b50f6d6ff710e567~mv2.png',
    'https://static.wixstatic.com/media/a15207_76419ab6e04848099e507d8fb7bc4f0d~mv2.jpg',
    'https://static.wixstatic.com/media/a15207_73db88cabcfd4320943f9c14c56d232e~mv2.png',
    'https://static.wixstatic.com/media/a15207_f6bbe9612be24803babed78f1a8b528e~mv2.png',
    'https://static.wixstatic.com/media/a15207_a9f7d91459b647538aea4fbf883511d0~mv2.png',
    'https://static.wixstatic.com/media/a15207_635092adad0841d0b087ea301c0bfad2~mv2.jpg',
    'https://static.wixstatic.com/media/a15207_a86717623daf4731afc9bd5a160b6fc5~mv2.png'
];

const targetDir = path.join(__dirname, 'public', 'gallery');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

console.log(`Starting download of ${imageUrls.length} images...`);

imageUrls.forEach((url, index) => {
    const extension = url.split('.').pop().split('/')[0] || 'jpg';
    const fileName = `gallery-${index + 1}.${extension}`;
    const filePath = path.join(targetDir, fileName);

    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
            https.get(response.headers.location, (redirResponse) => {
                redirResponse.pipe(file);
            });
        } else {
            response.pipe(file);
        }

        file.on('finish', () => {
            file.close();
            console.log(`Successfully downloaded: ${fileName}`);
        });
    }).on('error', (err) => {
        fs.unlink(filePath, () => { });
        console.error(`Error downloading ${url}: ${err.message}`);
    });
});
