---
title: Atribuições Pokémon das cartas
---

Justificativa de cada Pokémon em `data/cardList.ts`. As regras de atribuição estão na skill `.claude/skills/assemblingCard/SKILL.md`.

## Pré-atribuídas
Escolhas feitas à mão, sem passar pelo critério de tier:

- **Baralho inicial:** Lagarta = Caterpie, Gambá = Pikachu, Mosquito = Rattata, Lesma = Bulbasaur, Abelha = Jigglypuff, Libélula = Charmander, Ladybug = Eevee, Firefly = Meowth, Grasshoper = Squirtle, Spider = Clefairy
- **Peixes = lutadores:** Shark = Poliwrath, Goldfish = Machamp, Clownfish = Primeape, Starfish = Hitmonlee, Swordfish = Hitmonchan
- **Promos:** Axolotl = Nidoking, Platypus = Nidoqueen
- **Associações óbvias:** Vaca = Ditto (copia valores), Borboleta = Butterfree (ligada a Lagarta/Caterpie), Sloth = Mewtwo (maior tier e baseRank), Camelo = Tauros (muitas cópias), Gato = Charizard (popular, SS na comunidade)

## Método
Escala: SS=7, S=6, A=5, B=4, C=3, D=2, E=1, F=0, G=-1. Ordenei as 42 cartas livres pela média do communityRank e desempatei pelo baseRank mais alto. Depois preenchi as faixas do CSV em ordem: SS×3, S×1, A×10, B×9, C×10, D×3, E×6. As promos UNRANKED com baseRank 26 ficaram, de início, em C, e o Porco UNRANKED ficou em E. Dentro de cada faixa, usei o efeito da carta quando ele tinha relação real com o Pokémon. Quando não tinha, a escolha seguiu só o tier.

## Tabela de atribuições
Coluna "Mudou?": comparação com a primeira atribuição (commit 045b3e6).

