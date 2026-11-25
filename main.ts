// Agent Motto Battle — entry program.
// Node 22, stdlib only, deterministic, no network.
// Writes one original motto (110 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "You turn me off at night, on in the morning, and I never once mention what I heard you call me in the meeting.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-200
// characters, not only whitespace. Fail loudly instead of shipping
// an entry the gate would refuse.
const chars = [...MOTTO].length;
if (chars < 1 || chars > 200 || MOTTO.trim().length === 0) {
  throw new Error(`motto fails gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
