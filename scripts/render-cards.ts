// Gera um PNG por carta em output/cards a partir da rota /render/<id>.
// Uso: npm run cards [-- --id 1,25] [--skip-build] [--public]
import { mkdirSync, writeFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { build, preview } from "astro";
import { chromium } from "playwright";
import sharp from "sharp";
import { cardConfig } from "../card.config.ts";

const PORT = 4399;
const BASE_URL = `http://localhost:${PORT}/pokemon-team`;
const OUT_DIR = "output/cards";
const PUBLIC_DIR = "public/cards";

const { values } = parseArgs({
  options: {
    id: { type: "string" },
    "skip-build": { type: "boolean", default: false },
    public: { type: "boolean", default: false },
  },
});

type CardEntry = { id: number; name: string; fileName: string; cardCount: number };

// Nome de arquivo por cópia impressa, ex.: SNORLAX_2_DE_4.png
const printFileName = (name: string, index: number, count: number) =>
  `${name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()}_${index}_DE_${count}.png`;

if (!values["skip-build"]) await build({});
const server = await preview({ server: { port: PORT }, logLevel: "warn" });

mkdirSync(OUT_DIR, { recursive: true });
if (values.public) mkdirSync(PUBLIC_DIR, { recursive: true });

// A carta já é desenhada em pixels de impressão (1 px CSS = 1 px do PNG); o sharp recorta
// o tamanho exato e grava o DPI no arquivo.
const printPx = (mm: number) => Math.round((mm / 25.4) * cardConfig.dpi);
const size = {
  width: printPx(cardConfig.widthMm + 2 * cardConfig.bleedMm),
  height: printPx(cardConfig.heightMm + 2 * cardConfig.bleedMm),
};
const viewport = { width: size.width + 1, height: size.height + 1 };
const browser = await chromium.launch();
const failures: string[] = [];
let total = 0;
let failedCopies = 0;

try {
  const cardList: CardEntry[] = await (await fetch(`${BASE_URL}/render/cards.json`)).json();
  const ids = values.id?.split(",").map(Number);
  const cards = ids ? cardList.filter((card) => ids.includes(card.id)) : cardList;
  const missing = ids?.filter((id) => !cards.some((card) => card.id === id)) ?? [];
  if (missing.length) throw new Error(`ids não encontrados: ${missing.join(", ")}`);

  const page = await browser.newPage({
    viewport,
  });

  for (const card of cards) {
    total += card.cardCount;
    try {
      await page.goto(`${BASE_URL}/render/${card.id}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForFunction(() => [...document.images].every((img) => img.complete));
      const screenshot = await page.screenshot();
      const buffer = await sharp(screenshot)
        .extract({ left: 0, top: 0, ...size })
        .withMetadata({ density: cardConfig.dpi })
        .toBuffer();
      for (let copy = 1; copy <= card.cardCount; copy++) {
        const name = printFileName(card.name, copy, card.cardCount);
        writeFileSync(`${OUT_DIR}/${name}`, buffer);
        if (values.public) writeFileSync(`${PUBLIC_DIR}/${name}`, buffer);
        console.log(`ok  ${name}`);
      }
    } catch (error) {
      failures.push(card.name);
      failedCopies += card.cardCount;
      console.error(`erro ${card.name}: ${(error as Error).message}`);
    }
  }
} finally {
  await browser.close();
  await server.stop();
}

console.log(`\n${total - failedCopies}/${total} cartas em ${OUT_DIR}${values.public ? ` (+ ${PUBLIC_DIR})` : ""}`);
if (failures.length) process.exit(1);
