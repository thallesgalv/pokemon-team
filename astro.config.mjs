import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Publicado em https://thallesgalv.github.io/pokemon-team/ — por isso os links no markdown
// são relativos (links absolutos não recebem o `base`).
export default defineConfig({
  site: "https://thallesgalv.github.io",
  base: "/pokemon-team",
  integrations: [
    starlight({
      title: "Pokémon Team",
      defaultLocale: "root",
      locales: { root: { label: "Português", lang: "pt-BR" } },
      sidebar: [
        { label: "Cartas", link: "/" },
        { label: "Regras", items: [{ autogenerate: { directory: "regras" } }] },
      ],
    }),
  ],
});
