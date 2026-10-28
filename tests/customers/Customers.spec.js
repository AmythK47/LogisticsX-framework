import {test,expect} from "../../fixtures/pomfixture.fixture.js"
import customerData from "../../testResources/customerData.json";

test("addNewCustomerAsManager",{tag : "@smoke"}, async ({customersPage}) => {
    //Test data
    let customerName = customerData[1].customerName;
    let customerEmail = customerData[0].email;
    let customerPhone = customerData[0].phone;
    let addLine1 = customerData[0].addressLine1;
    let addLine2 = customerData[0].addressLine2;
    let city = customerData[0].city;
    let state = customerData[0].state;
    let zipCode = customerData[0].zipCode;

    //create new customer
    await customersPage.addNewCustomer(customerName, customerEmail,customerPhone, addLine1, addLine2, city, state, zipCode);

    //verification 
    await expect(customersPage.verifyCustomerPopup).toContainText(" A new customer has been created successfully ");
})
