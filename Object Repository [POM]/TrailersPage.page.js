import HomePage from "./HomePage.page.js";
class TrailersPage
{
    constructor(page)
    {
        this.page = page;
        this.addNewTrailerBtn = page.getByRole("button", {name : "Add a new trailer"});
        this.trailerNoTF = page.getByRole('textbox', { name: 'Trailer Number' });
        this.trailerTypeDD = page.locator("//ui-form-field[@label='Type']/descendant::button[@role='combobox']");
        this.createTrailerBtn = page.locator("//button[.='Create Trailer']");
        this.verifyTrailerPopup = page.locator("//li/descendant::div/div/following-sibling::div");

    }

    async selectTrailerFromList(dropDown, optionName)
    {
        await dropDown.click();

        const option =  await this.page.getByRole("option", {name: optionName,exact: false});

        await option.waitFor({ state: "visible" });
        await option.click();
    }

    async addNewTrailer(trailerNo, trailerType)
    {
        let hp = new HomePage(this.page);
        hp.trailersLnk.click();

        await this.addNewTrailerBtn.click();
        await this.trailerNoTF.fill(String(trailerNo));
        await this.selectTrailerFromList(this.trailerTypeDD, trailerType);

        await this.createTrailerBtn.click();
    }
}
export default TrailersPage