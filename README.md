# Workflow Course Assignment

This project was part of a workflow course where we learned how to improve a website using modern development tools. The goal was to set up linting, formatting, and testing tools like ESLint, Prettier, Vitest, and Playwright to help catch bugs early and keep the code clean and consistent.

## Features

- **Code Quality Tools:** Integrated ESLint and Prettier for consistent, clean code.
- **Pre-commit Hooks:** Configured with Husky and lint-staged to automatically lint and format code before each commit.
- **Unit Testing:** Added meaningful unit tests with Vitest to verify utility functions.
- **End-to-End Testing:** Implemented E2E tests with Playwright to ensure key user flows (like login and navigation) work as expected.
- **Environment Variable Support:** Securely handled login credentials using a .env file and provided a .env.example template.

## Prerequisites

- Node.js (v20.18 or higher recommended)
- npm
- Git

## Getting Started

### Installation

```bash
npm install
```

Note: Husky git hooks will be installed automatically.

### Running the project

```bash
npm run dev
```

### Running tests

Make sure to create your `.env` file with the required variables before running tests.

**Run unit tests only:**

```bash
npm run test:unit
```

**Run end-to-end tests only:**

```bash
npm run test:e2e
```

## Environment Variables

Create a `.env` file in the root directory with below key values:

```bash
VITE_USERNAME=your-username
VITE_PASSWORD=your-password
```

Note: This file should be in .gitignore to keep credentials safe.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test:unit` - Run unit tests only
- `npm run test:e2e` - Run end-to-end tests only
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Technologies

- JavaScript
- HTML & CSS
- ESLint
- Prettier
- Vitest
- Playwright
- Husky

## Branch & PR Workflow

All changes are made on a workflow branch. A Pull Request has been opened from the workflow branch into the default branch.

## Author

GitHub username = [Mayamariaruth](https://github.com/Mayamariaruth)
