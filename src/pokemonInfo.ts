import csv from "../base/csv/pokemonInfo.csv?raw";

export type PokemonInfo = {
  pokedexNumber: number;
  name: string;
  background: string;
  personalTierlistRank: string;
};

export const pokemonInfo = new Map<number, PokemonInfo>(
  csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const [pokedexNumber, name, background, personalTierlistRank] = line.split(",");
      return [+pokedexNumber, { pokedexNumber: +pokedexNumber, name, background, personalTierlistRank }];
    }),
);
