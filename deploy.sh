#!/bin/bash

# Teeya Kapur Portfolio Deployment Script
echo "🚀 Deploying Teeya Kapur Portfolio to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your portfolio is now live at: https://karlos37.github.io/teeya-kapur-portfolio"
