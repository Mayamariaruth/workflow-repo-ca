import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test("User can log in with valid credentials", async ({ page }) => {
  await page.goto("/login/");

  await page.fill('input[name="email"]', process.env.VITE_USERNAME);
  await page.fill('input[name="password"]', process.env.VITE_PASSWORD);
  await page.click('button[type="submit"]');

  await expect(page.locator("#logoutButton")).toBeVisible();
});

test("User sees error with invalid credentials", async ({ page }) => {
  await page.goto("/login/");

  await page.fill('input[name="email"]', "invalid@stud.noroff.no");
  await page.fill('input[name="password"]', "wrongpassword");
  await page.click('button[type="submit"]');

  const errorAlert = page.locator('#message-container [role="alert"]');
  await expect(errorAlert).toHaveText("Invalid email or password");
});
