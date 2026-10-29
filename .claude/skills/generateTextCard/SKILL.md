---
name: generateTextCard
description: Gera os textos text e passive dos itens de cardList baseado em critérios
---

# Objetivo
Gerar textos para as propriedade text e passive de todas as cardList baseando-se nos critérios abaixo. PS: Os valores de originalText e originalPassive não devem ser alterados de forma alguma!!

# Termos
Importante olhar o arquivo base/csv/termsFromTo.csv para observar os termos que serão usados. Dessa forma conseguimos ter consistencias de termos chaves.

# Cartas que referenciam a pópria ou outras cartas
Existem cartas como CACHORRO, COELHO entre outras que referenciam cartas em seu texto. Troque esses termos "CACHORRO", "COELHO" entre outros, pelo nome do Pokémon correspondente.

# Cartas com texto em inglês
Há cartas, especialmente do POOL B, que possuem textos exclusivamente em inglês. Precisamos que ao gerar os textos de passive e text sejam traduzidos ao português.

# Keywords em negrito
As keywords devem ser marcadas com `**termo**` em text e passive; o card renderiza essa marcação em negrito. São keywords os termos de destino do base/csv/termsFromTo.csv (ex.: **Dispensar**/**dispense**, **Empilhe**, **Anule**, **Capturar**, **Retornar**, **Contar Pontos**), além de **adjacente** e dos marcadores condicionais em maiúsculas (**POR**, **SE**).

# Estilo
Esclarecimentos de regra devem ser curtos e entre parênteses ao final, marcados com `*(...)*`; o card renderiza essa marcação em itálico e com fonte levemente menor. Ex.: "**POR** Pokémon **adjacente** diferente *(diagonais não contam)*". Não adicione interpretações que não estejam no FAQ.

# Melhora geral na qualidade dos textos para entendimento dos efeitos
Importante fazer um exercício para cada carta com o seguinte: 
- É possível/provável que seus textos possam ser alterados/complementados para melhor entendimento de regras e comportamentos; Para auxiliar em sua análise, segue abaixo os textos de FAQ das cartas. Dessa forma, é possível ter uma noção do efeito completo da carta. Convido também a analisar eventuais postagens em fóruns no BGA, BGG que referenciam o jogo original FlipToons.

FAQ

Gambá (0): Apenas um jogador pode se beneficiar da
habilidade do Gambá por rodada. Se dois jogadores
empatarem pela menor fama, a habilidade do Gambá não
é ativada. A habilidade do Gambá pode ser usada para
dispensar ele mesmo. Esta habilidade não custa uma ação.
Então, mesmo que use a habilidade do Gambá, um jogador
ainda possui duas ações de mercado.
Avestruz (1): Se o Avestruz for colocado no último espaço
da grade, não revele outro Toon.
Águia (2): Se uma Águia for colocada como a carta final da
grade de um jogador, não revele outro Toon. Nenhum Toon
é virado pelo seu efeito especial.
Burro (3): Se um Burro for colocado na linha superior, ele
não é dispensado por sua habilidade.
Borboleta (4): O efeito especial da Borboleta só pode ser
usado para dispensar uma Lagarta virada para cima na grade
daquele jogador.
Cachorro (5): A fama gerada pelo Cachorro não é afetada
por mudanças no Mercado na Fase de Mercado.
Cabra (6): Se um Macaco cria uma linha extra acima da linha
superior, a habilidade da cabra ainda ativa.
Camelo (8): Se houver um empate pela maioria de
Camelos, todos os Camelos dos jogadores empatados
ativam suas habilidades.
Cavalo (10): Se um jogador contrata um Cavalo,
imediatamente descarte qualquer número de
cartas presentes no Mercado. Reponha o Mercado
imediatamente, ordenando as novas cartas pelos seus ranks.
As cartas descartadas são colocadas ao lado do baralho de
Toons, viradas para cima.
Cobra (11): Se o Toon do topo do baralho do jogador não
puder ser dispensado , em vez disso, coloque-o no
espaço seguinte ao da Cobra, ou retorne-o para o baralho do
jogador se a Cobra estiver no último espaço da grade.
Quando comprar o Toon do topo do baralho de Toons, ative
quaisquer efeitos especiais ou habilidades dele. Por exemplo,
se for um Elefante, vire a Cobra com a face para baixo.
Elefante (12): Se um Elefante for o primeiro Toon colocado na
grade de um jogador, ignore sua habilidade.
Jacaré (15): O alvo da habilidade do Jacaré gera fama
normalmente na fase de Checar fama, mesmo se for
dispensado ao final da fase de mercado. Se o alvo do Jacaré
for uma pilha, dispense somente uma carta daquela pilha. Se,
antes do fim da Fase de Mercado, o Jacaré for dispensado, a
habilidade dele não é ativada.
Macaco (17): Quando um Macaco é colocado na linha
superior de uma grade, mova-o para uma linha acima da linha
superior daquela grade, criando uma linha adicional. Coloque
a próxima carta revelada no espaço em que o Macaco deveria
ser colocado originalmente. Esta linha adicional é considerada
parte da grade do jogador, mas não ocupa os 6 espaços da
grade, nem é considerada a linha superior para outros efeitos,
como o da Cabra.
Porco (18): O Porco pode ser colocado no baralho de
qualquer jogador, ou de volta no baralho de Toons. Se for
colocado novamente no baralho de Toons, reembaralhe-o.
Urso (24): O Urso conta todos os Toons virados para cima,
incluindo ele mesmo.
Vaca (25): Se a Vaca estiver adjacente a uma pilha, ela pode
copiar a fama de uma única carta da pilha, ou de uma carta em
suas outras adjacências.
Firefly (0): Only one player can benefit from the firefly’s
ability each round, even if that player no longer has the lowest
fame after benefitting from the ability. In case of a tie, the firefly
has no effect.
Spider, Grasshopper (0): Only cards in the same column as
the spider or grasshopper are counted for the ability. Facedown cards are counted for the ability. Stacked cards in the
same column are counted, but cards in the same stack as the
spider or grasshopper are not.
Groundhog (2): This ability is mandatory and does not cost
an action. The groundhog considers only the six grid slots
when checking for its ability and does not consider cards in
additional rows outside of the 3-by-2 grid. The groundhog is
dismissed even if it is in a stack in the first or last slot of the grid.
Rat (3): If a rat is face down or no longer in the player’s grid
during the Market phase, the special effect that reduces the
fame cost of the dismiss action is ignored. The cost to dismiss a
card cannot be reduced below 0 fame.
Raccoon (8): If a player hires a raccoon, the player may
immediately hire a card from their own or another player’s
dismiss pile for 0 fame. This ability is optional and does not cost
an action. 
Panther (9): If a player hires a panther, they immediately
dismiss a face-up card in their grid for 0 fame. This ability is
mandatory and does not cost an action.
Opossum (10): Each dismissed card can be counted towards
only one pair. For example, if a player has three mosquitos in
their dismiss pile, the opossum scores only +2 fame.
Mongoose (11): If the card on the bottom of the player’s deck
cannot be dismissed or if the player’s deck is depleted
after placing the mongoose, the player still adds a card from
the toon deck, even though they did not dismiss a card. If the
mongoose dismisses a card with a “When Dismissed” ability,
resolve that ability after the Flip phase is complete. If more
than one player has a mongoose and dismisses a card with a
“When Dismissed” ability, resolve them in clockwise order
starting from the player with the first player card. If a card with a
“When Hired” ability is placed on top of the player’s deck, the
“When Hired” ability is ignored.
Capybara (12): Fame generated by this card is not affected by
changes to the player’s deck during the Market phase.
Crow (13): If a crow is dismissed during the Market phase,
the player may immediately hire a card from the market for
0 fame and refill the market. If a crow is dismissed during the
Flip phase, resolve its ability after the Flip phase is complete.
If more than one player dismisses a crow
during the Flip phase, resolve
them in clockwise order
starting from the player
with the first player
card. Hiring a card with
this ability is optional and
does not cost an action.
Coyote (14): If the previous placed card cannot be returned,
stack the coyote with it instead.
Fox (16): The rooster card is from FlipToons and is not
contained in FlipToons: Season 2. Fame generated by this card
is not affected by changes to the market in the Market phase.
Crab (17): The crab is returned if placed anywhere in the
middle column, including in a new row above a gorilla or
stacked on another card. If a crab is returned when the player’s
deck is depleted or contains only crab cards, they immediately
end their Flip phase, leaving the crab(s) in their deck.
Gorilla (19): When a gorilla is placed in the upper row of
a player’s grid, the next revealed card is placed above
the gorilla, creating an additional row. An additional row is
considered part of a player’s grid, but does not fill one of the
six grid slots and is not considered the “upper row”. If there
already is a card above gorilla, create an additional row above
that card instead.
Vulture (20): A face-down card has no rank and cannot be
dismissed. The dismiss ability is mandatory and does not cost
an action. If the vulture is no longer in the player’s grid at the
end of the Market phase, this ability is ignored and does not
dismiss a card. 
Zebra (21): If a zebra is placed as the first card of a player’s
grid, ignore its ability. A face-down card has no rank and
will never be returned by a zebra. If
the lowest rank card cannot be
returned, stack the zebra with that
card instead.
Hippopotamus (24): Fame
generated by this card is not
affected by changes to the
player’s deck during the
Market phase. 