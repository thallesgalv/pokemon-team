# Pokémon Team

Gera as cartas do jogo para impressão e serve de wiki (Astro + Starlight).

## Setup

```sh
npm install
npx playwright install chromium   # uma vez, para o render das cartas
```

## Wiki

```sh
npm run dev      # http://localhost:4321 — home lista todas as cartas
npm run build
```

Páginas em `src/content/docs/`. A carta é um único componente (`src/components/Card.astro`), usado pelo wiki e pelo render.

## Cartas para impressão

```sh
npm run cards                         # build + um PNG por carta em output/cards/
npm run cards -- --id 1,25            # só algumas cartas (ids de data/cardList.ts)
npm run cards -- --skip-build         # reaproveita o dist/ atual
npm run cards -- --public             # também copia para public/cards/ (link "PNG" no wiki no próximo build)
```

Tamanho, DPI e sangria ficam em `card.config.ts` (padrão 63×88mm a 300 DPI = 744×1039px). Cada carta é renderizada em `/render/<id>` e fotografada com Playwright. `output/` e `public/cards/` ficam fora do git.
