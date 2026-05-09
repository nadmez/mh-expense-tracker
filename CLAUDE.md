# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a basic expense tracker application used as a starter project for a [Claude Code course](https://codewithmosh.com/p/claude-code). The app is intentionally designed with bugs, poor UI, and messy code that are improved throughout the course. It's a React-based single-page application that allows users to track income and expenses with categorization and filtering.

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server (http://localhost:5173)
npm run build        # Build for production
npm run lint         # Run ESLint to check code quality
npm run preview      # Preview production build locally
```

## Architecture

### Tech Stack
- **Frontend Framework**: React 19.2 with hooks
- **Build Tool**: Vite 7.2
- **Linting**: ESLint 9.39 with React plugins
- **No backend**: All data is stored in client-side React state

### Code Structure
- `src/main.jsx` - Entry point that mounts the React app
- `src/App.jsx` - Main container component managing state and orchestrating child components:
  - Central state management with `useState` hooks
  - Transaction state and form input state
  - Filter state (type and category)
  - Passes data and callbacks to child components
  - Handles form submission and transaction creation
- `src/Summary.jsx` - Presentational component displaying financial summary:
  - Calculates and displays total income, expenses, and balance
  - Receives transactions as prop
  - Pure component (only renders, no state)
- `src/TransactionForm.jsx` - Form component for adding new transactions:
  - Controlled form inputs (description, amount, type, category)
  - Receives all form state and category options as props
  - Calls onSubmit callback when form is submitted
- `src/TransactionList.jsx` - Transactions display and filtering component:
  - Displays table of transactions with filtering controls
  - Filters by type (income/expense) and category
  - Receives transactions and filter state as props
  - Calls callbacks to update filter state
- `src/App.css` & `src/index.css` - Global and component styling
- `vite.config.js` - Vite configuration with React plugin enabled
- `eslint.config.js` - ESLint configuration

### State Management
State is centralized in App.jsx and passed down to child components via props (lifted state pattern):
- **Transaction State**: `transactions` - Array of transaction objects with `id`, `description`, `amount` (number), `type` (income/expense), `category`, `date`
- **Form Input State**: `description`, `amount`, `type`, `category` - Local form state for the add transaction form
- **Filter State**: `filterType`, `filterCategory` - Controls what transactions are displayed

### Component Architecture
The app follows a parent-child component structure:
```
App (state container)
├── Summary (display only)
├── TransactionForm (controlled inputs)
└── TransactionList (display + filtering)
```

Data flows down via props, and child components communicate with parent via callback functions (`onSubmit`, `onFilterTypeChange`, etc.).

### Known Issues (Intentional for Course)
The codebase intentionally contains bugs and poor practices that are addressed through the course. When making improvements, focus on:
- Code organization and componentization
- UI/UX improvements
- Bug fixes discovered during development
- State management best practices
- Performance optimizations

## Development Notes

- **Data Persistence**: Currently uses in-memory state; data is lost on page refresh
- **Amount Storage**: Amounts are properly stored as numbers (via `parseFloat()`) for reliable calculations
- **Categories**: Fixed list of categories: food, housing, utilities, transport, entertainment, salary, other
- **No Tests**: The project intentionally has no test suite (can be added as part of improvements)

## Recent Changes

**Component Refactoring**: The monolithic App.jsx has been refactored into smaller, focused components (Summary, TransactionForm, TransactionList). App.jsx now serves as the state container and orchestrator. This improves:
- Code maintainability and readability
- Component reusability
- Separation of concerns (form logic, display logic, calculations)
