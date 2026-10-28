import HomePage from "../Object Repository [POM]/HomePage.page";


class LoadsPage{
    constructor(page)
    {
        this.page = page;
        this.addLoadBtn = page.locator("//button[@aria-label='Add a new load']");
        this.loadNameTF = page.locator("#name");

        this.loadTypeDD = page.locator("//ui-form-field[@label ='Load Type']/descendant::button[@role='combobox']");
        this.loadTypeList = page.locator("//div[@id='brn-overlay-12']/descendant::hlm-select-item[@role='option']");

        this.sourceDD = page.locator("//ui-form-field[@label='Source']/descendant::button[@role='combobox']");
        this.sourceList = page.locator("//div[@id='brn-overlay-13']/descendant::hlm-select-item[@role='option']");

        this.customerNameTF = page.locator("//input[@placeholder='Type a customer name']");
        this.selectCustomerBtn = page.locator("//hlm-autocomplete-item[@role='option']");

        this.originTF = page.locator("#originAddress");
        this.originSlctBtn = page.locator("//div[@class='popup-item']").first();

        this.destinationTF = page.locator("#destinationAddress");
        this.destSelectBtn = page.locator("//div[@class='popup-item']").first();

        this.deliveryCostTF = page.locator("#deliveryCost");
        this.createLoadBtn = page.locator("//button[.='Create']");

        this.verifyLoad = page.locator("//li/descendant::div/div/following-sibling::div");

        this.searchLoad = page.getByPlaceholder("Search");
        this.searchLoadResult = page.locator("//tbody/descendant::a/../following-sibling::td[last() - 9]");

    }

    async addNewLoad(loadName, loadType, srcType, custName, origin, dest, cost )
    {
        let hp = new HomePage(this.page);
        await hp.loadsLnk.click();

        await this.addLoadBtn.click();
        await this.loadNameTF.fill(loadName);

        await this.loadTypeDD.click();
        await this.loadTypeList.first().waitFor({state : "visible"});
        let loads = await this.loadTypeList.all();
        for (const load of loads) 
        {
            const text = await load.innerText();
            if(text.includes(loadType))
            {
                await load.click();
                break;
            }   
        }

        await this.sourceDD.click();
        await this.sourceList.first().waitFor({state: "visible"});
        let sources = await this.sourceList.all();
        for (const src of sources) 
        {
            const text = await src.innerText();
            if(text.includes(srcType))
            {
                await src.click();
                break;
            }   
        }

        await this.customerNameTF.fill(custName);
        await this.selectCustomerBtn.click();

        await this.originTF.fill(origin);
        await this.originSlctBtn.click();

        await this.destinationTF.fill(dest);
        await this.destSelectBtn.click();

        await this.deliveryCostTF.fill(String(cost));

        await this.createLoadBtn.click();
    }

}
export default LoadsPage;