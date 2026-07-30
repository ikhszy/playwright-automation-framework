import { defineConfig } from "@playwright/test";

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
    }
});