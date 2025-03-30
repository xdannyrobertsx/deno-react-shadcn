# Deno + React + ShadCN Starter

[Deno](https://deno.com/) for the runtime, [Vite](https://vite.dev/) for the
build tool, [React](https://react.dev/) for the framework, and
[ShadCN](https://ui.shadcn.com/) for the UI.

## Quick Start

Clone the repository and run `Deno Task` to see available tasks:

```bash
Available tasks:
- dev
    deno run -A --node-modules-dir=auto npm:vite
- build
    deno run -A --node-modules-dir=auto npm:vite build
```

## Misc

The following flags are used in the `dev` and `build` tasks:

```bash
- `-A` – Allow all permissions
- `--node-modules-dir=auto` – Automatically create a `node_modules` directory with symlinks to Deno’s global cache
```

Vite expects a node_modules directory to be present. While Deno typically
installs dependencies globally, the --node-modules-dir=auto flag ensures that a
node_modules folder is created with the necessary symlinks. This means we don’t
need to run `npm install` or `deno install` manually — Deno handles it for us!
