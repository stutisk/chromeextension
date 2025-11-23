#!/bin/bash
# Copy built files to public folder for Chrome extension

echo "Copying built files to public folder..."

# Create static directories if they don't exist
mkdir -p public/static/css
mkdir -p public/static/js

# Copy static files
cp -r build/static/* public/static/

# Copy built index.html
cp build/index.html public/index.html

echo "Done! Files copied to public folder."
echo "Now reload your extension in Chrome."

