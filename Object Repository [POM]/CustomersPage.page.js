import HomePage from "./HomePage.page";
class CustomersPage
{
    constructor(page)
    {
        this.page = page;
        this.addNewCustomerBtn = page.locator("//button[@aria-label = 'Add a new customer']");

        //add customer page
        this.customerNameTF = page.locator("#name");
        this.customerEmailTF = page.locator("#email");
        this.phoneTF = page.locator("#phone");
        this.addressLine1TF = page.locator("#addressLine1");
        this.addressLine2TF = page.locator("#addressLine2");
        this.cityTF = page.locator("#city");
        this.stateDD = page.locator("#state");
        this.zipcodeTF = page.locator("#zipCode");
        this.saveBtn = page.locator("//button[@type='submit']");

        this.verifyCustomerPopup = page.locator("//li/descendant::div/div/following-sibling::div");

    }

    async addNewCustomer(customerName, email, phoneNo, addLine1, addLine2, city, state, zipcode)
    {
        let hp = new HomePage(this.page);
        await hp.customersLnk.click();

        await this.addNewCustomerBtn.click();

        await this.customerNameTF.fill(customerName);
        await this.customerEmailTF.fill(email);
        await this.phoneTF.fill(phoneNo);
        await this.addressLine1TF.fill(addLine1);
        await this.addressLine2TF.fill(addLine2);
        await this.cityTF.fill(city);

        await this.stateDD.click();
        await this.page.getByRole("option", {name : state}).click();

        await this.zipcodeTF.fill(zipcode);

        await this.saveBtn.click();

    }
}
export default CustomersPage

//A new customer has been created successfully