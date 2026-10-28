class LoadInvoicePage
{
    constructor(page)
    {
        this.page = page;
        //load invoice page
        this.searchInvoiceTF = page.locator("//input[@placeholder='Search by customer or invoice #']");

        //invoice Details page
        this.recordPaymentBtn = page.getByRole("button", {name : "Record Payment"});
        this.recordManualPaymentBtn = page.locator("//ui-button[@type='submit']/button[.='Record Payment']");

        this.verifyInvoicePaymentPopup = page.locator("//li/descendant::div/div/following-sibling::div");
        
    }

    async searchNviewInvoiceDetails(customerName)
    {
        await this.searchInvoiceTF.fill(customerName);
        const invoiceRow = this.page.getByRole("row").filter({hasText: customerName});
        await invoiceRow.locator("//button[@aria-label='View Details']").first().click();
    }
    
}
export default LoadInvoicePage
//" Payment recorded successfully "