#!/bin/bash
# FastLicense — local build check. Private staging uses Cloudflare Pages previews.
set -e

command -v node >/dev/null 2>&1 || { echo "Error: Node.js is not installed."; exit 1; }

echo "1. Installing dependencies..."
npm install

echo ""
echo "2. Production build..."
npm run build
echo "Build successful. Output: dist/"

echo ""
echo "Private staging is the Cloudflare Pages preview (https://fastlicense.pages.dev)."
echo "SITE.publicIndex is false — noindex, empty sitemap, staging banner."
echo "Do not attach fastlicense.com or publish to cornerstonelicensing.com from this job."
echo "  Framework preset: Astro"
echo "  Build command: npm run build"
echo "  Build output: dist"
