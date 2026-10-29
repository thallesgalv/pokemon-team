import { cardList } from "../../data/cardList";
import type { Card } from "../../types/cardType";
import { cardBackground } from "./backgrounds";
import { pokemonInfo, type PokemonInfo } from "./pokemonInfo";

export type CardView = Card & {
  info?: PokemonInfo;
  background: string;
  sprite: string;
  // Nome do arquivo gerado pelo CLI, ex.: 010-caterpie.png
  fileName: string;
};

const spriteUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/lets-go-pikachu-lets-go-eevee/${id}.gif`;

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const cardFileName = (card: Pick<Card, "id" | "name">) =>
  `${String(card.id).padStart(3, "0")}-${slug(card.name)}.png`;

export const getCards = (): CardView[] =>
  cardList.map((card) => {
    const info = pokemonInfo.get(card.id);
    return {
      ...card,
      info,
      background: cardBackground(info?.background),
      sprite: spriteUrl(card.id),
      fileName: cardFileName(card),
    };
  });
