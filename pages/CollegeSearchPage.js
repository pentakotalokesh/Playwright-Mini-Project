import { BasePage } from "./BasePage";

export class CollegeSearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchBtn = this.page.locator("#btnSearch");
    this.resultSection = this.page.locator(".filter-result");
    /*
    this.items = this.page.locator(
      ".box-content > .filter-result > .detail-list > #pnllist > .detail-list > ul > li"
    );*/
    this.items = this.page.locator("#pnllist .detail-list ul li");
  }
  //searchColleges Method
  async searchColleges(branch, city) {
    try {
      const isBranchValid = await this.optionExists(
        branch,
        this.dropdownCategory
      );
      const isCityValid = await this.optionExists(city, this.dropdownCity);
      if (!isBranchValid || !isCityValid) {
        console.warn("No option is there either city or branch");
      }
      await this.dropdownCategory.click();
      await this.dropdownCategory.selectOption({ label: branch });
      await this.dropdownCity.click();
      await this.dropdownCity.selectOption({ label: city });
      await this.searchBtn.click();
    } catch (e) {
      console.log("Search Colleges failed", e);
    }
  }

  //To get the list of colleges in array format
  async getListColleges() {
    const colleges = [];

    const count = await this.items.count();

    for (let i = 0; i < count; i++) {
      try {
        const item = this.items.nth(i);
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

  //assertion
  async isSearchResultVisible() {
    return this.resultSection.isVisible();
  }
}
