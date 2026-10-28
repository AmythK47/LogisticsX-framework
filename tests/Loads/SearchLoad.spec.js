import {test,expect} from "../../fixtures/pomfixture.fixture.js";
import testData from "../../testResources/loadData.json";

test("SearchForLoad",{tag: "@smoke"}, async({loadsPage,homePage})=>{

    //Test data
    let loadName = testData.loadName;

    await homePage.loadsLnk.click();
    await loadsPage.searchLoad.fill(loadName);
    await loadsPage.searchLoadResult.waitFor({state : "visible"});

    await expect(loadsPage.searchLoadResult).toContainText(loadName);

})