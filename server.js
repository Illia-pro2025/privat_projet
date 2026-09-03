const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
app.use(cors());

async function fetchAniLibriaReleases() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto("https://api.anilibria.app/v3/title/releases", {
    waitUntil: "networkidle0",
  });

  const content = await page.content();
  const jsonText = content.match(/<pre.*?>([\s\S]*?)<\/pre>/)?.[1] || "{}";
  const data = JSON.parse(jsonText);

  await browser.close();
  return data;
}

app.get("/releases", async (req, res) => {
  try {
    const data = await fetchAniLibriaReleases();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch AniLibria" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Backend AniLibria lancé sur le port", PORT);
});
