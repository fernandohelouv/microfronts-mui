# Micro-Frontends Monorepo

This monorepo contains examples of micro-frontend architecture using different Module Federation implementations.

## Projects

### 1. Module Federation Example (`module-federation/`)

- **Host**: `@micro-fronts/module-fed-host` (Port: 4173)
- **Remote**: `@micro-fronts/module-fed-remote` (Port: 4174)
- Uses: `@module-federation/vite`

### 2. OriginJS Federation Example (`originjs-federation/`)

- **Host**: `@micro-fronts/originjs-host` (Port: 4175)
- **Remote**: `@micro-fronts/originjs-remote` (Port: 4176)
- Uses: `@originjs/vite-plugin-federation`

## Getting Started

### Installation

```bash
# Install all dependencies for all packages
pnpm install
```

### Running Projects

#### Run Individual Projects

```bash
# Module Federation example
pnpm dev:module-fed

# OriginJS Federation example
pnpm dev:originjs

# Run both projects simultaneously
pnpm dev:all
```

#### Run Specific Applications

```bash
# Module Federation Host
pnpm --filter "@micro-fronts/module-fed-host" dev

# Module Federation Remote
pnpm --filter "@micro-fronts/module-fed-remote" dev

# OriginJS Host
pnpm --filter "@micro-fronts/originjs-host" dev

# OriginJS Remote
pnpm --filter "@micro-fronts/originjs-remote" dev
```

### Building

```bash
# Build all projects
pnpm build:all

# Build specific project
pnpm build:module-fed
pnpm build:originjs
```

## Port Configuration

| Application | Port |
|-------------|------|
| Module Fed Host | 4173 |
| Module Fed Remote | 4174 |
| OriginJS Host | 4175 |
| OriginJS Remote | 4176 |

## Workspace Structure

```
.
├── package.json                 # Root package with workspace scripts
├── pnpm-workspace.yaml         # Workspace configuration
├── module-federation/
│   ├── host/                   # Module Federation Host
│   └── remote/                 # Module Federation Remote
└── originjs-federation/
    ├── host/                   # OriginJS Host
    └── remote/                 # OriginJS Remote
```

## Available Scripts

- `pnpm dev:module-fed` - Start Module Federation example (host + remote)
- `pnpm dev:originjs` - Start OriginJS Federation example (host + remote)
- `pnpm dev:all` - Start all projects simultaneously
- `pnpm build:all` - Build all projects
- `pnpm build:module-fed` - Build Module Federation example
- `pnpm build:originjs` - Build OriginJS Federation example

## Technologies Used

- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Frontend Framework**: React 19
- **UI Framework**: Material-UI (MUI)
- **Module Federation**:
  - `@module-federation/vite`
  - `@originjs/vite-plugin-federation`
- **Monorepo Management**: pnpm workspaces

## Development Workflow

1. Clone the repository
2. Run `pnpm install` to install all dependencies
3. Use `pnpm dev:all` to start all applications
4. Access the applications:
   - Module Fed Host: <http://localhost:4173>
   - OriginJS Host: <http://localhost:4175>
   - Remote apps run on their respective ports and are consumed by the hosts

## Tips

- Use `pnpm --filter` to run commands on specific packages
- All packages share the same dependency versions through workspace configuration
- Hot reloading works across all applications during development
