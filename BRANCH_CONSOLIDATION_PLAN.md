# Branch Consolidation Plan

## Current Branch Status

### Merged Branches (can be deleted)
- `feat/ui/interactive-join-page` - Successfully merged via PR #1
- `feat/waitlist/firebase-integration` - Already in main (commit 9f3cdfa)
- `feat/waitlist/implementation` - Superseded by firebase-integration

### Unmerged Feature Branches
1. **docs/workflow/agent-enforcement** (commit a456238)
   - Contains: Agent workflow documentation and enforcement rules
   - Status: Behind main by 2 commits
   - Action: Needs rebase and merge

2. **chore/scripts/claude-push** (commit 2d8be48)
   - Contains: Claude-push utility scripts and aliases
   - Status: Behind main by 2 commits  
   - Action: Needs rebase and merge

## Consolidation Actions

### Step 1: Clean up merged branches
```bash
# Delete local merged branches
git branch -d feat/ui/interactive-join-page
git branch -d feat/waitlist/firebase-integration
git branch -d feat/waitlist/implementation

# Delete remote merged branches
git push origin --delete feat/ui/interactive-join-page
git push origin --delete feat/waitlist/firebase-integration
git push origin --delete feat/waitlist/implementation
```

### Step 2: Rebase and merge remaining branches
```bash
# For docs/workflow/agent-enforcement
git checkout docs/workflow/agent-enforcement
git rebase main
git checkout main
git merge docs/workflow/agent-enforcement --no-ff
git push origin main

# For chore/scripts/claude-push
git checkout chore/scripts/claude-push
git rebase main
git checkout main
git merge chore/scripts/claude-push --no-ff
git push origin main
```

### Step 3: Clean up after merge
```bash
# Delete local branches
git branch -d docs/workflow/agent-enforcement
git branch -d chore/scripts/claude-push

# Delete remote branches
git push origin --delete docs/workflow/agent-enforcement
git push origin --delete chore/scripts/claude-push
```

## Future Branch Management Recommendations

### 1. Local-First Development
Before pushing to remote, complete your work locally:
```bash
# Create feature branch
git checkout -b feat/your-feature

# Work on your feature
# ... make changes ...
git add .
git commit -m "feat: your feature"

# Test and validate locally
npm test
npm run lint
npm run build

# Merge locally first
git checkout main
git pull origin main  # Ensure main is up to date
git merge feat/your-feature --no-ff
git push origin main

# Only push feature branch if PR is needed
git push -u origin feat/your-feature
```

### 2. Squash Small Changes
For small changes, squash commits before merging:
```bash
# Interactive rebase to squash commits
git rebase -i main

# Then merge
git checkout main
git merge feat/your-feature --no-ff
```

### 3. Use GitHub CLI for Quick PRs
When you need code review:
```bash
# Create and merge PR in one flow
gh pr create --fill
gh pr merge --auto --squash
```

### 4. Branch Naming Convention
Stick to the conventional pattern:
- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation only
- `style/` - Code style changes
- `refactor/` - Code refactoring
- `test/` - Test additions/changes
- `chore/` - Maintenance tasks

### 5. Regular Branch Cleanup
Weekly maintenance:
```bash
# Prune remote tracking branches
git remote prune origin

# List branches that can be deleted
git branch --merged main | grep -v main

# Delete merged branches
git branch --merged main | grep -v main | xargs -n 1 git branch -d
```

### 6. Pre-Push Validation Script
Create `.git/hooks/pre-push`:
```bash
#!/bin/bash
# Run tests and linting before push
npm test && npm run lint && npm run build
```

### 7. Use Aliases for Common Operations
Add to your shell config:
```bash
alias gclean='git branch --merged main | grep -v main | xargs -n 1 git branch -d'
alias gprune='git remote prune origin'
alias gmerge='git checkout main && git pull && git merge --no-ff'
```

## Immediate Next Steps

1. Execute the consolidation actions above
2. Set up the pre-push hook
3. Configure the aliases
4. Document the workflow in CONTRIBUTING.md