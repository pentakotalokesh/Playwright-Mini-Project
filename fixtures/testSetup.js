import { expect, test as base } from "@playwright/test";
import { blockAds } from "../utils/blockAds.js";

const customTest = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    await use(context);
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
});

customTest.beforeEach(async ({ page }) => {
  await blockAds(page);
});

export { customTest as test, expect };
