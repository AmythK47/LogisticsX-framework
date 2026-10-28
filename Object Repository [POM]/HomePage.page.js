class HomePage{
    constructor(page)
    {
        this.page = page;
        this.homeLnk = page.getByRole("link", {name : "Home", exact : true});
        this.loadsLnk = page.getByRole("link", {name : "Loads", exact : true});
        this.trucksLnk = page.getByRole("link", {name : "Trucks", exact: true});
        this.trailersLnk = page.getByRole("link", {name : "Trailers", exact: true});
        this.customersLnk = page.getByRole("link", {name : "Customers", exact : true});
        //invoicing DD
        this.invoicingBtn = page.getByRole("button", {name : "Invoicing"});
        this.invoiceDashboardLnk = page.locator("//a[@href='/invoices']");
        this.loadInvoicesLnk = page.locator("//a[@href='/invoices/loads']");

        
       
    }
}
export default HomePage