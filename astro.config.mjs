import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://socassergio94.github.io/mi-portafolio-sergio/",
  base: "/mi-portafolio-sergio/",
  outDir: "./dist",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  viewTransitions: true,
});
