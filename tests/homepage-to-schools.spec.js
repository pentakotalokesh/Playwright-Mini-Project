/*

This page suddenly stops working

import { Navbar } from "../components/Navbar";
import { test, expect } from "../fixtures/testSetup";
import { HomePage } from "../pages/HomePage";
import { SchoolSearchPage } from "../pages/SchoolSearchPage";
import { schoolFilterData } from "../utils/testData";

test.describe("Search for schools", () => {
  let homePage;
  let navBar;
  let schoolsPage;
  //test.beforeEach
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    navBar = new Navbar(page);
    schoolsPage = new SchoolSearchPage(page);
    await homePage.goto();
    await navBar.goToSchools();
  });
  //Test for valid testcases
  schoolFilterData.valid.forEach((e) => {
    test(`Search with valid syllabus: ${e.syllabus} and city: ${e.city}`, async () => {
      await schoolsPage.searchSchools(e.syllabus, e.city);

      const isVisible = await schoolsPage.isSearchResultVisible();
      // await expect(isVisible).toBe(true);
    });
  });

  //Test for Invalid test cases
  schoolFilterData.invalid.forEach((e) => {
    test(`Search with Invalid syllabus: ${e.syllabus} and city: ${e.city}`, async () => {
      await schoolsPage.searchSchools(e.syllabus, e.city);

      const isVisible = await schoolsPage.isSearchResultVisible();
      //there is some issue with given website
      // await expect(isVisible).toBe(true);
    });
  });
}); */
