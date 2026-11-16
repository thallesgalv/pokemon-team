// Cartas únicas (1 cópia cada), horizontais: primeiro jogador, primeiro a chegar no Planalto Índigo
// e as cartas de regra de Resetar (ver regras/carta-de-resetar.md)
import firstPlayer from "../../assets/other/FIRST_PLAYER.jpg";
import allBadges from "../../assets/other/ALL_BADGES.png";

export type UniqueCardView = {
  id: string;
  name: string;
  cardCount: number;
  title: string[];
  subtitle: string;
  text: string;
  // Imagem no lado esquerdo; sem ela, usa a ilustração em CSS
  image?: string;
  // Enquadramento da imagem no lado esquerdo (object-position)
  imagePosition?: string;
  illustration?: "resetar-time" | "resetar-area";
  // Texto de regra mais longo: imagem mais estreita e fontes menores
  dense?: boolean;
  // Cor da moldura com raios
  color: "vermelho" | "indigo" | "verde" | "azul";
  // Pontos extras exibidos na moeda
  bonus?: string;
};

export const uniqueCards: UniqueCardView[] = [
  {
    id: "primeiro-jogador",
    name: "PRIMEIRO_JOGADOR",
    cardCount: 1,
    title: ["Primeiro", "jogador"],
    subtitle: "Comece a Captura",
    text: "Na Limpeza, passe esta carta para o próximo jogador <em>(sentido horário)</em>.",
    image: firstPlayer.src,
    imagePosition: "88% 40%",
    color: "vermelho",
  },
  {
    id: "planalto-indigo",
    name: "PLANALTO_INDIGO",
    cardCount: 1,
    title: ["Planalto", "Índigo"],
    subtitle: "Primeiro a chegar",
    text: "Pontos extras na Revelação Final.",
    // Centraliza as insígnias e deixa de fora as faixas pretas das laterais
    image: allBadges.src,
    imagePosition: "59% 20%",
    color: "indigo",
    bonus: "+3",
  },
  {
    id: "resetar-time",
    name: "RESETAR_TIME",
    cardCount: 1,
    title: ["Resetar", "Time"],
    subtitle: "Depois da Contar Pontos",
    text: "A partir do primeiro jogador <em>(sentido horário)</em>, cada um decide se usa sua Carta de Resetar. Quem usar a vira pra baixo, recolhe o time pro baralho, embaralha e refaz a Fase de Revelação. Depois, todos repetem a Contar Pontos. <em>(Vale também na Revelação Final.)</em>",
    illustration: "resetar-time",
    dense: true,
    color: "verde",
  },
  {
    id: "resetar-area",
    name: "RESETAR_AREA_DE_CAPTURA",
    cardCount: 1,
    title: ["Resetar Área", "de Captura"],
    subtitle: "Na Fase de Captura",
    text: "No seu turno, antes de qualquer ação, vire sua Carta de Resetar pra baixo pra embaralhar todos os Pokémon da Área de Captura de volta no baralho de captura. Depois, reabasteça a Área de Captura.",
    illustration: "resetar-area",
    dense: true,
    color: "azul",
  },
];

