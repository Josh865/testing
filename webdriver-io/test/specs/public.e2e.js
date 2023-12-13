import { expect, browser, $ } from "@wdio/globals";

// TODO: Set up beforeEach hook or equivalent

describe("eeds public pages", () => {
  it("displays the healthcare professsionals page", async () => {
    await browser.url(`https://www.eeds.com`);

    const elem = await $("aria/Earn and Report your CE Credits Effortlessly");
    await expect(elem).toHaveText(
      "Earn and Report your CE Credits Effortlessly"
    );
  });

  it("displays the education providers page", async () => {
    await browser.url(`https://www.eeds.com`);

    await $("#EP_Tab a").click();

    const elem = await $("aria/CE Tracking Made Quick and Easy");
    await expect(elem).toHaveText("CE Tracking Made Quick and Easy");
  });
});
