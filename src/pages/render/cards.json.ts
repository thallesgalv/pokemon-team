// Manifesto lido pelo CLI de render (scripts/render-cards.ts)
import { getCards } from "../../lib/cards";
import { scoreCards } from "../../lib/scoreCard";

export const GET = () =>
  Response.json([
    ...getCards().map(({ id, name, fileName, cardCount }) => ({ id, name, fileName, cardCount })),
    ...scoreCards.map(({ id, name, cardCount }) => ({ id, name, cardCount })),
  ]);
