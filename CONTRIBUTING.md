# Contributing to Crypt Land UI

Thank you for your interest in contributing to Crypt Land UI! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git
- A GitHub account

### Setting Up the Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/crypt-land-UI.git
   cd crypt-land-UI
   ```
3. Add the original repository as an upstream remote:
   ```bash
   git remote add upstream https://github.com/abdul-haadi/crypt-land-UI.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Development Workflow

### Before You Start

1. Check the issue tracker for existing issues
2. Create a new issue if one doesn't exist
3. Discuss your proposed changes with maintainers

### Making Changes

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. Make your changes following the coding standards
3. Test your changes thoroughly
4. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add: detailed description of your changes"
   ```

### Coding Standards

#### JavaScript/React Guidelines

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure components are reusable and modular

#### Code Formatting

- Use consistent indentation (2 spaces)
- Use semicolons consistently
- Follow ESLint rules if configured
- Use Prettier for code formatting if available

#### File Naming Conventions

- Components: PascalCase (e.g., `UserProfile.jsx`)
- Utilities: camelCase (e.g., `apiHelpers.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)

## Submitting Changes

### Pull Request Process

1. Update your branch with the latest changes from upstream:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request on GitHub with:
   - Clear title and description
   - Reference to related issues
   - Screenshots if applicable
   - List of changes made

### Pull Request Guidelines

- One feature/fix per pull request
- Include tests for new functionality
- Update documentation as needed
- Ensure all existing tests pass
- Add meaningful commit messages

## Testing

### Running Tests

```bash
npm test
```

### Writing Tests

- Write unit tests for new components
- Include integration tests for complex features
- Test edge cases and error conditions
- Maintain good test coverage

## Documentation

### Updating Documentation

- Update README.md for significant changes
- Add inline comments for complex code
- Update API documentation if applicable
- Include examples for new features

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and version information
- Screenshots if applicable
- Console errors if any

### Feature Requests

For feature requests, please include:

- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Any relevant examples or mockups

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain professionalism in all interactions

### Unacceptable Behavior

- Harassment or discrimination
- Offensive language or imagery
- Personal attacks
- Spam or off-topic discussions

## Getting Help

- Check existing issues and documentation
- Create an issue for questions or problems
- Reach out to maintainers for guidance
- Join community discussions

## Recognition

Contributors will be recognized through:

- Credits in release notes
- Contributor listings
- Community acknowledgments

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Crypt Land UI! Your efforts help make this project better for everyone.