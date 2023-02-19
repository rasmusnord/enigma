import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const CI = !!process.env.CI;

const config: PlaywrightTestConfig = {
  testDir: "./test/e2e",
  timeout: 15_000,
  expect: {
    timeout: 5_000,
  },
  forbidOnly: CI,
  retries: CI ? 2 : 0,
  workers: CI ? 1 : undefined,
  reporter: "html",
  use: {
    actionTimeout: 0,
    baseURL: CI ? "https://enigma.rasmus.co/" : "http://localhost:5173",
    trace: "on-first-retry",
    headless: true,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  webServer: {
    command: CI ? "npm run preview" : "npm run dev",
    port: 5173,
    reuseExistingServer: !CI,
  },
};

export default config;
