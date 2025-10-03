#!/bin/bash

# Setup script for Teeya Kapur Portfolio Repository
echo "🚀 Setting up Teeya Kapur Portfolio Repository..."

echo ""
echo "📋 MANUAL STEPS REQUIRED:"
echo "1. Go to https://github.com/karlos37"
echo "2. Click 'New repository' or go to https://github.com/new"
echo "3. Set repository name: teeya-kapur-portfolio"
echo "4. Set description: Professional portfolio website for Teeya Kapur - Accounting Student & Financial Professional"
echo "5. Make it Public"
echo "6. DO NOT initialize with README, .gitignore, or license (we already have these)"
echo "7. Click 'Create repository'"
echo ""
echo "⏳ Waiting for you to create the repository..."
echo "Press Enter when you've created the repository on GitHub..."

read -r

echo ""
echo "🔗 Adding remote origin..."
git remote add origin https://github.com/karlos37/teeya-kapur-portfolio.git

echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Repository setup complete!"
echo "🌍 Next steps:"
echo "1. Run: npm run deploy"
echo "2. Your portfolio will be live at: https://karlos37.github.io/teeya-kapur-portfolio"
echo ""
echo "📝 Don't forget to enable GitHub Pages in repository settings:"
echo "   Settings > Pages > Source: Deploy from a branch > gh-pages"
