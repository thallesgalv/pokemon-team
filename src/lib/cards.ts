import { cardList } from "../../data/cardList";
import type { Card } from "../../types/cardType";
import { cardAccent, cardBackground } from "./backgrounds";
import { pokemonInfo, type PokemonInfo } from "./pokemonInfo";

export type CardView = Card & {
  info?: PokemonInfo;
  background: string;
  // Cor de contorno/barras derivada do background
  accent: string;
  // Arte em assets/pokemon/<Nome>.png; ausente enquanto não houver arquivo
  art?: string;
  // Nome do arquivo gerado pelo CLI, ex.: 010-caterpie.png
  fileName: string;
};

const pokemonArt = new Map<string, string>(
  Object.entries(
    import.meta.glob<ImageMetadata>("../../assets/pokemon/*.png", { eager: true, import: "default" }),
  ).map(([path, image]) => [path.split("/").pop()!.replace(".png", ""), image.src]),
);

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const cardFileName = (card: Pick<Card, "id" | "name">) =>
  `${String(card.id).padStart(3, "0")}-${slug(card.name)}.png`;

// Por enquanto só as cartas que já têm arte em assets/pokemon, enquanto o layout é construído
export const getCards = (): CardView[] =>
  cardList.filter((card) => pokemonArt.has(card.name)).map((card) => {
    const info = pokemonInfo.get(card.id);
    return {
      ...card,
      info,
      background: cardBackground(info?.background),
      accent: cardAccent(info?.background),
      art: pokemonArt.get(card.name),
      fileName: cardFileName(card),
    };
  });
