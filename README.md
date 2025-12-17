# Learn and Code

## 📘 About
**Learn and Code** is a structured learning repository created to practice core programming concepts while strictly following **real-world software engineering and Git standards**.

---

## 🎯 Objectives
- Apply clean code
- Build a portfolio-ready repository that reflects industry practices

---

## 🗂 Repository Structure
```text
learn-and-code/
├── chapter-01-naming-conventions/
│   ├── assignment-01/
│   └── assignment-02/
├── chapter-02-functions/
│   ├── assignment-01/
│   ├── assignment-02/
│   ├── assignment-03/
│   ├── assignment-04/
│   └── assignment-05/
└── README.md
```

---

## 🔀 Git Workflow Conventions

### Branch Naming Convention
Follow this pattern for all branches:

```
<type>/<chapter>-<short-description>
```

**Types:**
- `feat` - New feature or assignment
- `fix` - Bug fix or correction
- `docs` - Documentation updates
- `refactor` - Code refactoring

**Examples:**
- `feat/chapter-01-camelcase-assignment`

---

### Commit Message Convention
Use **Conventional Commits** format:

```
type(scope): short description
```

**Structure:**
- **type**: `feat`, `fix`, `docs`, `refactor`
- **scope**: The chapter or assignment being worked on
- **description**: Brief summary in present tense (imperative mood)

**Examples:**

```
feat(chapter-01): add camelCase naming examples
```

```
fix(chapter-02): correct function parameter order
```

```
docs(readme): update repository structure
```

```
refactor(chapter-02): simplify nested conditions
```

---

### Pull Request (PR) Description Convention

Use this format for PR descriptions:

```
[Chapter-X]: Short clear purpose
```

**Examples:**

```
[Chapter-1]: Add camelCase and snake_case naming examples
```

---