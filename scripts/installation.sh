#!/bin/bash
echo "Starting installtion"
echo "1. installing Client"
cd ../client && npm install
echo "2. installing Server"
cd ../server && npm i

echo "Stating build process"
npm run build:all

exit 0