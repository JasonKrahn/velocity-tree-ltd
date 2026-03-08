#!/bin/bash

# Target directory
TARGET_DIR="public"
# Maximum dimension (width or height)
MAX_SIZE=2000

echo "Scanning $TARGET_DIR for images larger than ${MAX_SIZE}px..."

# Find all JPG and PNG images
find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 | while IFS= read -r -d '' img; do
    # Extract width and height using sips (macOS built-in image processor)
    width=$(sips -g pixelWidth "$img" | grep -o '[0-9]*$')
    height=$(sips -g pixelHeight "$img" | grep -o '[0-9]*$')
    
    if [ -n "$width" ] && [ -n "$height" ]; then
        if [ "$width" -gt "$MAX_SIZE" ] || [ "$height" -gt "$MAX_SIZE" ]; then
            echo "Resizing: $img (Original: ${width}x${height})"
            # -Z maintains aspect ratio and sets the maximum dimension
            sips -Z $MAX_SIZE "$img" > /dev/null
        else
            echo "Already optimal: $img (${width}x${height})"
        fi
    fi
done

echo "Image optimization complete."
