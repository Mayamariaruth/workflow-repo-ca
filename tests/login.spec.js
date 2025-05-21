import { test, expect } from "@playwright/test";

test("User can log in with valid credentials", async ({ page }) => {
  await page.goto("/login/");

  await page.fill('input[name="email"]', process.env.VITE_USERNAME);
  await page.fill('input[name="password"]', process.env.VITE_PASSWORD);
  await page.click('button[type="submit"]');

  await expect(page.locator("#logoutButton")).toBeVisible();
});
