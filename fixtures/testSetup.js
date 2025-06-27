import { expect, test } from "@playwright/test";
import { blockAds } from "../utils/blockAds";

const customTest = test.extend({
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

module.exports = {
  test: customTest,
  expect,
};
