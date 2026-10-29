// Manifesto lido pelo CLI de render (scripts/render-cards.ts)
import { getCards } from "../../lib/cards";

export const GET = () =>
  Response.json(getCards().map(({ id, name, fileName }) => ({ id, name, fileName })));
