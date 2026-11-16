// Manifesto lido pelo CLI de render (scripts/render-cards.ts)
import { getCards } from "../../lib/cards";
import { scoreCards } from "../../lib/scoreCard";
import { playerAidCards } from "../../lib/playerAid";
import { priceCards } from "../../lib/priceCard";
import { uniqueCards } from "../../lib/uniqueCard";
import { resetCards } from "../../lib/resetCard";

export const GET = () =>
  Response.json([
    ...getCards().map(({ id, name, fileName, cardCount }) => ({ id, name, fileName, cardCount })),
    ...scoreCards.map(({ id, name, cardCount }) => ({ id, name, cardCount })),
    ...playerAidCards.map(({ id, name, cardCount }) => ({ id, name, cardCount })),
    ...priceCards.map(({ id, name, cardCount }) => ({ id, name, cardCount })),
    ...resetCards.map(({ id, name, cardCount }) => ({ id, name, cardCount })),
    // Cartas únicas são horizontais
    ...uniqueCards.map(({ id, name, cardCount }) => ({ id, name, cardCount, landscape: true })),
  ]);
