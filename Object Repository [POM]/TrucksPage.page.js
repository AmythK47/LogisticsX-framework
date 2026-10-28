import HomePage from "../Object Repository [POM]/HomePage.page.js";
class TrucksPage
{
    constructor(page)
    {
        this.page = page;

        //add a new Truck page
        this.addNewTruckBtn = page.locator("//button[@aria-label='Add a new truck']");
        this.truckNoTF = page.locator("#truckNumber");
        this.truckTypeDD = page.getByPlaceholder("Select truck type");
        this.mainDriverSearch = page.locator("//ui-form-field[@label='Main Driver']/descendant::input[@type='text']");
        this.createTruckBtn = page.locator("//button[.='Create Truck']");

        this.verifyTruckPopup = page.locator("//li/descendant::div/div/following-sibling::div");
        
        //search for truck (main truck page)
        this.searchTruckTF = page.getByPlaceholder("Search");
        this.editTruckBtn = page.locator("//button[@aria-label='Edit truck']");

        //edit Truck Page
        this.trailerSelectBtn = page.locator("//ui-form-field[@label='Current Trailer']/descendant::button[@role='combobox']");
        this.updatetruckBtn = page.getByRole("button", {name : "Update Truck"});
        this.verifyUpdateTruckPopup = page.locator("//li/descendant::div/div/following-sibling::div");

    }

    async searchAndEditTruck(truckNo)
    {
        await this.searchTruckTF.fill(truckNo);
        const trck = await this.page.getByRole("row").filter({hasText: truckNo});

        await trck.locator("//button[@aria-label='Edit truck']").click();

    }

    async selectTrailer(trailerNo)
    {
        await this.trailerSelectBtn.click();
        await this.page.getByRole("option", {name : trailerNo}).click();
    }

    async selectFromList(dropDown, optionName)
    {
        await dropDown.click();

        const option =  await this.page.getByRole("option", {name: optionName,exact: false});

        await option.waitFor({ state: "visible" });
        await option.click();
    }

    async selectMainDriver(driverName)
    {
        await this.mainDriverSearch.fill(driverName);

        const driverOption = this.page.getByRole("option", {name: driverName, exact: false});

        await driverOption.waitFor({ state: "visible" });
        await driverOption.click();
    }

    async addNewTruck(truckNo, truckType, driverName )
    {
        let hp = new HomePage(this.page);
        await hp.trucksLnk.click();
        
        await this.addNewTruckBtn.click();
        await this.truckNoTF.fill(String(truckNo));

        await this.selectFromList(this.truckTypeDD, truckType);
        await this.selectMainDriver(driverName);

        await this.createTruckBtn.click();

    }

}
export default TrucksPage;