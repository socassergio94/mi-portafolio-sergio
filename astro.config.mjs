import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  output: 'static',
  integrations: [github()],
  site: "https://socassergio94.github.io",
base: "mi-portafolio-sergio"

});
