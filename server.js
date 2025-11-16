import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createEvents } from "ics";
import { teaEvents } from "./calendar/events.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.get("/calendar/tea.ics", (req, res) => {
  const { error, value } = createEvents(teaEvents);

  if (error) {
    console.error("Failed to generate TEA calendar:", error);
    res.status(500).json({ error: "Unable to generate calendar feed." });
    return;
  }

  res.setHeader("Content-Type", "text/calendar; charset=utf-8");
  res.setHeader("Content-Disposition", 'inline; filename="TEA.ics"');
  res.send(value);
});

app.get("/calendar", (req, res) => {
  const host = req.get("host");
  const protocol = req.protocol;
  res.type("text").send(
    [
      "TEA Foundation Calendar",
      "",
      "Subscribe with:",
      `Webcal: webcal://${host}/calendar/tea.ics`,
      `Direct download: ${protocol}://${host}/calendar/tea.ics`
    ].join("\n")
  );
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`TEA Foundation site available at http://localhost:${port}`);
});
