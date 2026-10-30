// FAQ das cartas originais (manual do Flip Toons: Season 2, base/pdf), traduzido para os termos do jogo.
// Chave: id do Pokémon em data/cardList.ts. A Pool A vem do Flip Toons original, cujo manual não temos.
export const cardFaq: Record<number, string[]> = {
  // Firefly
  52: [
    "Só um jogador pode se beneficiar da habilidade de Meowth por rodada, mesmo que deixe de ter menos Pontos depois de usá-la. Em caso de empate, Meowth não tem efeito.",
  ],
  // Spider
  35: [
    "Só contam as cartas na mesma coluna de Clefairy. Pokémon anulados contam. Cartas empilhadas na mesma coluna contam, mas as da mesma pilha de Clefairy não.",
  ],
  // Grasshopper
  7: [
    "Só contam as cartas na mesma coluna de Squirtle. Pokémon anulados contam. Cartas empilhadas na mesma coluna contam, mas as da mesma pilha de Squirtle não.",
  ],
  // Groundhog
  55: [
    "A habilidade é obrigatória e não gasta ação.",
    "Golduck considera só as seis posições do time, sem contar linhas extras fora da grade 3×2.",
    "Golduck é dispensado mesmo se estiver numa pilha na primeira ou na sexta posição.",
  ],
  // Rat
  91: [
    "Se Cloyster estiver anulado ou não estiver mais no time durante a Fase de Captura, o efeito especial que reduz o custo de dispensar é ignorado.",
    "O custo de dispensar não pode ficar abaixo de 0 Pontos.",
  ],
  // Raccoon
  141: [
    "Ao capturar Kabutops, o jogador pode capturar na hora, por 0 Pontos, um Pokémon da própria pilha de dispensados ou da de outro jogador. É opcional e não gasta ação.",
  ],
  // Panther
  123: [
    "Ao capturar Scyther, o jogador dispensa na hora, por 0 Pontos, um Pokémon não anulado do seu time. É obrigatório e não gasta ação.",
  ],
  // Opossum
  121: [
    "Cada Pokémon dispensado conta para um só par. Por exemplo, com três Rattata entre os dispensados, Starmie gera só +2 Pontos.",
  ],
  // Mongoose
  130: [
    "Se a carta do fundo do baralho não puder ser dispensada, ou se o baralho acabar depois de colocar Gyarados, o jogador ainda coloca a carta do Baralho de Captura, mesmo sem ter dispensado.",
    "Se Gyarados dispensar um Pokémon com habilidade “se dispensado”, resolva essa habilidade depois da Fase de Revelação. Se mais de um jogador fizer isso, resolva em sentido horário a partir de quem tem a carta de primeiro jogador.",
    "Se um Pokémon com habilidade “quando capturado” for colocado no topo do baralho, essa habilidade é ignorada.",
  ],
  // Capybara
  127: ["Os Pontos gerados por Pinsir não mudam com alterações no baralho do jogador durante a Fase de Captura."],
  // Crow
  38: [
    "Se Ninetales for dispensado durante a Fase de Captura, o jogador pode capturar na hora um Pokémon da Área de Captura por 0 Pontos e reabastecê-la.",
    "Se for dispensado durante a Fase de Revelação, resolva a habilidade depois dessa fase. Se mais de um jogador dispensar Ninetales nela, resolva em sentido horário a partir de quem tem a carta de primeiro jogador.",
    "Capturar com essa habilidade é opcional e não gasta ação.",
  ],
  // Coyote
  94: ["Se a carta anterior não puder ser retornada, empilhe Gengar sobre ela."],
  // Fox
  136: [
    "Vaporeon é da Pool A; Jolteon é da Pool B.",
    "Os Pontos gerados por Flareon não mudam com alterações na Área de Captura durante a Fase de Captura.",
  ],
  // Crab
  9: [
    "Blastoise é retornado se for colocado em qualquer lugar da coluna do meio, inclusive numa linha nova acima de um Aerodactyl ou empilhado sobre outra carta.",
    "Se Blastoise for retornado com o baralho vazio ou só com Blastoise, a Fase de Revelação do jogador termina na hora e os Blastoise ficam no baralho.",
  ],
  // Gorilla
  142: [
    "Quando Aerodactyl é colocado na linha de cima do time, o próximo Pokémon revelado vai acima dele, criando uma linha extra.",
    "A linha extra faz parte do time, mas não ocupa nenhuma das seis posições e não conta como “linha de cima”.",
    "Se já houver uma carta acima de Aerodactyl, crie a linha extra acima dessa carta.",
  ],
  // Vulture
  146: [
    "Um Pokémon anulado não tem rank e não pode ser dispensado.",
    "Dispensar é obrigatório e não gasta ação.",
    "Se Moltres não estiver mais no time no fim da Fase de Captura, a habilidade é ignorada.",
  ],
  // Zebra
  112: [
    "Se Rhydon for o primeiro Pokémon do time, ignore a habilidade.",
    "Um Pokémon anulado não tem rank e nunca é retornado por Rhydon.",
    "Se o Pokémon de menor rank não puder ser retornado, empilhe Rhydon sobre ele.",
  ],
  // Hippopotamus
  110: ["Os Pontos gerados por Weezing não mudam com alterações no baralho do jogador durante a Fase de Captura."],
};
