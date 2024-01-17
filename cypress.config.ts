import { defineConfig } from "cypress";

export default defineConfig({
  supportFolder: './support',
  fixturesFolder: './fixtures',
  fileServerFolder: './files',
  downloadsFolder: './output/downloads',
  videosFolder: './output/videos',
  screenshotsFolder: './output/screenshots',

  e2e: {
    // TODO: configure baseUrl
    // baseUrl: '',
    supportFile: false,
    specPattern: './tests/**/*.cy.ts',
  },
});
