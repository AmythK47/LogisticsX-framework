import {test,expect} from "@playwright/test";

import LoginPage from "../../Object Repository [POM]/LoginPage.page";
import HomePage from "../../Object Repository [POM]/HomePage.page";
import LoadsPage from "../../Object Repository [POM]/LoadsPage.page";

import commonData from "../../testResources/commonData.json";

test("DispatcherLogin",{tag: "@smoke"}, async({page})=>{

    //common data
    let url = commonData.url;
    let email = commonData.emailDispatch;
    let password = commonData.passwordDispatch;

    await page.context().clearCookies();

    //load POM
    let lp = new LoginPage(page);
    let hp = new HomePage(page);

    await lp.signIn(url,email,password);
    await page.waitForTimeout(2000);

    await page.waitForLoadState("load");

    await expect(hp.loadsLnk).toBeVisible();

})