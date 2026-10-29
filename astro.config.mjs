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
        { label: "Regras", items: [{ autogenerate: { directory: "regras" } }] },
      ],
    }),
  ],
});
