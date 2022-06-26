#!/bin/bash

# Clearing pre-existing build
rm -rf frontend/dist
rm -rf backend/dist

cd frontend
npm run build
cp -rf ./dist/frontend ../backend/dist 