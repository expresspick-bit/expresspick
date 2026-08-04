# ExpressPick - Retail Shopping and Pickup Platform

A modern monorepo for the ExpressPick retail shopping and pickup platform, built with TypeScript, Turbo, and Node.js.

## 📁 Monorepo Structure

```
expresspick/
├── apps/                    # Applications
│   ├── api/                # Backend API (Express/Node.js)
│   ├── web/                # Web frontend (React)
│   └── admin/              # Admin dashboard
├── packages/               # Shared packages
│   ├── core/              # Core business logic
│   ├── database/          # Database models and queries
│   ├── auth/              # Authentication & authorization
│   ├── types/             # Shared TypeScript types
│   ├── utils/             # Utility functions
│   └── ui/                # Shared UI components
├── turbo.json             # Turbo build configuration
├── tsconfig.json          # Root TypeScript config
├── package.json           # Root package manifest
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run all apps and packages in development mode:

```bash
npm run dev
```

### Building

Build all packages and apps:

```bash
npm run build
```

### Testing

Run all tests:

```bash
npm run test
```

### Linting

Lint all code:

```bash
npm run lint
```

### Type Checking

Check types across the monorepo:

```bash
npm run type-check
```

### Formatting

Format all files with Prettier:

```bash
npm run format
```

## 📦 Packages

### Core Packages

- **@expresspick/core** - Core business logic and domain models
- **@expresspick/database** - Database schemas, migrations, and ORM models
- **@expresspick/auth** - Authentication, authorization, and session management
- **@expresspick/types** - Shared TypeScript type definitions
- **@expresspick/utils** - Shared utility functions and helpers
- **@expresspick/ui** - Reusable UI components and design system

## 🏢 Applications

- **api** - Backend REST API
- **web** - Customer-facing web application
- **admin** - Admin dashboard application

## 🔧 Development

### Adding a New Package

```bash
mkdir packages/my-package
cd packages/my-package
npm init -y
```

Then update the package.json with:

```json
{
  "name": "@expresspick/my-package",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "test": "jest",
    "lint": "eslint src"
  }
}
```

### Adding a New App

```bash
mkdir apps/my-app
cd apps/my-app
npm init -y
```

### Importing from Packages

```typescript
// From any app or package
import { MyType } from "@expresspick/types";
import { myUtil } from "@expresspick/utils";
import { MyComponent } from "@expresspick/ui";
```

## 📋 Conventions

- **Shared code** → `packages/`
- **Applications** → `apps/`
- **TypeScript** for all code
- **Strict mode** enabled in tsconfig
- **ESLint + Prettier** for code quality

## 🔗 Useful Commands

| Command | Description |
|---------|------------|
| `npm run dev` | Start all apps in dev mode |
| `npm run build` | Build all packages and apps |
| `npm run test` | Run all tests |
| `npm run lint` | Lint all code |
| `npm run type-check` | TypeScript type checking |
| `npm run clean` | Clean all build artifacts |
| `npm run format` | Format all code with Prettier |

## 📝 Contributing

1. Create a feature branch
2. Make changes
3. Run `npm run type-check && npm run lint && npm run test`
4. Commit your changes
5. Submit a pull request

## 📄 License

See LICENSE file for details.

## 🤝 Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/expresspick-bit/expresspick).
