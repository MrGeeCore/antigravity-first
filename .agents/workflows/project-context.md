---
description: How to capture and share project-specific context
---

This workflow ensures that critical project information, architectural decisions, and domain knowledge are documented as "Project Context" to maintain continuity and provide ground truth for all agents.

1. **Identify Context Shifts**
   Recognize when a decision or piece of information (e.g., a design choice, a non-obvious bug fix, or domain-specific logic) changes the project's state or understanding.

2. **Document Context**
   Create a new markdown file in the `project-context/` directory. Use a descriptive name (e.g., `001-authentication-context.md`).
   Include:
   - **Context**: Why this information is critical.
   - **Details**: The actual information or decision.
   - **Date**: When this was recorded.

3. **Update the Context Registry**
   Add a link to the new entry in `project-context/README.md` under the appropriate category.

4. **Reference Context**
   When delegating tasks or seeking steering, always refer to the relevant context in `project-context/`.

// turbo
5. Initialize the context directory if it doesn't exist
   `mkdir -p project-context`
