---
name: mock
description: Gera dados mock de cartas no formato do tipo `Card` (types/cardType.ts). Use quando o usuário pedir para criar cartas de exemplo, dados fake, mocks para testes ou para popular data/cardList.ts.
---

# Mock de cartas

Gera objetos `Card` válidos para testes e protótipos.

## Quando usar

- O usuário pede "mock", "dados fake", "cartas de exemplo" ou "popular a lista".
- Algum teste ou componente precisa de dados de carta.

## Fonte da verdade

- Tipo: `types/cardType.ts` (sempre leia antes de gerar, o tipo pode ter mudado)
- Exemplos reais: `data/cardList.ts`
- Dados originais: `base/csv/originalCards.csv`

## Regras

1. Todo objeto deve satisfazer o tipo `Card` sem erros de TypeScript.
2. `id` sequencial e único, começando do próximo id livre.
3. `basePoint` é um número ou a string `"="`.
4. `pool` só pode ser `"A"`, `"B"` ou `"PRM"`.
5. `communityRank` é um array de `CommunityRank`; use `["UNRANKED"]` por padrão.
6. `imageEdition` usa `{ size: 1, left: 0, right: 0, top: 0, bottom: 0 }` por padrão.
7. Textos em português.
<!-- TODO: adicione aqui regras do jogo (faixas de baseRank, cardCount, etc.) -->

## Onde salvar

- Padrão: `data/mockCards.ts`, exportando `export const mockCards: Card[]`.
- Só altere `data/cardList.ts` se o usuário pedir explicitamente.

## Exemplo de saída

```ts
import type { Card } from "../types/cardType";

export const mockCards: Card[] = [
  {
    id: 1,
    name: "Lagarta Mock",
    originalName: "Lagarta",
    baseRank: 0,
    cardCount: 2,
    basePoint: 0,
    extraPoints: 0,
    originalText: "",
    originalPassive: "Custa 3 para dispensar em vez de 5.",
    text: "",
    passive: "",
    pool: "A",
    communityRank: ["UNRANKED"],
    imageEdition: { size: 1, left: 0, right: 0, top: 0, bottom: 0 },
  },
];
```

## Argumentos

Se o usuário passar um número (ex.: `/mock 10`), gere essa quantidade de cartas. Sem número, gere 5.
