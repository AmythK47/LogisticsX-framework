import {test as base, expect} from "@playwright/test";

//import commonData from "../testResources/commonData.json";
import LoginPage from "../Object Repository [POM]/LoginPage.page";
import HomePage from "../Object Repository [POM]/HomePage.page";

export const test = base.extend({
    login : async ({page},use)=>{

        await page.context().clearCookies();

        const loginPage = new LoginPage(page);

        // const {url, emailManager, passwordManager} = commonData;
        const url = process.env.BASE_URL;
        const emailManager = process.env.MANAGER_EMAIL;
        const passwordManager = process.env.MANAGER_PASSWORD;

        await loginPage.signIn(url, emailManager, passwordManager);

        const homePage = new HomePage(page);
        await expect(homePage.loadsLnk).toBeVisible();

        await use(page);

    }
});
export {expect};