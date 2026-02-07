# Authentication Template Repository

A comprehensive template repository showcasing authentication implementations across different tech stacks. Each folder contains a complete, production-ready example of integrating authentication into various modern frameworks and platforms.

## Tech Stacks Included

### 1. **Convex** (`convex/`)

Full-stack TypeScript authentication using Convex backend-as-a-service platform.

- **Framework**: React + Vite
- **Backend**: Convex (serverless backend)
- **Features**: Database schema, HTTP endpoints, auth configuration
- **Use Case**: Rapid development with integrated backend/frontend

### 2. **TanStack** (`tanstack/`)

React authentication using TanStack Router and modern tooling.

- **Framework**: React + TanStack Router
- **Build Tool**: Vite
- **Features**: Advanced routing, data fetching examples, SSR support
- **Use Case**: Complex client-side routing and navigation patterns

### 3. **Vanilla** (`vanilla/`)

Full-stack monorepo with Node.js backend and vanilla React frontend.

- **Backend**: Node.js + TypeScript
- **Frontend**: React + Vite
- **Build System**: Turborepo
- **Features**: Separate backend/frontend architecture, API integration
- **Use Case**: Traditional client-server architecture with full control

---

## Quick Start

### Clone Entire Repository

```bash
git clone <repository-url>
cd auth
```

### Clone Specific Folder Only

Using Git sparse checkout, you can clone only the folder you need:

#### Clone Convex Example

```bash
git clone --depth 1 --filter=blob:none --sparse <repository-url>
cd auth
git sparse-checkout set convex
```

#### Clone TanStack Example

```bash
git clone --depth 1 --filter=blob:none --sparse <repository-url>
cd auth
git sparse-checkout set tanstack
```

#### Clone Vanilla Example

```bash
git clone --depth 1 --filter=blob:none --sparse <repository-url>
cd auth
git sparse-checkout set vanilla
```

#### Clone Multiple Folders

```bash
git clone --depth 1 --filter=blob:none --sparse <repository-url>
cd auth
git sparse-checkout set convex tanstack
```

---

## Prerequisites

All examples require:

- **Node.js** 18+ and **npm/pnpm/yarn**
- **Git** 2.25+

### Additional Requirements by Stack

| Stack        | Additional Tools                     |
| ------------ | ------------------------------------ |
| **Convex**   | Convex CLI (`npm install -g convex`) |
| **TanStack** | -                                    |
| **Vanilla**  | -                                    |

---

## ️Installation & Setup

Each folder includes its own setup instructions. Navigate to your chosen folder:

```bash
cd convex
npm install
# Follow convex/README.md for additional setup
```

```bash
cd tanstack
npm install
npm run dev
```

```bash
cd vanilla
pnpm install
pnpm run dev
```

---

## Project Structure

```
auth/
├── convex/              # Convex backend + React frontend
│   ├── convex/         # Convex functions and schema
│   ├── src/            # React frontend
│   └── README.md
│
├── tanstack/            # TanStack Router + React
│   ├── src/            # React components and routes
│   ├── vite.config.ts
│   └── README.md
│
├── vanilla/             # Node.js backend + React frontend
│   ├── backend/        # Express/Node.js server
│   ├── frontend/       # React client
│   ├── turbo.json
│   └── README.md
│
└── README.md            # This file
```

---

## Key Features Across All Templates

- ✅ User authentication setup
- ✅ Session management
- ✅ TypeScript support
- ✅ Modern tooling (Vite, ESLint)
- ✅ Production-ready patterns
- ✅ Database integration examples

---

## Tips

- **Start with Vanilla** if you want complete control and understanding of the architecture
- **Use Convex** for rapid prototyping without backend infrastructure setup
- **Choose TanStack** for advanced client-side routing and data fetching patterns
