/**
 * Defects - 
 * 1. have to add the driver through excel probably to search the driver
 * 2. searches the driver name only by first name, doesnt take the full name
 * 3. cannot assign flatBed as a truck type
 * 
 * 1. cannot assign more than one truck to a driver as main driver- negative scenario
 * 
 */

import {test,expect} from "../../fixtures/pomfixture.fixture.js";
import newTruckData from "../../testResources/newTruckData.json"


test("addNewTruckAsManager",{tag: "@smoke"}, async({trucksPage})=>{
    //Test data
    let truckNo = newTruckData.truckNo;
    let truckType = newTruckData.truckType;
    let mainDriver = newTruckData.mainDriver;

    //create truck
    trucksPage.addNewTruck(truckNo, truckType, mainDriver);

    await trucksPage.verifyTruckPopup.waitFor({state : "visible"});
    await expect(trucksPage.verifyTruckPopup).toContainText(" Truck has been created successfully ");
})