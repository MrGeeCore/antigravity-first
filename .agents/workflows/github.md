---
description: How to manage GitHub repository states and synchronization
---

# /github Workflow

Use this workflow to initialize, stage, commit, and sync the project with GitHub.

## 1. Initialize (One-time)
If the project is not yet a git repository:
```powershell
git init
git add .
git commit -m "chore: initial project structure"
```

## 2. Check Status
Always check the state of the repository before acting:
```powershell
git status
```

## 3. Distribution Check
Ensure project metadata is updated:
- [ ] `CHANGELOG.md` reflects latest changes.
- [ ] `project-context/` is synced.

## 4. Stage & Commit
Follow conventional commit standards:
```powershell
git add <files>
git commit -m "feat: <description>" # Or fix:, chore:, docs:, etc.
```

## 5. Sync with Remote
```powershell
git push origin <branch>
```

> [!NOTE]
> For complex merge conflicts or PR management, delegate to the [GitHub Agent](file:///c:/Users/timja/AI/antigravws/first/.agents/templates/library/github-agent.md).
