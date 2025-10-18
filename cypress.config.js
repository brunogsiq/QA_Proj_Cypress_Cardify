import { defineConfig } from "cypress";

export default defineConfig({
  //Definindo Largura e Altura da tela
  viewportWidth: 1400,
  viewportHeight: 900,
  
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  video: true,
  screenshotOnRunFailure: true
});