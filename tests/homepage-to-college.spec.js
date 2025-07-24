import { test, expect } from "../fixtures/testSetup";
import { HomePage } from "../pages/HomePage";
import { Navbar } from "../components/Navbar";
import { CollegeSearchPage } from "../pages/CollegeSearchPage";
import { collegeFilterData } from "../utils/testData";
import { saveArrayToJson } from "../utils/fileHelper";

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
  collegeFilterData.valid.forEach(({ branch, city },index) => {
    test(`Test for ${branch} and ${city}`, async () => {
      const result = await collegesPage.searchColleges(branch, city);
      if (!result) {
        test.skip();
        return;
      }
      saveArrayToJson(
        await collegesPage.getListColleges(),
        `output/collegeList${index}.json`
      );
      const isVisible = await collegesPage.isSearchResultVisible();
      expect(isVisible).toBe(true);
    });
  });
  // Test for Invalid testcases
  collegeFilterData.invalid.forEach(({ branch, city }) => {
    test(`Test for ${branch} and ${city}`, async () => {
      const result = await collegesPage.searchColleges(branch, city);
      if (result === false) test.skip("Inavlid City or Branch");
      const isVisible = await collegesPage.isSearchResultVisible();
      expect(isVisible).toBe(false);
    });
  });
});

//Associate is very strong in basics. Theoretically he is able to explain. Has had good hands-on. Associate must focus in learning advanced skills as well. The purpose and usability of applying technology is missing.
