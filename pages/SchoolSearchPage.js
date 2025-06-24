export class SchoolSearchPage{
    constructor(page){
        this.page = page;
        this.schoolsLink = page.getByRole("link",{name:"Schools",exact:true});
        this.dropdownCategory = page.locator("#ddl_Category");
        this.dropdownCity = page.locator("#ddl_City");
        this.searchBtn = page.locator("#btnSearch");
        this.resultSection = page.locator(".box-content");
    }

    //Navigating to the given website
    async navigate(){
        try{
            await this.page.goto("/");
        }catch(err){
            console.error("Navigation failed");
        }
}
       
    //Search schools according to the category and city
    async searchSchools(category,city){
        try{
            await this.schoolsLink.click();
            await this.dropdownCategory.click();
            await this.dropdownCategory.selectOption({label:category});
            await this.dropdownCity.click();
            await this.dropdownCity.selectOption({label:city});
        }catch(err){
            console.log("search Schools Failed");
        }
       
    }

    //assertion for visible results or not
    async isSearchResultVisible(){
        return this.resultSection.isVisible();
    }


}