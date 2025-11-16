import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createEvents } from "ics";
import { teaEvents } from "../calendar/events.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, "../calendar");
const outputPath = path.join(outputDir, "tea.ics");

const { error, value } = createEvents(teaEvents);

if (error) {
  console.error("Unable to generate TEA calendar:", error);
  process.exitCode = 1;
} else {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, value, "utf8");
  console.log(`Generated ${path.relative(process.cwd(), outputPath)} with ${teaEvents.length} events.`);
}
