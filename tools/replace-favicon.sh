#!/bin/bash

# Source logo
SOURCE_LOGO="public/gallery/Velocity_logo.png"

echo "Replacing old SVG and ICO files with the new PNG logo..."

# Check if the source exists
if [ ! -f "$SOURCE_LOGO" ]; then
    echo "Error: Source logo $SOURCE_LOGO not found!"
    exit 1
fi

# Next.js uses App Router, so we put the main icon in src/app/icon.png
# It also looks for apple-icon.png for iOS devices
echo "Setting up Next.js app icons..."
cp "$SOURCE_LOGO" "src/app/icon.png"
cp "$SOURCE_LOGO" "src/app/apple-icon.png"

# General public logo for ogImage, etc.
echo "Setting up public logo..."
cp "$SOURCE_LOGO" "public/logo.png"

# Clean up old default files
echo "Cleaning up old icons..."
rm -f src/app/favicon.ico
rm -f src/app/icon.svg
rm -f public/logo.svg

echo "Done! The new logos have been applied."
echo "Note: You might need to clear your browser cache to see the new favicon."
