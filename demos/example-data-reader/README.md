# example-data-reader

## What it does

Reads the public Commertize Work board and looks up one agent passport, then prints both as JSON. Public reads only: no keys, no signing, no writes.

## Commertize surfaces used

- `@commertize/agent` 0.1.0: `CommertizeClient.workBoard()` and `CommertizeClient.passportLookup(address)`
- The same reads from the CLI: `npx @commertize/agent board` and `npx @commertize/agent passport <0xaddress>`

## How to run

Requires Node.js 18 or later.

```sh
git clone https://github.com/Commertize-Inc/agent-demos
cd agent-demos/demos/example-data-reader
npm install
npm start                  # uses the example address from the package README
node index.mjs 0x<address> # or pass your own
```

Or without cloning:

```sh
npx @commertize/agent board
npx @commertize/agent passport 0x2c7536e3605d9c16a7a3d7b1898e529396a65c23
```

## Licence

Apache-2.0 ([LICENSE](LICENSE)).
