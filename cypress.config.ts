import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  reporter: 'junit',
  defaultCommandTimeout: 5000,
  requestTimeout: 5000,
  responseTimeout: 60000,
  reporterOptions: {
    toConsole: true,
    mochaFile: 'results/report-[hash].xml',
  },
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: 'cypress/support/commands.ts',
    baseUrl: 'https://www.jp-clothing.com',
  },
});
