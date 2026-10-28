import {test,expect} from "../../fixtures/pomfixture.fixture.js";
import trailerData from "../../testResources/TrailerData.json";



test("addNewTrailerAsManager",{tag: "@smoke"}, async({trailersPage})=>{
    let randomNo = Math.floor(Math.random() * 90000) + 10000;
    //Test data
    let trailerNo = trailerData.trailerNo+randomNo;
    let trailerType = trailerData.trailerType;

    //create trailer
    trailersPage.addNewTrailer(trailerNo, trailerType);

    await trailersPage.verifyTrailerPopup.waitFor({state:"visible"});
    await expect(trailersPage.verifyTrailerPopup).toContainText(" Trailer has been created ");
    
})


test("addTrailerToTruck",{tag: "@integration"}, async({trailersPage,homePage,trucksPage})=>{
    let randomNo = Math.floor(Math.random() * 90000) + 10000;
    //Test data
    let trailerNo = trailerData.trailerNo+randomNo;
    let trailerType = trailerData.trailerType[0];

    trailersPage.addNewTrailer(trailerNo, trailerType);

    await trailersPage.verifyTrailerPopup.waitFor({state:"visible"});
    await expect(trailersPage.verifyTrailerPopup).toContainText(" Trailer has been created ");

    let truckNo ="999"
    await homePage.trucksLnk.click();
    await trucksPage.searchAndEditTruck(truckNo);
    await trucksPage.selectTrailer(trailerNo);
    await trucksPage.updatetruckBtn.click();

    await trucksPage.verifyUpdateTruckPopup.waitFor({state : "visible"});
    await expect(trucksPage.verifyUpdateTruckPopup).toContainText(" Truck has been updated successfully ")

})

