#!/usr/bin/env bash
wget https://files.stork-search.net/releases/v1.6.0/stork-ubuntu-20-04
chmod +x stork-ubuntu-20-04
ELEVENTY_ENV=production npx @11ty/eleventy --config=eleventy.js
./stork-ubuntu-20-04 build --input public/listings.toml --output public/listings.st