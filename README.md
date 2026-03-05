# Agentic Collaboration Framework

A standardized framework for project-specific knowledge management, agent steering, and prompt template design.

## 🚀 Overview

This repository establishes a robust structure for human-agent collaboration. It differentiates between general system memory and **Project Context**, introduces a **Delegation Framework** for agent coordination, and provides a **Template Builder** UI for rapid agent design.

## 📁 Project Structure

- **`.agents/`**: Core agentic configuration and logic.
  - **`instructions/`**: Central steering prompts (e.g., `delegation.md`).
  - **`templates/`**: Agent Design Templates registry.
    - **`library/`**: Raw prompt definitions for programmatic use.
  - **`workflows/`**: Operational slash commands (e.g., `/project-context`).
- **`project-context/`**: The ground-truth registry for project-specific insights and architectural decisions.
- **`builder-ui/`**: A premium, web-based frontend for building and managing agent templates.
- **`CHANGELOG.md`**: A history of all notable changes following the "Keep a Changelog" standard.

## 🛠 Features

### 1. Project Context Registry
Standardized documentation of decisions and insights ensure continuity across sessions and agents. Use the `project-context/` directory as the single source of truth.

### 2. Delegation & Steering
The `delegation.md` instruction set coordinates agent behavior, defining roles, handoff protocols, and documentation requirements (including mandatory changelog maintenance).

### 3. Template Builder UI
A high-fidelity, glassmorphism-inspired web interface to browse, edit, and preview agent prompts.
- **Location**: `builder-ui/index.html`
- **Live URL**: [https://MrGeeCore.github.io/antigravity-first/](https://MrGeeCore.github.io/antigravity-first/)
- **Tech**: Vanilla HTML5, CSS3, and JavaScript.

### 4. Integrated GitHub Management [NEW]
Direct support for repository states and distribution.
- **Workflow**: `/github` slash command for operational tasks.
- **Agent**: `GitHub Agent` template for strategic repository management.

## 📄 Standards

This project adheres to:
- **[Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/)**
- **[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)**

---

To sync changes to GitHub:
`git push -u origin trunk`

---

*Crafted with precision for Agentic Excellence.*
