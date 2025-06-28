import { test, expect } from "../fixtures/testSetup";
import { HomePage } from "../pages/homePage";
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
  });
  //Test for valid testcases
  collegeFilterData.valid.forEach(({ branch, city }) => {
    test(`Test for ${branch} and ${city}`, async ({ page }) => {
      collegesPage = new CollegeSearchPage(page);
      await collegesPage.searchColleges(branch, city);
      saveArrayToJson(
        await collegesPage.getListColleges(),
        "output/collegeList.json"
      );
      const isVisible = await collegesPage.isSearchResultVisible();
      await expect(isVisible).toBe(true);
    });
  });
  //Test for Invalid testcases
  // collegeFilterData.invalid.forEach(({ branch, city }) => {
  //   test(`Test for ${branch || "unknown"} and ${
  //     city || "unknown"
  //   }`, async () => {
  //     await collegesPage.searchColleges(branch, city);
  //     const isVisible = await collegesPage.isSearchResultVisible();
  //     await expect(isVisible).toBe(false);
  //   });
  // });
});
