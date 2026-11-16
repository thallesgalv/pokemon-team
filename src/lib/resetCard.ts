// Carta de Resetar: uma por jogador, virada pra baixo depois de usada (ver regras/carta-de-resetar.md)
export type ResetCardView = { id: string; name: string; cardCount: number; text: string };

export const resetCards: ResetCardView[] = [
  {
    id: "resetar",
    name: "RESETAR",
    cardCount: 8,
    text: "Vire esta carta pra baixo pra usar o Resetar em jogo. <em>(Nidoking ou Nidoqueen a deixam virada pra cima de novo.)</em>",
  },
];