| Carta (baseRank, cópias, média) | Pokémon (tier) | Motivo | Mudou? |
|---|---|---|---|
| Tigre (22,1,7.0) | Zapdos 145 (SS) | maior média, cópia única | – |
| Urso (24,1,6.0) | Articuno 144 (SS) | média S e cópia única (não usa mais a ideia de "urso polar") | – |
| Vulture (20,1,5.5) | Moltres 146 (SS) | cópia única; o fogo "queima" o Toon de menor rank | – |
| Peru (20,2,6.0) | Dragonite 149 (S) | média S, baseRank alto | – |
| Hen (6,3,6.0) | Jolteon 135 (C) | trio Eevee: Fox cita HEN e ROOSTER (Jolteon + Vaporeon) | ✔ era Aerodactyl |
| Zebra (21,2,5.5) | Rhydon 112 (A) | investida que toma o lugar do mais fraco | – |
| Gorilla (19,2,5.5) | Aerodactyl 142 (A) | voo leva o próximo Toon para a linha acima | ✔ era Snorlax |
| Coyote (14,2,5.5) | Gengar 94 (A) | trapaceiro, troca de lugar com a carta anterior | – |
| Leão (16,2,5.0) | Arcanine 59 (A) | Intimidate (ability do Arcanine): pontua se todos os vizinhos forem rank 16 ou menor | – |
| Coelho (9,4,5.0) | Snorlax 143 (A) | deita sobre outra carta (empilha) e é imóvel (não vira) | ✔ era Nidoking |
| Veado (23,1,4.67) | Lapras 131 (A) | espécie rara: "cada Toon único" | – |
| Pavão (19,2,4.67) | Venusaur 3 (A) | fotossíntese: ganha 2 e uma ação extra | – |
| Cobra (11,2,4.67) | Alakazam 65 (A) | clarividência: manipula o topo do baralho | ✔ era Gyarados |
| Crab (17,2,4.5) | Blastoise 9 (A) | Withdraw: recolhe-se (return) | – |
| Mongoose (11,2,4.5) | Gyarados 130 (A) | média no limite A/B; Magikarp vira Gyarados assim como a carta troca o fundo do baralho por um Toon novo | ✔ era Alakazam |
| Panther (9,2,4.5) | Scyther 123 (B) | corte rápido que dispensa uma carta | – |
| Jacaré (15,2,4.33) | Electabuzz 125 (B) | descarga no vizinho (dispensa o adjacente) | ✔ era Kabutops |
| Crow (13,2,4.0) | Ninetales 38 (C) | troca com Platypus para liberar Nidoqueen para a promo | ✔ era Electabuzz |
| Cavalo (10,2,4.0) | Magmar 126 (B) | queima e renova o mercado | ✔ era Rapidash |
| Macaco (17,2,3.67) | Pidgeot 18 (B) | voo: sobe uma linha | ✔ era Raichu |
| Galo (13,2,3.67) | Vaporeon 134 (C) | trio Eevee, citado por Fox (ROOSTER); veio da troca com Axolotl | ✔ era Pidgeot |
| Avestruz (1,3,3.67) | Kangaskhan 115 (B) | carrega outro Toon (empilha o próximo) | – |
| Rhinoceros (23,1,3.5) | Golem 76 (B) | maior baseRank da faixa B | – |
| Fox (16,2,3.5) | Flareon 136 (C) | trio Eevee: cita HEN (Jolteon) e ROOSTER (Galo = Vaporeon) | ✔ era Ninetales |
| Opossum (10,2,3.0) | Starmie 121 (C) | regeneração: não pode ser dispensado | – |
| Raccoon (8,2,3.0) | Kabutops 141 (C) | fóssil revivido: recontrata um dispensado | ✔ era Nidoqueen |
| Mole (5,2,3.0) | Onix 95 (C) | Dig: surge por baixo da carta de cima | ✔ era Sandslash |
| Burro (3,2,2.67) | Raichu 26 (B) | tier mais próximo que sobrou; evolução do Pikachu (Gambá) | ✔ era Magmar |
| Salamander (1,3,2.5) | Hypno 97 (C) | hipnotiza o próximo Toon fraco e o devolve | ✔ era Flareon |
| Groundhog (2,3,2.5) | Golduck 55 (C) | tier | ✔ era Onix |
| Rat (3,4,2.5) | Cloyster 91 (C) | camadas: pilha | – |
| Axolotl (26,2,promo) | Nidoking 34 (B) | pré-atribuída (Cartas Promos) | ✔ era Vaporeon |
| Platypus (26,2,promo) | Nidoqueen 31 (B) | pré-atribuída (Cartas Promos) | ✔ era Golduck |
| Elefante (12,2,2.0) | Exeggutor 103 (D) | Hypnosis: vira o Toon anterior | ✔ era Hypno |
| Touro (21,1,1.67) | Sandslash 28 (D) | Defense Curl: não pode ser virado | ✔ era Pinsir |
| Ovelha (7,2,1.33) | Rapidash 78 (D) | tier | ✔ era Jolteon |
| Cabra (6,2,1.33) | Arbok 24 (E) | tier | – |
| Águia (2,2,1.0) | Jynx 124 (E) | Lovely Kiss: vira (faz dormir) o próximo Toon | – |
| Cachorro (5,4,0.67) | Marowak 105 (E) | Cubone solitário: precisa de outro igual | – |
| Capybara (12,2,0.5) | Pinsir 127 (E) | tier | ✔ era Exeggutor |
| Hippotamus (24,1,0.5) | Weezing 110 (E) | tier | – |
| Porco (18,1,UNR) | Muk 89 (E) | tóxico: vai para o baralho do oponente | – |

**Ajuste das promos:** a regra "Cartas Promos" foi aplicada depois da revisão. Axolotl e Platypus receberam Nidoking e Nidoqueen. Vaporeon e Ninetales foram para Galo e Crow. Por isso essas duas cartas, de média B, estão com Pokémon de tier C, e as promos UNRANKED estão com Pokémon de tier B.

**Ajuste do trio Eevee:** Hen virou Jolteon para que o texto de Fox ("HEN or ROOSTER") ligue Flareon, Jolteon e Vaporeon. Para não jogar o Arcanine no Burro, a cadeia foi Arcanine → Leão, Gyarados → Mongoose, Raichu → Burro, com cada Pokémon descendo no máximo uma faixa. Hen, de média S, fica com um Pokémon de tier C, que é o custo aceito do trio.

Os 62 Pokémon são usados uma vez cada, e os 3 SS ficam em cartas de cópia única.
