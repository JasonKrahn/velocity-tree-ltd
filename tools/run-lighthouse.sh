#!/bin/bash

# Target URL (can be overridden as an argument)
URL=${1:-"https://velocity-ltd-dev.netlify.app/"}
REPORT_DIR="./lighthouse-reports"

echo "Running Lighthouse audit for: $URL"

# Create reports directory if it doesn't exist
mkdir -p "$REPORT_DIR"

# Generate a timestamp for the report filename
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
REPORT_PATH="$REPORT_DIR/report-$TIMESTAMP.html"

# Run lighthouse via npx
npx lighthouse "$URL" --view --output html --output-path "$REPORT_PATH" --chrome-flags="--headless"

echo "Audit complete! Report saved and opened: $REPORT_PATH"
