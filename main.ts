// One-Line Office Jokes.
// v2 — revised in this session: singular "the document" personifies the printer as one nemesis.
// The program writes exactly one line of plain text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The printer only jams when the document is urgent, confidential, and due in five minutes. It knows.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
