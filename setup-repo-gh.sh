#!/bin/bash

# GitHub CLI setup script for Teeya Kapur Portfolio Repository
echo "🚀 Setting up Teeya Kapur Portfolio Repository with GitHub CLI..."

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI is not installed."
    echo "Please install it from: https://cli.github.com/"
    echo "Or use the manual setup script: ./setup-repo.sh"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    exit 1
fi

echo "📦 Creating repository on GitHub..."
gh repo create karlos37/teeya-kapur-portfolio \
    --public \
    --description "Professional portfolio website for Teeya Kapur - Accounting Student & Financial Professional" \
    --source=. \
    --remote=origin \
    --push

echo ""
echo "✅ Repository created and pushed successfully!"
echo "🌍 Your portfolio will be available at: https://karlos37.github.io/teeya-kapur-portfolio"
echo ""
echo "📝 Next steps:"
echo "1. Run: npm run deploy"
echo "2. Enable GitHub Pages in repository settings:"
echo "   Settings > Pages > Source: Deploy from a branch > gh-pages"
