export async function blockAds(page) {
  await page.route("**/*", (route) => {
    const adDomains = [
      "googlesyndication",
      "googleads",
      "doubleclick",
      "adservice",
    ];
    const url = route.request().url();
    if (adDomains.some((domain) => url.includes(domain))) {
      return route.abort();
    }
    route.continue();
  });
}
