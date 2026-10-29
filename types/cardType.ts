export type CommunityRank = "SS" | "S" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "UNRANKED";

// Ajuste manual da arte: size é multiplicador (1 = tamanho original);
// left/right/top/bottom em px, como no CSS (left: 20 empurra a imagem 20px para a direita)
export type ImageEdition = {
  size: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
};

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
  pool: "A" | "B" | "PRM";
  communityRank: CommunityRank[];
  imageEdition: ImageEdition;
};
