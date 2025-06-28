import { test, expect } from "../fixtures/testSetup";
import { HomePage } from "../pages/HomePage";
import { Navbar } from "../components/Navbar";
import { CollegeSearchPage } from "../pages/CollegeSearchPage";
import { collegeFilterData } from "../utils/testData";
import { saveArrayToJson } from "../utils/filehelper";

test.describe("Navigate to Colleges and Search for Colleges", () => {
  let homePage;
  let navBar;
  let collegesPage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    navBar = new Navbar(page);

    await homePage.goto();
    await navBar.goToColleges();
    collegesPage = new CollegeSearchPage(page);
  });
  //Test for valid testcases
  collegeFilterData.valid.forEach(({ branch, city }) => {
    test(`Test for ${branch} and ${city}`, async () => {
      await collegesPage.searchColleges(branch, city);
      saveArrayToJson(
        await collegesPage.getListColleges(),
        "output/collegeList.json"
      );
      const isVisible = await collegesPage.isSearchResultVisible();
      await expect(isVisible).toBe(true);
    });
  });
  // Test for Invalid testcases
  collegeFilterData.invalid.forEach(({ branch, city }) => {
    test(`Test for ${branch} and ${city}`, async () => {
      const result = await collegesPage.searchColleges(branch, city);
      if (result === false) test.skip("Inavlid City or Branch");
      const isVisible = await collegesPage.isSearchResultVisible();
      await expect(isVisible).toBe(false);
    });
  });
});
