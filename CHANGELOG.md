# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Created `project-context/002-operational-lessons.md` to document operational ground truth for GitHub Actions and Git synchronization.
- **Official Release**: Successfully deployed the Template Builder UI to [GitHub Pages](https://MrGeeCore.github.io/antigravity-first/).
- Fixed template content truncation in the production UI by including full agent prompt definitions in `app.js`.
- Configured GitHub Actions for automated deployment of the Template Builder UI.
- Expanded the Agent Template Library with four specialized archetypes: `Context Architect`, `Verification Agent`, `Frontend Architect`, and `Coordinator Agent`.
- Successfully synchronized the project to GitHub on the `trunk` branch.
- Initialized Git repository and created the first commit with project structure on `trunk`.
- Integrated GitHub management into Antigravity with a specialized `GitHub Agent` template and `/github` workflow.
- Updated `delegation.md` with a mandatory "Distribution Protocol" for repository- [x] Verification
    - [x] Preview templates in the Template Builder
    - [x] Log additions in `CHANGELOG.md`
    - [x] Fix content truncation in production UI
- Created the "Template Builder" frontend in `builder-ui/` using Vanilla HTML, CSS, and JS.
- Implemented a premium glassmorphism design system for the builder interface.
- Created `.agents/templates/library/` for raw agent prompt storage.
- Added `perplexity.md` search assistant template to the library.
- Initialized `CHANGELOG.md` following the Keep a Changelog 1.1.0 standard.
- Updated `.agents/instructions/delegation.md` with mandatory changelog maintenance rules.

### Changed
- Renamed project-specific knowledge base to "Project Context" for better differentiation from system memory.
- Updated `/project-context` workflow to align with new naming and directory structure.
