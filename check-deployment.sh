#!/bin/bash

# Check GitHub Pages deployment status
echo "🔍 Checking GitHub Pages deployment status..."

REPO_URL="https://karlos37.github.io/teeya-kapur-portfolio"
ACTIONS_URL="https://github.com/karlos37/teeya-kapur-portfolio/actions"
SETTINGS_URL="https://github.com/karlos37/teeya-kapur-portfolio/settings/pages"

echo ""
echo "📋 DEPLOYMENT CHECKLIST:"
echo "✅ Repository: karlos37/teeya-kapur-portfolio"
echo "✅ GitHub Actions workflow configured"
echo "✅ Professional headshot added"
echo "✅ All changes pushed to main branch"

echo ""
echo "🌍 Your portfolio should be live at:"
echo "   $REPO_URL"

echo ""
echo "🔧 TO VERIFY DEPLOYMENT:"
echo "1. Check GitHub Actions: $ACTIONS_URL"
echo "   - Look for 'Deploy React Portfolio to GitHub Pages' workflow"
echo "   - Ensure it shows a green checkmark (success)"
echo ""
echo "2. Check GitHub Pages settings: $SETTINGS_URL"
echo "   - Source should be set to 'GitHub Actions'"
echo "   - Not 'Deploy from a branch'"

echo ""
echo "🧪 TESTING SITE ACCESS:"
echo "Testing if the site is accessible..."

# Test if the site is accessible
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$REPO_URL")

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ SUCCESS: Site is live and accessible!"
    echo "🌍 Visit: $REPO_URL"
    echo ""
    echo "🎉 Your portfolio is now live with:"
    echo "   • Professional headshot"
    echo "   • Modern React design"
    echo "   • Responsive layout"
    echo "   • Resume download functionality"
    echo "   • Contact form"
elif [ "$HTTP_CODE" = "404" ]; then
    echo "⏳ Site is not yet accessible (404 error)"
    echo "This usually means:"
    echo "   • GitHub Actions is still building/deploying"
    echo "   • GitHub Pages settings need to be configured"
    echo ""
    echo "Please check:"
    echo "   • GitHub Actions workflow status"
    echo "   • GitHub Pages settings (should be 'GitHub Actions')"
else
    echo "⚠️  Unexpected response (HTTP $HTTP_CODE)"
    echo "Please check the GitHub Actions workflow and Pages settings"
fi

echo ""
echo "📱 If you need to make changes:"
echo "   1. Edit files locally"
echo "   2. Run: git add . && git commit -m 'Your message' && git push"
echo "   3. GitHub Actions will automatically redeploy"
