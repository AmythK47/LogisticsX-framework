import {test,expect} from "../../fixtures/pomfixture.fixture.js";
import testData from "../../testResources/loadData.json";

test("createNewLoad",{tag: "@system"}, async({loadsPage,homePage, loadInvoicesPage})=>{
    //Test data
    let loadName = testData.loadName;
    let loadType = testData.loadType;
    let source = testData.source;
    let customer = testData.customer;
    let origin = testData.origin;
    let destination = testData.destination;
    let cost = testData.cost;

    //create new Load
    await loadsPage.addNewLoad(loadName,loadType,source,customer,origin,destination,cost);

    //verification of load
    await expect(loadsPage.verifyLoad).toBeVisible();
    await expect(loadsPage.verifyLoad).toContainText("A new load has been created successfully");

    //invoicing
    await homePage.invoicingBtn.click();
    await homePage.loadInvoicesLnk.click();
    await loadInvoicesPage.searchNviewInvoiceDetails(customer);
    await loadInvoicesPage.recordPaymentBtn.click();
    await loadInvoicesPage.recordManualPaymentBtn.waitFor({state: "visible"});
    await loadInvoicesPage.recordManualPaymentBtn.click({force : true});

    //verify
    await loadInvoicesPage.verifyInvoicePaymentPopup.waitFor({state: "visible"});
    await expect(loadInvoicesPage.verifyInvoicePaymentPopup).toContainText(" Payment recorded successfully ");
})