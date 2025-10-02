# Workflow Enforcement Guidelines

## CRITICAL: Mandatory Agent Workflow Requirements

**VIOLATION OF THESE RULES WILL RESULT IN BLOCKED COMMITS**

### 1. Git Worktree Usage is MANDATORY

```bash
# ❌ NEVER work directly on main
git checkout main  # FORBIDDEN

# ✅ ALWAYS use worktrees for feature development
git worktree add ../wt-frontend -b feat/frontend/waitlist-ui
git worktree add ../wt-backend -b feat/backend/waitlist-api
```

### 2. Agent Role Assignment

Before ANY work begins, you MUST:

1. **DECLARE YOUR AGENT ROLE**:
   ```
   "I am now operating as the [Frontend/Backend/Testing/DevOps/Accessibility] Agent"
   ```

2. **STATE YOUR WORKING DIRECTORY**:
   ```
   "Working in worktree: ../wt-frontend on branch: feat/frontend/waitlist-ui"
   ```

3. **CONFIRM YOUR SCOPE**:
   ```
   "I will ONLY modify files in: app/**, components/**, styles/**"
   ```

### 3. Conventional Commits are REQUIRED

#### Format: `<type>(<scope>): <subject>`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding missing tests
- `chore`: Changes to build process or auxiliary tools

**Scopes (for ICD Website):**
- `waitlist`: Waitlist feature
- `api`: Backend API
- `ui`: Frontend components
- `auth`: Authentication
- `db`: Database
- `deploy`: Deployment configuration
- `a11y`: Accessibility
- `test`: Testing infrastructure

**Examples:**
```bash
# ✅ CORRECT
git commit -m "feat(waitlist): add email validation to signup form"
git commit -m "fix(ui): correct button contrast ratio for WCAG compliance"
git commit -m "test(api): add integration tests for waitlist endpoint"

# ❌ INCORRECT
git commit -m "fix: add waitlist page"  # Missing scope
git commit -m "Fixed stuff"             # Not conventional
git commit -m "feat add new feature"    # Missing colon and parentheses
```

### 4. Workflow Validation Gates

#### Pre-Work Checklist
- [ ] Git worktree created
- [ ] On correct feature branch
- [ ] Agent role declared
- [ ] Scope confirmed
- [ ] Previous agent's CHANGES.md reviewed

#### Pre-Commit Checklist
- [ ] All tests pass
- [ ] Linting passes
- [ ] Build succeeds
- [ ] Conventional commit message
- [ ] CHANGES_[AGENT].md updated

#### Pre-Push Checklist
- [ ] All validation gates passed
- [ ] Handoff documentation complete
- [ ] Next agent notified
- [ ] No direct push to main

### 5. Agent Handoff Protocol

```markdown
## Handoff from [CURRENT_AGENT] to [NEXT_AGENT]

### Work Completed:
- [List of completed tasks]

### Current State:
- Branch: [branch name]
- Worktree: [worktree location]
- Last Commit: [commit hash]

### Known Issues:
- [Any blockers or concerns]

### Next Steps:
- [Recommended actions for next agent]

### Validation Status:
- [ ] All tests passing
- [ ] Lint clean
- [ ] Build successful
- [ ] Accessibility check passed
```

### 6. Enforcement Mechanisms

#### A. Pre-commit Hook (.husky/pre-commit)
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Check for worktree
if [ "$(git rev-parse --abbrev-ref HEAD)" = "main" ]; then
  echo "❌ ERROR: Direct commits to main are forbidden!"
  echo "Use: git worktree add ../wt-[agent] -b feat/[agent]/[feature]"
  exit 1
fi

# Validate conventional commit
commit_regex='^(feat|fix|docs|style|refactor|perf|test|chore)(\([a-z]+\))?: .{1,50}'
if ! grep -qE "$commit_regex" "$1"; then
  echo "❌ ERROR: Commit message must follow Conventional Commits!"
  echo "Format: <type>(<scope>): <subject>"
  echo "Example: feat(waitlist): add email validation"
  exit 1
