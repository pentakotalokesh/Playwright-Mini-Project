export async function extractListTitleandLinks(items) {
  const colleges = [];

  const count = await items.count();

  for (let i = 0; i < count; i++) {
    try {
      const item = items.nth(i);
      const titleLocator = item.locator(".contentblock a");
      const title = await titleLocator.textContent();
      const link = await titleLocator.getAttribute("href");

      if (title && link) {
        colleges.push({
          title: title.trim(),
          link,
        });
      }
    } catch (error) {
      console.warn(`Skipping college at index ${i} due to error:`, error);
    }
  }

  return colleges;
}
