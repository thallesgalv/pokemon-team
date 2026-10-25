---
name: assemblingCard
description: Faz um match dos dados de pokemonInfo.csv e faz a atribuição a data/cardList.ts.
---

# Atribuição de cartas

Todasas cartas presentes em data/cardList.ts (Cartas Originais de Fliptoons) devem ter Pokémons atribuídos de acordo com base/csv/pokemonInfo.csv

## Previamente Atribuídas
- Há algumas cartas já previamente definidas por mim. Estas devem ser as primeiras atribuídas. São elas:

### Baralho Inicial
- Lagarta = Caterpie
- Gambá = Eevee
- Mosquito = Rattata
- Lesma = Bulbasaur
- Abelha = Jigglypuff
- Libélula = Charmander
- Ladybug = Eevee
- Firefly = Meowth
- Grasshoper = Squirtle
- Spider = Psyduck

### Tipos Lutadores serão atribuídos ao "Fish" (Peixe)
- Shark = Poliwrath (Lutador não puro, assim como peixe não puro)
- Goldfish = Machamp (melhor lutador/peixe)
- Primeape = Clownfish
- Hitmonlee = Starfish
- Hitmonchan = Swordfish

### Associações óbvias
- Vaca = Ditto (pois copia valores)
- Borboleta = Butterfree (pois está associada a Caterpie/Lagarta)
- Sloth = Mewtwo (pois tem maior communityTierlist junto com maior baseRank associado a personalTierlistRank SS)
- Camelo = Tauros (pois grande quantidade de cópias)
- Gato = Charizard (carta popular de communityTierlist SS e com mais de um cardCount e personalTierlistRank S)


## Desafio de encaixe

O desafio de encaixe é o seguinte. Econtrar em cada uma das cartas que não está listada como previamente atribuídas e associa-la a um dos Pokémon presentes em pokemonInfo.csv seguindo os seguintes critérios:

- Média de communityTierlist deve ser o mais próxima possível de personalTierlistRank. Ao mesmo tempo, sempre que possível, altos baseRank devem estar o mais próximo possível de altos personalTierlistRank (Ex: Sloth = Mewtwo)
- Cartas de de personalTierlistRank "SS" preferencialmente devem evitar ser associadas com cardCount maior que 1 (sempre que possível)
- Importante que sempre possível o texto da carta deve ter alguma relação com as características/personalidade do Pokémon (exmeplo: Vaca = Tauros - pelo poder de copia). Ou também quando há associações de menções na carta (ex: Lagarta = Caterpie junto com Borboleta = Butterfree)

## Alteração em dados de cardList.ts

Após encontrar uma sugestão de associação, etc .Deve ser modificado o seguinte:
id = pokedexNumber
name = pokemonName
text e passive devem permanecer intocados
