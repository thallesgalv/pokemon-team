// Cartas de preço: ficam acima da Área de Captura e mostram quanto custa capturar o Pokémon abaixo
export type PriceCardView = { id: string; name: string; price: number; cardCount: number };

// 3 e 15 têm duas cópias: a segunda entra só ao combinar as pools (ver regras/combinando-as-pools.md)
const prices: { price: number; cardCount: number }[] = [
  { price: 3, cardCount: 2 },
  { price: 4, cardCount: 1 },
  { price: 7, cardCount: 1 },
  { price: 10, cardCount: 1 },
  { price: 15, cardCount: 2 },
];

export const priceCards: PriceCardView[] = prices.map(({ price, cardCount }) => ({
  id: `preco-${price}`,
  name: `PRECO_${price}`,
  price,
  cardCount,
}));
