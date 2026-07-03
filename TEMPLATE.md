# Project Template Guide

Use this template as the default starting point for new projects unless Shubodh specifies otherwise.

## Files

- `README.md` - The project entry point. Explain what the project does, how to set it up, how to run it, how to test it, and what its structure means.
- `CHANGELOG.md` - A running record of notable changes. Keep an `Unreleased` section until a version or milestone is cut.
- `TODO.md` - The active task list, open questions, and planned follow-up work.
- `NOTES.md` - The project diary. Record decisions, tradeoffs, discoveries, risks, and end-of-session notes.
- `.gitignore` - Common ignores for Python, JavaScript, TypeScript, build outputs, caches, logs, and local environment files.
- `TEMPLATE.md` - This guide.

## Folders

- `docs/` - Architecture notes, API docs, user guides, diagrams, and deeper design records.
- `src/` - Production source code. Keep modules small, cohesive, and easy to test.
- `tests/` - Automated tests. Prefer focused tests for core behavior before declaring work complete.
- `scripts/` - Developer tools, setup scripts, maintenance scripts, and automation helpers.
- `assets/` - Static assets, media, example files, fixtures, or generated artifacts that belong with the project.

## Default New Project Workflow

When Shubodh asks Adrian to create a new project:

1. Ask whether to start from `C:\Dev\PROJECT_TEMPLATE`.
2. If Shubodh does not specify otherwise, use this template by default.
3. Keep the copied project modular.
4. Update the new project's `README.md`, `TODO.md`, and `NOTES.md` immediately so they match the actual project.
5. Use Git, preserve existing work, and prefer tests before calling the task complete.
