import { test, expect } from "@playwright/test";

test("User can navigate to a venue detail page and see a heading", async ({
  page,
}) => {
  await page.goto("/");

  await page.waitForSelector('a[href^="/venue/?id="]');

  await page.locator('a[href^="/venue/?id="]').first().click();

  await expect(page).toHaveURL(/\/venue\/?\?id=/);

  const heading = page.locator("h1");
  await expect(heading).toContainText("Venue details");
});
