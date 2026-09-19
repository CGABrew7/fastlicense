#!/bin/bash
# FastLicense.com — local build check (Cloudflare Pages later)
set -e

command -v node >/dev/null 2>&1 || { echo "Error: Node.js is not installed."; exit 1; }

echo "1. Installing dependencies..."
npm install

echo ""
echo "2. Production build..."
npm run build
echo "Build successful. Output: dist/"

echo ""
echo "Connect this repo to Cloudflare Pages the same way as the other Hanok satellites:"
echo "  Framework preset: Astro"
echo "  Build command: npm run build"
echo "  Build output: dist"
echo "  Then attach fastlicense.com in Pages custom domains (DNS is a separate job)."
