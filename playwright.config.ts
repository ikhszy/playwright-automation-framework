import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",

    fullyParallel: true,

    retries: process.env.CI ? 2 : 0,

    reporter: [
        ["html"],
        ["list"]
    ],

    use: {

        baseURL: "https://automationexercise.com",

        headless: process.env.CI ? true : false,

        screenshot: "only-on-failure",

        video: "retain-on-failure",

        trace: "retain-on-failure",

        viewport: {
            width: 1440,
            height: 900
        }
    },
    projects: [
    {
      name: 'ui',
      testDir: './ui/tests',
      use: { baseURL: process.env.WEB_URL, ...devices['Desktop Chrome'] },
    },
    {
      name: 'api',
      testDir: './api/tests',
      use: { baseURL: process.env.API_URL },
    },
  ],
});