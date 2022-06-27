#!/bin/bash

# Clearing pre-existing build
rm -rf frontend/dist
rm -rf backend/dist

cd frontend
npm run build
cp -rf ./dist/frontend ../backend/dist 
cd ..

# Deploy app to heroku
rm -rf ../cv-lab-ineuron/!\(.git\)
cp -rf /backend/!\(node_modules\) ../cv-lab-ineuron
cd ../cv-lab-ineuron
git add .
git commit -m "Deploy to heroku"
git push heroku master