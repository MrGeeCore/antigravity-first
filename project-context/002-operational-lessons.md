# Operational Lessons & Ground Truth

This document serves as the project's "memory" for resolving recurring operational challenges in deployment and version control.

## 1. GitHub Actions (Deployment)

### Syntax Error: YAML Expressions
- **Issue**: Using a colon `:` instead of a dot `.` in `steps` output expressions.
- **Incorrect**: `${{ steps:id.outputs.key }}`
- **Correct**: `${{ steps.id.outputs.key }}`
- **Impact**: Causes the workflow to fail validation immediately.

### GitHub Pages Activation
- **Source**: Must be set to **"GitHub Actions"** in Repository Settings > Pages. 
- **Trigger**: The workflow should trigger on push to `trunk` (or your primary branch).

## 2. Git Synchronization

### Non-Fast-Forward Errors (Divergence)
- **Issue**: Local and remote branches have diverged (often after agentic edits or forced pushes).
- **Resolution Protocol**:
  1. `git fetch origin`
  2. `git rebase origin/trunk` (prefers rebasing to keep linear history)
  3. `git push origin trunk`
- **Avoid**: `git pull --rebase` if you are unsure of the diverge state; fetch and rebase manually for better visibility.

## 3. UI Fidelity & Deployment

### Cache Persistence
- **Issue**: Users see old versions of the UI after deployment due to browser caching of `app.js`.
- **Mitigation**: Encourage "Hard Refresh" (Ctrl+F5 / Cmd+Shift+R). Use cache-busting headers or versioned filenames in future iterations.

### JS String Escaping
- **Issue**: Backticks (\`) inside template strings in `app.js` can prematurely terminate the string, leading to syntax errors or truncated content.
- **Correction**: Always escape backticks using a backslash (\`) when nesting markdown templates within JavaScript template literals.

## 4. Initialization Logic
- **Issue**: UI components failing to render on startup if the state isn't explicitly mapped to the DOM.
- **Correction**: Ensure an explicit `render()` or `init()` sequence is called during `DOMContentLoaded`.
