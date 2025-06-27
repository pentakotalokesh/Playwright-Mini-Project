export class SchoolSearchPage {
  constructor(page) {
    this.page = page;
    this.dropdownCategory = page.locator("#ddl_Category");
    this.dropdownCity = page.locator("#ddl_City");
    this.searchBtn = page.locator("#btnSearch");
    this.resultSection = page.locator(".box-content");
  }

  //Search schools according to the category and city
  async searchSchools(category, city) {
    try {
      await this.dropdownCategory.click();
      await this.dropdownCategory.selectOption({ label: category });
      await this.dropdownCity.click();
      await this.dropdownCity.selectOption({ label: city });
    } catch (err) {
      console.log("search Schools Failed");
    }
  }

  //assertion for visible results or not
  async isSearchResultVisible() {
    return this.resultSection.isVisible();
  }
}