fi

# Check for CHANGES file
agent=$(echo $PWD | grep -oE 'wt-([a-z]+)' | cut -d- -f2)
if [ ! -f "CHANGES_${agent}.md" ]; then
  echo "❌ ERROR: CHANGES_${agent}.md is required!"
  exit 1
fi
```

#### B. Branch Protection Rules
```yaml
# .github/branch-protection.yml
protection_rules:
  - pattern: main
    required_status_checks:
      strict: true
      contexts:
        - continuous-integration/github-actions
    enforce_admins: true
    required_pull_request_reviews:
      required_approving_review_count: 1
      dismiss_stale_reviews: true
    restrictions:
      users: []
      teams: []
    allow_deletions: false
    allow_force_pushes: false
```

### 7. Worktree Organization

```
icd-website/                 # Main repository
├── wt-frontend/            # Frontend Agent workspace
│   └── feat/frontend/*     # Frontend feature branches
├── wt-backend/             # Backend Agent workspace
│   └── feat/backend/*      # Backend feature branches
├── wt-testing/             # Testing Agent workspace
│   └── test/*              # Test branches
├── wt-devops/              # DevOps Agent workspace
│   └── chore/deploy/*      # Deployment branches
└── wt-a11y/                # Accessibility Agent workspace
    └── fix/a11y/*          # Accessibility fix branches
```

### 8. Commit Message Templates

Create `.gitmessage` in each worktree:

```
# <type>(<scope>): <subject>
#
# <body>
#
# <footer>

# Type: feat, fix, docs, style, refactor, perf, test, chore
# Scope: waitlist, api, ui, auth, db, deploy, a11y, test
# Subject: imperative mood, max 50 chars
# Body: explain what and why, not how
# Footer: closes #issue, BREAKING CHANGE:
```

Configure git to use template:
```bash
git config commit.template .gitmessage
```

### 9. Example: Correct Workflow Execution

```bash
# Frontend Agent starts work
$ echo "I am now operating as the Frontend Agent"
$ git worktree add ../wt-frontend -b feat/frontend/waitlist-form
$ cd ../wt-frontend
$ echo "Working in worktree: ../wt-frontend on branch: feat/frontend/waitlist-form"
$ echo "I will ONLY modify files in: app/**, components/**, styles/**"

# Make changes
$ npm run dev  # Test locally
$ npm test     # Run tests
$ npm run lint # Validate code

# Create handoff documentation
$ cat > CHANGES_frontend.md << EOF
## Frontend Changes - Waitlist Form

### Completed:
- Created /app/waitlist/page.tsx with form UI
- Added WaitlistForm component with validation
- Implemented loading states and error handling

### Files Modified:
- app/waitlist/page.tsx (new)
- components/forms/WaitlistForm.tsx (new)
- styles/forms.module.css (new)

### Testing:
- Unit tests: 12/12 passing
- Accessibility: WCAG AA compliant
- Mobile responsive: verified

### Next Agent: Backend
- Needs API endpoint at /api/waitlist
- Expected payload: { email, firstName, lastName, organization }
- Should return: { success: boolean, message: string }
EOF

# Commit with conventional format
$ git add -A
$ git commit -m "feat(waitlist): implement responsive signup form with validation

- Add dedicated waitlist page with form UI
- Create reusable WaitlistForm component
- Implement client-side email validation
- Add loading and error states
- Ensure WCAG AA compliance

Part of waitlist feature implementation"

# Push to feature branch
$ git push origin feat/frontend/waitlist-form
```

### 10. Monitoring & Reporting

Weekly agent performance metrics:
- Worktree usage compliance: ___%
- Conventional commit compliance: ___%
- Test coverage maintained: ___%
- Handoff documentation quality: ___%
- Build success rate: ___%

**Remember: These are not guidelines, they are REQUIREMENTS.**