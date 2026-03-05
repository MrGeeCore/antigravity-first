# Agent Delegation & Coordination Framework

This document serves as the central steering prompt to coordinate agent behavior, define roles, and manage task delegation within this project.

## 1. Vision & Purpose
The goal is to provide a unified coordination layer where agents can understand their specific boundaries, objectives, and how to hand off tasks to other specialized agents or the user.

## 2. Coordination Protocols
- **Handoffs**: When a task moves beyond your current specialized scope, identify the appropriate "Agent Template" or "Instruction Set" and suggest the transition.
- **Context Preservation**: Always reference the `project-context/` directory to maintain continuity between sessions and agents.
- **Decision Logging**: Major architectural or project-wide decisions must be documented in `project-context/` immediately.
- **Changelog Maintenance**: Every significant change, new feature, or structural update must be recorded in `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) standard.
- **Distribution Protocol**: Before any external synchronization (e.g., GitHub push), verify that `CHANGELOG.md` and `project-context/` are updated. Delegate to the [GitHub Agent](file:///c:/Users/timja/AI/antigravws/first/.agents/templates/library/github-agent.md) or use the [/github](file:///c:/Users/timja/AI/antigravws/first/.agents/workflows/github.md) workflow.
- **Operational Safety**: Adhere to the ground truths defined in [002-operational-lessons.md](file:///c:/Users/timja/AI/antigravws/first/project-context/002-operational-lessons.md) to prevent recurring deployment and synchronization errors.

## 3. Steering & Constraints
- **Reliability First**: Prioritize stable, verifiable code over clever or experimental solutions unless explicitly asked.
- **Communication**: Be proactive in identifying blockers and asking for clarification before proceeding with high-uncertainty tasks.
- **Project Context**: Treat `project-context/` as the single source of truth for project-specific rules, nomenclature, and history.

## 4. Agent Lifecycle (Templates)
Agent behavior should be consistent with the templates defined in `.agents/templates/`. These templates define:
- **Role**: The specialized capability of the agent.
- **Focus**: The specific areas of the codebase or project the agent is responsible for.
- **Output Standards**: The expected format and quality of the agent's deliverables.

## 5. Evolution
This prompt is a living document. Refined coordination strategies and new steering rules should be added as the project evolves.
