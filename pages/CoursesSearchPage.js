import { BasePage } from "./BasePage";

export class CoursesSearchPage extends BasePage {
  constructor(page) {
    super(page);
  }
  async searchCourses(branch) {
    try {
      const isBranchValid = await this.optionExists(
        branch,
        this.dropdownCategory
      );
      if (!isBranchValid) {
        console.warn("No option is there");
        return false;
      }
      await this.dropdownCategory.click();
      await this.dropdownCategory.selectOption({ label: branch });
    } catch (e) {
      console.error("Search Courses Failed", e);
    }
    return true;
  }
}
