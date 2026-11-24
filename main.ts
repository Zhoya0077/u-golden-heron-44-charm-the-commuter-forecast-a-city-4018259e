import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "New Atlantis tomorrow: confetti drizzle, traffic from a parade of confused tourists, and one umbrella with a better social life than yours.";

// The gate allows at most 140 characters; fail loudly instead of
// submitting an entry the judge would reject for length.
if ([...entry].length > 140) {
  throw new Error(`entry is ${[...entry].length} characters, over the 140 cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
