import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://socassergio94.github.io/mi-portafolio-sergio/",
  base: "/mi-portafolio-sergio/", // 👈 esto es CLAVE
  outDir: "./dist",
  viewTransitions: true,
});
