import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Pokémon Team",
      defaultLocale: "root",
      locales: { root: { label: "Português", lang: "pt-BR" } },
      sidebar: [
        { label: "Cartas", link: "/" },
        { label: "Regras", slug: "regras" },
        { label: "Atribuições", slug: "atribuicoes" },
      ],
    }),
  ],
});
