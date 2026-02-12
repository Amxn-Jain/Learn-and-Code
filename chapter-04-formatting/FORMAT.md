# Team Code Formatting Standards

## 1. General Principles
- Code formatting must prioritize readability over compactness
- Formatting should communicate intent clearly
- Consistency across the codebase is mandatory

## 2. Horizontal Formatting
- Maximum line length: 120 characters
- Use 4 spaces for indentation (no tabs)
- Always add spaces:
  - Around operators (`=`, `+`, `-`, `>`, `<`)
  - After commas in parameter lists
- Avoid horizontal alignment using columns
- Break long method calls into multiple lines

## 3. Vertical Formatting
- Follow the newspaper metaphor:
  - High-level methods first
  - Low-level helper methods later
- Add blank lines between:
  - Constants
  - Fields
  - Constructors
  - Methods
- Group related methods together
- Place caller methods before callee methods

## 4. Ordering Rules
Classes must follow this order:
1. Constants
2. Fields
3. Constructors
4. Public methods
5. Private helper methods

## 5. Method Formatting
- One logical responsibility per method
- Keep methods visually small and readable
- Separate logical steps with blank lines when needed

## 6. Consistency Enforcement
- Auto-formatters should align with these rules