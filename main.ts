// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to /output/entry.txt.
// Deterministic: the sentence is a string literal; no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "The senator behind Bill S-1187, the 214-page Artificial Intelligence Accountability Act, just asked his intern to turn it into a PDF, while the machines he wants to regulate do it in one click.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
