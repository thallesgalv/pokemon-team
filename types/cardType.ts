export type CommunityRank = "SS" | "S" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "UNRANKED";

export type Card = {
  id: number;
  name: string;
  originalName: string;
  baseRank: number;
  cardCount: number;
  basePoint: number | "=";
  extraPoints: number;
  originalText: string;
  originalPassive: string;
  text: string;
  passive: string;
  pool: 1 | 2 | "Promo";
  communityRank: CommunityRank[];
};
