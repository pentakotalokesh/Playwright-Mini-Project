import {test,expect} from "../fixtures/testSetup";
import { SchoolSearchPage } from "../pages/SchoolSearchPage";



test.describe("Search Schools",()=>{
  //test begins
  test("searchSchools",async({page})=>{
    //creating a instance for schoolSearchPage
    const schoolSearch = new SchoolSearchPage(page);
    //navigating
    await schoolSearch.navigate();
    //Invoking searchSchools method by passing the value of category and city
    await schoolSearch.searchSchools("CBSE","Pune");
    //checks
    const isvisible = await schoolSearch.isSearchResultVisible();
    //assertion
    expect(isvisible).toBe(true);
  })

});


/* 
  Without Pom I Implemented
*/
// await page.getByRole("link",{name:"Schools",exact:true}).click();

  // const dropdown = page.locator("#ddl_Category");
  // await dropdown.click();
  // await dropdown.selectOption("1");

  // const dropdownCity = page.locator("#ddl_City");
  // await page.pause();
  // await dropdownCity.click();
  // await dropdownCity.selectOption("2");

  // await page.locator("#btnSearch").click();
  // await expect(page.locator(".box-content")).toBeVisible();

  // await browser.close();
