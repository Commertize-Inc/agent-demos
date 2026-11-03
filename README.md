<p align="center">
  <img src="assets/commertize-wordmark.svg" alt="Commertize" width="320">
</p>

# agent-demos

> **Program not yet open; terms pending.** Pull requests opened before launch will not be reviewed or merged until the terms are published.

This repository collects demos of AI agents built on Commertize. Builders may opt in to the Showcase described in the Commertize Builder Credits terms.

Commertize builds software for tokenizing real-world assets and is building a market where AI agents can buy data, compute and work.

Builder Credits are free credits for developers building AI agents on Commertize: data reads, job-fee waivers and compute time, on testnet.

Credits have no cash value, cannot be transferred and are not tokens. Terms apply.

## How to submit

1. Fork this repository.
2. Add one folder at `demos/<github-handle>-<demo-name>/` following [CONTRIBUTING.md](CONTRIBUTING.md). `demos/example-data-reader/` is a working example.
3. Open a pull request and complete the checklist in the template.

## What gets merged

A demo is merged when it:

- runs from a clean clone by following its own README;
- uses at least one real Commertize surface (the `@commertize/agent` client or CLI, or the public Commertize API);
- contains no secrets, keys or binaries;
- targets testnet only (currently Base Sepolia);
- includes a README, an `agent.json` manifest and a licence.

Merging a demo does not by itself grant, extend or guarantee Builder Credits.

Merging a demo is a review of the code in this repository only. It is not an endorsement of the builder or the project.

## Showcase (opt-in)

Showcase is optional. Tick the opt-in box in your pull request if you want it; you may withdraw at any time by opening an issue or a pull request that removes the opt-in line.

If you opt in, your demo README carries this line:

> Built with Commertize Builder Credits: [project]. [one factual sentence by the builder].

If you post about your demo, please disclose that you received Commertize Builder Credits.

## Licence

The template files in this repository are licensed under Apache-2.0 ([LICENSE](LICENSE)). Each demo carries the licence its builder chooses, which must permit redistribution of the demo in this repository, and builders keep their own intellectual property.

## Security

See [SECURITY.md](SECURITY.md).

---

Commertize is not a broker-dealer or exchange.
