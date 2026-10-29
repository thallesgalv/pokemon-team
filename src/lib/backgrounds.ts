// Cores provisórias por background de pokemonInfo.csv
export const backgroundColors: Record<string, string> = {
  GRASS_LIGHTGREEN: "#9be07a",
  GRASS_DARKGREEN: "#3f8f3a",
  FIRE_RED: "#f0705a",
  WATER_BLUE: "#6aa8f0",
  INSECT_YELLOW: "#d8d65a",
  FLYING_BLUE: "#9ec3f5",
  NORMAL_MAGENTA: "#d68ac8",
  NORMAL_GREEN: "#b8e0b0",
  NORMAL_PINK: "#f5b8cc",
  ELETRIC_TEAL: "#5fd0c4",
  POISON_PINK: "#c27ad6",
  GROUND_BROWN: "#c49a6c",
  GROUND_BLUE: "#8aa0b8",
  FIGHTING_RED: "#d0503c",
  FIGHTING_YELLOW: "#e8c050",
  PSYCHIC_PINK: "#f08ab0",
  ROCK_BLUE: "#8c9cb0",
  ROCK_BLACK: "#6a6a6a",
  ICE_BLUE: "#b0e4f0",
  GHOST_PINK: "#a080c8",
  DRAGON_BLUE: "#7a8ef0",
};

export const fallbackColor = "#dddddd";

// Cor de contorno dos textos, barras e ícone de cópias, por background
const accentColors: Record<string, string> = {
  DRAGON_BLUE: "#494580",
  ELETRIC_TEAL: "#477062",
  FIGHTING_RED: "#9F6554",
  FIGHTING_YELLOW: "#D7C443",
  FIRE_RED: "#B74230",
  FLYING_BLUE: "#494580",
  GHOST_PINK: "#B74230",
  GRASS_DARKGREEN: "#496946",
  GRASS_LIGHTGREEN: "#016630",
  GROUND_BROWN: "#6C6857",
  ICE_BLUE: "#A4A2C8",
  INSECT_YELLOW: "#B2A03B",
  NORMAL_GREEN: "#4F624F",
  NORMAL_MAGENTA: "#A47672",
  NORMAL_PINK: "#783254",
  POISON_PINK: "#6D362F",
  PSYCHIC_PINK: "#8C4165",
  ROCK_BLACK: "#86645F",
  ROCK_BLUE: "#666E78",
  WATER_BLUE: "#1D19A2",
  WATER_DARKBLUE: "#282F4B",
};

export const fallbackAccent = "#344358";

export const cardAccent = (background?: string) => (background && accentColors[background]) ?? fallbackAccent;

// Imagens de assets/bg/<BACKGROUND>.png; quem não tem imagem usa a cor acima
const backgroundImages: Record<string, string> = Object.fromEntries(
  Object.entries(
    import.meta.glob<ImageMetadata>("../../assets/bg/*.png", { eager: true, import: "default" }),
  ).map(([path, image]) => [path.split("/").pop()!.replace(".png", ""), image.src]),
);

export const cardBackground = (background?: string) => {
  const image = background && backgroundImages[background];
  if (image) return `center / cover no-repeat url(${image})`;
  return (background && backgroundColors[background]) ?? fallbackColor;
};
