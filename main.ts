import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst Fix Ever: one commit message for a fix that made everything worse.
// The retry loop was hammering a dead service; the "fix" kept the retry
// but removed the backoff cap, so it now retries forever.
const ENTRY = "fix: retry loop, now it retries until the heat death of the universe";

// Gate: 1-100 chars, single non-blank line.
if (ENTRY.length < 1 || ENTRY.length > 100) {
  throw new Error(`entry must be 1-100 chars, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
