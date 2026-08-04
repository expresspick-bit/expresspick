# ExpressPick Monorepo Development Guide

## Overview

This guide provides comprehensive instructions for developing within the ExpressPick monorepo using Turbo, TypeScript, and npm workspaces.

## Table of Contents

1. [Setup](#setup)
2. [Directory Structure](#directory-structure)
3. [Workspace Management](#workspace-management)
4. [Building & Development](#building--development)
5. [Testing](#testing)
6. [Dependency Management](#dependency-management)
7. [Best Practices](#best-practices)

## Setup

### Initial Installation

```bash
# Clone the repository
git clone https://github.com/expresspick-bit/expresspick.git
cd expresspick

# Install dependencies for all workspaces
npm install

# Install Turbo globally (optional but recommended)
npm install -g turbo
```

### Verify Setup

```bash
turbo --version
npm --version
node --version
```

## Directory Structure

### Root Level

- **apps/** - Standalone applications
  - `api/` - Backend REST API service
  - `web/` - Customer web application
  - `admin/` - Admin management interface

- **packages/** - Shared libraries and utilities
  - `core/` - Core domain logic
  - `database/` - Database models & ORM
  - `auth/` - Authentication services
  - `types/` - TypeScript type definitions
  - `utils/` - Helper utilities
  - `ui/` - UI component library

### Package Structure (per package)

```
package-name/
├── src/
│   ├── index.ts           # Entry point
│   └── [features]         # Feature modules
├── dist/                  # Compiled output (generated)
├── package.json
├── tsconfig.json          # Package-specific overrides
└── README.md
```

## Workspace Management

### Understanding Workspaces

npm workspaces allows multiple projects to share dependencies. Key benefits:

- Single `node_modules` directory (hoisted)
- Symlinked local packages
- Dependency deduplication
- Unified version management

### Adding a Dependency to a Package

```bash
# Add to a specific package
npm install package-name --workspace=@expresspick/package-name

# Add dev dependency
npm install --save-dev package-name --workspace=@expresspick/package-name

# Add to root (shared by all)
npm install package-name --workspace-root
```

### Referencing Local Packages

```typescript
// In apps/api/src/index.ts
import { User } from "@expresspick/database";
import { authenticate } from "@expresspick/auth";
import { formatDate } from "@expresspick/utils";
```

The path aliases are configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@expresspick/*": ["packages/*/src", "apps/*/src"]
    }
  }
}
```

## Building & Development

### Development Mode

```bash
# Start all services in development mode
npm run dev

# This runs the `dev` script in each package/app with Turbo caching disabled
```

### Production Build

```bash
# Build all packages and apps
npm run build

# Build a specific package
npm run build --filter=@expresspick/core

# Build with specific package and its dependencies
npm run build --filter=@expresspick/api...
```

### Understanding Turbo Cache

Turbo tracks:
- Source file contents
- Task configuration
- Build outputs

Cache hits prevent unnecessary rebuilds. To reset:

```bash
npm run clean  # Cleans all build artifacts
turbo prune --scope=@expresspick/api  # Prune specific package cache
```

### Type Checking

```bash
# Check types across monorepo
npm run type-check

# Type check specific package
npm run type-check --filter=@expresspick/database
```

### Linting

```bash
# Lint all packages
npm run lint

# Lint specific package
npm run lint --filter=@expresspick/utils

# Fix linting issues
npm run lint -- --fix
```

## Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests for specific package
npm run test --filter=@expresspick/auth

# Run with coverage
npm run test -- --coverage
```

### Test Configuration

Each package should have a test script in `package.json`:

```json
{
  "scripts": {
    "test": "jest --passWithNoTests"
  }
}
```

## Dependency Management

### Best Practices

1. **Shared Dependencies** - Add to root `package.json`
   ```bash
   npm install lodash --workspace-root
   ```

2. **Package-Specific Dependencies** - Add to package
   ```bash
   npm install express --workspace=@expresspick/api
   ```

3. **Dev Dependencies** - Use `--save-dev`
   ```bash
   npm install --save-dev jest --workspace=@expresspick/core
   ```

### Version Management

- Keep major versions aligned for shared tools (TypeScript, ESLint, etc.)
- Use `npm list` to see dependency tree
- Run `npm update` carefully (consider using Dependabot)

## Best Practices

### 1. Package Independence

Each package should:
- Have clear responsibility
- Be independently testable
- Export public API via `index.ts`
- Include its own `README.md`

### 2. Type Safety

- Enable strict TypeScript mode globally
- Use explicit return types
- Export interfaces from `@expresspick/types`

### 3. Code Organization

```typescript
// Good
import { User } from "@expresspick/database";
import { validateEmail } from "@expresspick/utils";

// Avoid
import User from "../../database/src/models/user";
```

### 4. Import Organization

```typescript
// 1. External packages
import express from "express";
import { z } from "zod";

// 2. Internal packages (by layer)
import { User } from "@expresspick/database";
import { authenticate } from "@expresspick/auth";

// 3. Relative imports (same package only)
import { helper } from "./helpers";
```

### 5. Creating New Packages

```bash
# 1. Create directory
mkdir packages/new-package
cd packages/new-package

# 2. Initialize with standard structure
npm init -y
mkdir -p src

# 3. Update package.json
cat > package.json << 'EOF'
{
  "name": "@expresspick/new-package",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "test": "jest --passWithNoTests",
    "lint": "eslint src"
  },
  "dependencies": {},
  "devDependencies": {}
}
EOF

# 4. Create entry point
echo 'export {};' > src/index.ts

# 5. Root package.json will auto-detect the new workspace
npm install
```

### 6. Monorepo Commands

```bash
# See what Turbo will do (dry run)
turbo run build --dry

# Filter to specific packages
turbo run build --filter="@expresspick/core"
turbo run build --filter="@expresspick/api..."  # Including dependencies
turbo run build --filter="...@expresspick/api"  # Including dependents

# Continue on error
turbo run build --continue

# Show task details
turbo run build --verbose
```

## Troubleshooting

### Issue: Module not found

**Solution**: Ensure the package is listed in `tsconfig.json` paths and the import path matches.

### Issue: Cache issues after refactor

**Solution**: Run `npm run clean` to clear all build artifacts.

### Issue: Dependency conflicts

**Solution**: Check `npm list` output and ensure versions are compatible.

### Issue: Symlinks not working

**Solution**: Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

## References

- [npm Workspaces Docs](https://docs.npmjs.com/cli/using-npm/workspaces)
- [Turbo Documentation](https://turbo.build/repo/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
