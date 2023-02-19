import { test, expect } from "@playwright/test";

test("should have a title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Enigma");
});

test("should have a link that leads to the personal home page", async ({
  page,
}) => {
  await page.goto("/");
  const link = page.getByRole("link", { name: "Rasmus Nord" });

  await link.click();

  await expect(page).toHaveURL("https://rasmus.co/");
});

test("should have a link that leads to the repo", async ({ page }) => {
  await page.goto("/");
  const link = page.getByRole("link", { name: "Github" });

  await link.click();

  await expect(page).toHaveURL("https://github.com/rasmusnord/enigma");
});
