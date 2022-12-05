# nx-graphql

Basic working example of Apollo GraphQL (server + client) with a React UI and an ExpressJS API in an Nx monorepo.

pnpm is the node package manager.

- `apps/ui`: React SPA
- `apps/api`: Express API

## Development

- Clone or download the project repo and `cd` into it
- Install dependencies: `pnpm install`
- Run ui + api in development mode: `pnpm start`
  - Express API runs on http://localhost:3333
  - React UI runs on http://localhost:4200
  - Per `apps/ui/proxy.conf.json` the `http://localhost:4200/api/` route is a proxy to the API.

Open http://localhost:3333/ to access the Apollo Sandbox web UI.

To use Nx Cloud (https://cloud.nx.app/) for project builds set `NX_CLOUD_ACCESS_TOKEN` in a new file `nx-cloud.env` (refer to `nx-cloud.env.sample` for an example).

## Compatibility

The project supports linux development environments.

- Windows users may run the project in a WSL2 environment
- MacOS is likely supported however any scripts will assume GNU/linux versions of commands and utilities
