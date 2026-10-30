// Carta de placar: frente com 1–20, verso com 21–40, cada faixa com a cor e a insígnia de Kanto
export type ScoreSide = "frente" | "verso";

type Tier = { max: number; color: string; badge: string };

const tiers: Tier[] = [
  { max: 5, color: "#8a8f98", badge: "rocha" },
  { max: 10, color: "#2f6fd6", badge: "cascata" },
  { max: 15, color: "#e8b923", badge: "trovao" },
  { max: 20, color: "#3a9a48", badge: "arco-iris" },
  { max: 22, color: "#7b4bb7", badge: "alma" },
  { max: 24, color: "#e46aa6", badge: "pantano" },
  { max: 26, color: "#d23a2e", badge: "vulcao" },
  { max: 29, color: "#7a4e2d", badge: "terra" },
  // 30+ aciona a Revelação Final: Planalto Índigo
  { max: 40, color: "#1a1a1a", badge: "liga" },
];

const badgeIcons = new Map<string, string>(
  Object.entries(
    import.meta.glob<ImageMetadata>("../../assets/badges/*.svg", { eager: true, import: "default" }),
  ).map(([path, image]) => [path.split("/").pop()!.replace(".svg", ""), image.src]),
);

export type ScoreCell = { value: number; color: string; badge: string };

const cell = (value: number): ScoreCell => {
  const tier = tiers.find((t) => value <= t.max)!;
  return { value, color: tier.color, badge: badgeIcons.get(tier.badge)! };
};

// Linhas da tabela: duas colunas de 10 (1–10 | 11–20 na frente, 21–30 | 31–40 no verso)
export const scoreRows = (side: ScoreSide): ScoreCell[][] => {
  const start = side === "frente" ? 1 : 21;
  return Array.from({ length: 10 }, (_, i) => [cell(start + i), cell(start + 10 + i)]);
};

export type ScoreCardView = { id: string; name: string; side: ScoreSide; cardCount: number };

// Uma carta por jogador
export const scoreCards: ScoreCardView[] = [
  { id: "placar-frente", name: "PLACAR_FRENTE", side: "frente", cardCount: 4 },
  { id: "placar-verso", name: "PLACAR_VERSO", side: "verso", cardCount: 4 },
];
