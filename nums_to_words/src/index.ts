import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("assets/fonts"));
app.use(express.static("assets/styles"));
app.use(express.static("assets/videos"));
app.use(express.static("build/modules"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "assets", "views", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${3000}`);
});
