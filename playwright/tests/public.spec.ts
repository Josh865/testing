import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.eeds.com");
});

test.describe("eeds public pages", () => {
  test("should display healthcare professionals page", async ({ page }) => {
    const hpHeading = page.getByText(
      "Earn and Report your CE Credits Effortlessly"
    );

    await expect(hpHeading).toBeVisible();
  });

  test("should display education providers page", async ({ page }) => {
    page.click("#EP_Tab a");

    const epHeading = page.getByText("CE Tracking Made Quick and Easy");

    await expect(epHeading).toBeVisible();
  });
});
