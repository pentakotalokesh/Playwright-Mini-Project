export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator("#txtSearch");
    this.searchButton = page.locator("#btnSearch");
  }
  async goto() {
    await this.page.goto("https://www.eduvidya.com/", {
      waitUntil: "networkidle",
    });
  }

  async search(term) {
    await this.searchBox.fill(term);
    await this.searchButton.click();
  }
  async isLogoVisible() {
    return this.logo.isVisible();
  }
}
