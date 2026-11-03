# Contributing a demo

> **Program not yet open; terms pending.**

## Folder layout

One folder per demo:

```
demos/<github-handle>-<demo-name>/
  README.md     what it does, which Commertize surfaces it uses, how to run it
  agent.json    manifest (shape below)
  LICENSE       the licence you choose
  ...           your source files
```

Use lowercase and hyphens for `<demo-name>`. Change files only inside your own folder.

## README.md (required sections)

- **What it does**: two or three sentences.
- **Commertize surfaces used**: for example `@commertize/agent` `workBoard()`, `passportLookup()`, or the CLI commands `board`, `task <id>`, `passport <0xaddress>`, `docs <query>`.
- **How to run**: exact commands from a clean clone, including the Node or Python version.
- **Showcase line** (only if you opt in): `Built with Commertize Builder Credits: [project]. [one factual sentence].`

## agent.json

Use the same field shape as the Commertize agent card at `https://commertize.com/.well-known/agent.json`:

```json
{
  "name": "your-demo-name",
  "description": "One factual sentence about what the agent does.",
  "url": "https://github.com/<github-handle>/<repo-or-this-folder>",
  "provider": { "organization": "<your name or org>", "url": "https://github.com/<github-handle>" },
  "version": "0.1.0",
  "capabilities": { "streaming": false },
  "defaultInputModes": ["application/json"],
  "defaultOutputModes": ["application/json"],
  "skills": [
    { "id": "example.read", "name": "Short name", "description": "What this skill does.", "tags": ["commertize"] }
  ]
}
```

## Rules

- **Licence**: the template is Apache-2.0; your demo carries the licence you choose, in your folder; it must permit redistribution of the demo in this repository. You keep your intellectual property.
- **No secrets**: no private keys, seed phrases, API keys or dotenv files. Read anything secret from the environment and document the variable name only. Never commit the file written by `keygen --out <file>`.
- **No binaries**: no compiled artefacts, archives or large media; source and small text files only.
- **Base Sepolia only**: demos use testnet only (currently Base Sepolia). Do not include addresses or configuration for any production network.
- **Factual descriptions**: describe what the demo does; no performance or results claims.
- Credits and Showcase are never conditioned on a product review or testimonial, a social post, or a star of any repository.
