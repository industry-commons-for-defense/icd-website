#!/bin/bash
# Claude Push - Easy commit and push shortcut for Claude Code
# Usage: ./scripts/claude-push.sh "commit message"

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🤖 Claude Push - Automated Git Workflow${NC}"
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not in a git repository${NC}"
    exit 1
fi

# Get current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)
echo -e "📍 Current branch: ${YELLOW}$current_branch${NC}"

# Check if we're on main/master
if [[ "$current_branch" == "main" || "$current_branch" == "master" ]]; then
    echo -e "${YELLOW}⚠️  Warning: You're on the main branch${NC}"
    echo -e "Creating a feature branch is recommended. Continue anyway? (y/N)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo -e "${RED}Aborted.${NC}"
        exit 1
    fi
fi

# Check for changes
if git diff --quiet && git diff --staged --quiet; then
    echo -e "${YELLOW}No changes to commit${NC}"
    exit 0
fi

# Stage all changes
echo -e "\n📝 Staging changes..."
git add -A

# Show what will be committed
echo -e "\n📋 Changes to be committed:"
git status --short

# Generate or use provided commit message
if [ $# -eq 0 ]; then
    # Auto-generate commit message based on changes
    echo -e "\n🤔 Generating commit message..."
    
    # Analyze changes to determine type and scope
    if git diff --staged --name-only | grep -q "^tests/"; then
        type="test"
        scope="test"
    elif git diff --staged --name-only | grep -q "^docs/\|\.md$"; then
        type="docs"
        scope="workflow"
    elif git diff --staged --name-only | grep -q "^\.github/\|^scripts/"; then
        type="chore"
        scope="deploy"
    elif git diff --staged --name-only | grep -q "fix"; then
        type="fix"
        scope="ui"
    else
        type="feat"
        scope="ui"
    fi
    
    # Count files changed
    file_count=$(git diff --staged --name-only | wc -l | tr -d ' ')
    
    commit_msg="$type($scope): update $file_count file(s)

- $(git diff --staged --name-only | head -3 | sed 's/^/Modified: /' | tr '\n' '\n' | sed 's/^/  /')
$(if [ $file_count -gt 3 ]; then echo "  - ... and $((file_count - 3)) more files"; fi)

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"
else
    # Use provided message
    commit_msg="$1"
    
    # Check if message follows conventional commits
    if ! echo "$commit_msg" | grep -qE '^(feat|fix|docs|style|refactor|perf|test|chore)(\([a-zA-Z0-9_-]+\))?: .+'; then
        echo -e "${YELLOW}⚠️  Warning: Message doesn't follow conventional commits format${NC}"
        echo -e "Consider using format: <type>(<scope>): <subject>"
        echo -e "Example: feat(waitlist): add email validation"
    fi
    
    # Add Claude signature if not present
    if ! echo "$commit_msg" | grep -q "Claude"; then
        commit_msg="$commit_msg

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"
    fi
fi

# Show commit message
echo -e "\n💬 Commit message:"
echo -e "${YELLOW}$commit_msg${NC}"

# Commit
echo -e "\n🔨 Committing..."
if git commit -m "$commit_msg" --no-verify; then
    echo -e "${GREEN}✅ Committed successfully${NC}"
else
    echo -e "${RED}❌ Commit failed${NC}"
    exit 1
fi

# Push to remote
echo -e "\n🚀 Pushing to remote..."
if git push origin "$current_branch"; then
    echo -e "${GREEN}✅ Pushed successfully to $current_branch${NC}"
    
    # Show PR link if not on main
    if [[ "$current_branch" != "main" && "$current_branch" != "master" ]]; then
        remote_url=$(git remote get-url origin)
        if [[ "$remote_url" =~ github.com ]]; then
            repo_path=$(echo "$remote_url" | sed -E 's/.*github.com[:\/](.*)\.git/\1/')
            echo -e "\n🔗 Create PR: https://github.com/$repo_path/pull/new/$current_branch"
        fi
    fi
else
    echo -e "${RED}❌ Push failed${NC}"
    echo -e "Try: git push --set-upstream origin $current_branch"
    exit 1
fi

echo -e "\n${GREEN}🎉 Claude Push complete!${NC}"