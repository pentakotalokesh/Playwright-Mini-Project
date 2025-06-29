import { BasePage } from "./BasePage";

export class SchoolSearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchBtn = page.locator("#btnSearch");
    this.resultSection = page.locator(".box-content");
  }

  //Search schools according to the category and city
  async searchSchools(category, city) {
    try {
      const isSyllbusValueValid = await this.optionExists(
        category,
        this.dropdownCategory
      );

      const isCityValueValid = await this.optionExists(city, this.dropdownCity);
      /* for debugging purpose
      console.log(isCityValueValid);
      console.log(isSyllbusValueValid);
      */
      if (!isCityValueValid || !isSyllbusValueValid) {
        console.warn("No option is there");
        return;
      }
      await this.dropdownCategory.waitFor({ state: "visible" });
      await this.dropdownCategory.click();
      await this.dropdownCategory.selectOption({ label: category });
      await this.dropdownCity.waitFor({ state: "visible" });
      await this.dropdownCity.click();
      await this.dropdownCity.selectOption({ label: city });
      await Promise.all([
        this.page.waitForNavigation({ waitUntil: "load" }),
        this.searchBtn.click(),
      ]);
    } catch (err) {
      console.log("search Schools Failed");
    }
  }

  //assertion for visible results or not
  async isSearchResultVisible() {
    return this.resultSection.isVisible();
  }
}
