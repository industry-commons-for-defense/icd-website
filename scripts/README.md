# Claude Code Scripts

This directory contains helper scripts for working with Claude Code on the ICD Website project.

## Available Scripts

### claude-push.sh

Quick commit and push utility that ensures conventional commits and automates the git workflow.

**Usage:**
```bash
# Auto-generate commit message
./scripts/claude-push.sh

# Provide custom message
./scripts/claude-push.sh "feat(waitlist): add email validation"
```

**Features:**
- Validates conventional commit format
- Auto-generates commit messages based on changed files
- Adds Claude Code attribution
- Shows PR creation link for feature branches
- Warns when committing to main branch

## Setup Aliases

For easier access, source the aliases file in your shell:

```bash
# Add to your ~/.zshrc or ~/.bashrc
source /path/to/icd-website/.claude-aliases

# Or source temporarily in current session
source .claude-aliases
```

## Available Aliases

After sourcing `.claude-aliases`, you'll have access to:

- `claude-push` or `cpush` - Quick commit and push
- `cstatus` - Git status shorthand
- `cbranch` - Show current branch
- `claude-frontend` - Create frontend worktree
- `claude-backend` - Create backend worktree
- `claude-test` - Create testing worktree

## Conventional Commits

All commits should follow the conventional commits format:

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

**Types:** feat, fix, docs, style, refactor, perf, test, chore  
**Scopes:** waitlist, api, ui, auth, db, deploy, a11y, test

## Examples

```bash
# Quick push with auto-generated message
cpush

# Push with custom message
claude-push "fix(ui): correct button contrast for WCAG"

# Create frontend worktree and start working
claude-frontend
# You're now in ../wt-frontend on a new feature branch
```

## Workflow Integration

These scripts enforce the multi-agent workflow defined in `AGENTS.md`:

1. Always work in feature branches (enforced by pre-commit hooks)
2. Use conventional commits (validated by commit-msg hook)
3. Maintain proper documentation (CHANGES_[agent].md files)
4. Follow agent handoff protocols

For more details, see:
- `AGENTS.md` - Agent roles and responsibilities
- `WORKFLOW_ENFORCEMENT.md` - Strict workflow rules
- `.gitmessage` - Commit message template