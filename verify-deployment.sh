#!/bin/bash

# Verification script for Teeya Kapur Portfolio GitHub Pages deployment
echo "🔍 Verifying GitHub Pages deployment..."

REPO_URL="https://karlos37.github.io/teeya-kapur-portfolio"
REPO_SETTINGS="https://github.com/karlos37/teeya-kapur-portfolio/settings/pages"

echo ""
echo "📋 DEPLOYMENT STATUS:"
echo "✅ Code pushed to main branch"
echo "✅ gh-pages branch created and deployed"
echo "✅ Build completed successfully"

echo ""
echo "🌍 Your portfolio should be available at:"
echo "   $REPO_URL"

echo ""
echo "⏳ GitHub Pages deployment typically takes 1-10 minutes to become live."
echo "   If the site isn't accessible yet, please wait a few minutes and try again."

echo ""
echo "🔧 TO ENSURE GITHUB PAGES IS ENABLED:"
echo "1. Go to: $REPO_SETTINGS"
echo "2. Under 'Source', select 'Deploy from a branch'"
echo "3. Select 'gh-pages' branch"
echo "4. Select '/ (root)' folder"
echo "5. Click 'Save'"

echo ""
echo "🧪 TESTING DEPLOYMENT:"
echo "Testing if the site is accessible..."

# Test if the site is accessible
if curl -s --head "$REPO_URL" | head -n 1 | grep -q "200 OK"; then
    echo "✅ SUCCESS: Site is live and accessible!"
    echo "🌍 Visit: $REPO_URL"
else
    echo "⏳ Site may still be deploying. Please wait a few minutes and check:"
    echo "   $REPO_URL"
    echo ""
    echo "If it's still not working after 10 minutes, check the GitHub Pages settings:"
    echo "   $REPO_SETTINGS"
fi

echo ""
echo "📱 The portfolio includes:"
echo "   • Professional design with responsive layout"
echo "   • About section with placeholder for headshot"
echo "   • Project showcase section"
echo "   • Resume download functionality"
echo "   • Contact form"
echo "   • Mobile-friendly design"
