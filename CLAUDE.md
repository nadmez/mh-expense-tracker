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
- `src/App.jsx` - Single monolithic component containing all UI and logic:
  - Transaction state management with `useState`
  - Summary calculations (income, expenses, balance)
  - Form for adding transactions
  - Transaction filtering by type and category
  - Table display of transactions
- `src/App.css` & `src/index.css` - Global and component styling
- `vite.config.js` - Vite configuration with React plugin enabled
- `eslint.config.js` - ESLint configuration

### State Management
All state is managed through React hooks in App.jsx:
- `transactions` - Array of transaction objects with `id`, `description`, `amount`, `type`, `category`, `date`
- Form input state - `description`, `amount`, `type`, `category`
- Filter state - `filterType`, `filterCategory`

### Known Issues (Intentional for Course)
The codebase intentionally contains bugs and poor practices that are addressed through the course. When making improvements, focus on:
- Code organization and componentization
- UI/UX improvements
- Bug fixes discovered during development
- State management best practices
- Performance optimizations

## Development Notes

- **Data Persistence**: Currently uses in-memory state; data is lost on page refresh
- **Type Coercion**: Amount values are stored as strings; calculations convert to numbers
- **Categories**: Fixed list of categories: food, housing, utilities, transport, entertainment, salary, other
- **No Tests**: The project intentionally has no test suite (can be added as part of improvements)
