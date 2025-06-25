// utils/highlighter.js
export default async function highlightElement(page, locator) {
  const elementHandle = await locator.elementHandle();
  await page.evaluate((el) => {
    el.style.outline = "3px solid red";
    el.style.backgroundColor = "yellow";
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, elementHandle);
}
