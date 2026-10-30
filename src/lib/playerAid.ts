// Cartas de referência rápida: fases da rodada e palavras-chave
export type PlayerAidStep = { title: string; text: string };

// As quatro fases da rodada (ver regras/como-jogar.md)
const comoJogarSteps: PlayerAidStep[] = [
  {
    title: "1. Revelar",
    text: "Todos embaralham o baralho e revelam cartas, uma a uma, até completar o time em uma disposição 3×2.",
  },
  {
    title: "2. Contar Pontos",
    text: "Todos somam os pontos gerados.",
  },
  {
    title: "3. Capturar",
    text: "Começando pelo primeiro jogador, cada um faz até 2 ações: <strong>CAPTURAR</strong> um Pokémon (pague o preço) ou <strong>DISPENSAR</strong> um Pokémon do time (5 Pontos). Sempre reabastecendo a Área de Captura.",
  },
  {
    title: "4. Limpeza",
    text: "Recolha o time para o baralho. Se alguém gerou 30+ Pontos, vá para a Revelação Final; senão, passe a carta de primeiro jogador.",
  },
];

// Glossário (ver regras/palavras-chave.md)
const palavrasChaveSteps: PlayerAidStep[] = [
  {
    title: "Adjacente",
    text: "Pokémon vizinhos no time pela esquerda, direita, cima ou baixo <em>(Diagonais não contam.)</em>",
  },
  {
    title: "Dispensar",
    text: "Remova o Pokémon do seu time e reserve-o virado para cima fora do seu baralho.",
  },
  {
    title: "Anular",
    text: "Vire o Pokémon pra baixo no time. Ele não gera pontos nessa rodada.",
  },
  {
    title: "Empilhar",
    text: "Dessa forma, mais de 1 Pokémon ocupa o mesmo espaço. Coloque um Pokémon sobre outro, com os efeitos de todos visíveis.",
  },
  {
    title: "Retornar",
    text: "Coloque a carta virada pra baixo no fundo do baralho.",
  },
  {
    title: "Lutador",
    text: "Machamp, Hitmonlee, Primeape e Hitmonchan <em>(Poliwrath não é Lutador.)</em>",
  },
];

export type PlayerAidView = {
  id: string;
  name: string;
  cardCount: number;
  title: string;
  // Lado da seta em relação ao título
  arrow: "left" | "right";
  steps: PlayerAidStep[];
};

export const playerAidCards: PlayerAidView[] = [
  { id: "como-jogar", name: "COMO_JOGAR", cardCount: 8, title: "Como jogar", arrow: "left", steps: comoJogarSteps },
  {
    id: "palavras-chave",
    name: "PALAVRAS_CHAVE",
    cardCount: 8,
    title: "Palavras-chave",
    arrow: "right",
    steps: palavrasChaveSteps,
  },
];
