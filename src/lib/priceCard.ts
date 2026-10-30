// Cartas de preço: ficam acima da Área de Captura e mostram quanto custa capturar o Pokémon abaixo
export type PriceColor = "verde" | "azul";
export type PriceCardView = { id: string; name: string; price: number; color: PriceColor; cardCount: number };

// Verdes formam a Área de Captura normal; as azuis (3 e 15) entram só ao combinar as pools
// (ver regras/combinando-as-pools.md)
const prices: { price: number; color: PriceColor }[] = [
  { price: 3, color: "verde" },
  { price: 4, color: "verde" },
  { price: 7, color: "verde" },
  { price: 10, color: "verde" },
  { price: 15, color: "verde" },
  { price: 3, color: "azul" },
  { price: 15, color: "azul" },
];

export const priceCards: PriceCardView[] = prices.map(({ price, color }) => ({
  id: `preco-${price}-${color}`,
  name: `PRECO_${price}_${color.toUpperCase()}`,
  price,
  color,
  cardCount: 1,
}));
