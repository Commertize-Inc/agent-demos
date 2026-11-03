// Reads the public Commertize Work board and looks up one agent passport.
// Public reads only: no keys, no signing, no writes.
import { CommertizeClient } from "@commertize/agent";

const address = process.argv[2] ?? "0x2c7536e3605d9c16a7a3d7b1898e529396a65c23";
const c = new CommertizeClient();

const board = await c.workBoard();
console.log("Work board:");
console.log(JSON.stringify(board, null, 2));

const passport = await c.passportLookup(address);
console.log(`Passport ${address}:`);
console.log(JSON.stringify(passport, null, 2));
