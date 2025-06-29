import { extractListTitleandLinks } from "../utils/extractListTitleandLinks";
import { BasePage } from "./BasePage";

export class CollegeSearchPage extends BasePage {
  constructor(page) {
    super(page);

    // this.resultSection = this.page.locator("#pnllist .detail-list ul li");
    /*
    this.items = this.page.locator(
      ".box-content > .filter-result > .detail-list > #pnllist > .detail-list > ul > li"
    );*/
  }

  //searchColleges Method
  async searchColleges(branch, city) {
    try {
      //Checking weather given branch option is there or not
      const isBranchValid = await this.optionExists(
        branch,
        this.dropdownCategory
      );
      //Checking weather given city option is there is not
      const isCityValid = await this.optionExists(city, this.dropdownCity);

      if (!isBranchValid || !isCityValid) {
        console.warn("No option is there either city or branch");
        return false;
      }
      await this.dropdownCategory.waitFor({ state: "visible" });
      await this.dropdownCategory.click();

      await this.dropdownCategory.selectOption({ label: branch });
      await this.dropdownCity.waitFor({ state: "visible" });
      await this.dropdownCity.click();
      await this.dropdownCity.selectOption({ label: city });
      await Promise.all([
        this.page.waitForNavigation({ waitUntil: "load" }),
        this.searchBtn.click(),
      ]);

      return true;
    } catch (e) {
      console.log("Search Colleges failed", e);
    }
  }

  //To get the list of colleges in array format
  async getListColleges() {
    return await extractListTitleandLinks(this.items);
  }
  //assertion
  async isSearchResultVisible() {
    return (await this.items.count()) > 0 ? true : false;
  }
}
