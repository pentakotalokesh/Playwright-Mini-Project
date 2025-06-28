export class BasePage {
  constructor(page) {
    this.page = page;
    this.dropdownCategory = page.locator("#ddl_Category");
    this.dropdownCity = page.locator("#ddl_City");
    this.searchBtn = this.page.locator("#btnSearch");
    this.items = this.page.locator("#pnllist .detail-list ul li");
  }
  //Check for dropdown option is there or not
  async optionExists(optionValue, dropdown) {
    const allOptions = await dropdown.locator("option").allTextContents();
    return allOptions.includes(optionValue);
  }
}
