import {test,expect} from "../../fixtures/pomfixture.fixture";
import testData from "../../testResources/loadData.json";

test("createNewLoad",{tag: "@smoke"}, async({loadsPage})=>{
    //Test data
    let loadName = testData.loadName;
    let loadType = testData.loadType;
    let source = testData.source;
    let customer = testData.customer;
    let origin = testData.origin;
    let destination = testData.destination;
    let cost = testData.cost;
    
    await loadsPage.addNewLoad(loadName,loadType,source,customer,origin,destination,cost);

    //verification
    await expect(loadsPage.verifyLoad).toBeVisible();
    await page.waitForTimeout(1000);
    await expect(loadsPage.verifyLoad).toContainText("A new load has been created successfully");

})
