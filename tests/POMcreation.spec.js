import {test} from "@playwright/test";
import LoginPage from "../Object Repository [POM]/LoginPage.page";
import HomePage from "../Object Repository [POM]/HomePage.page";
import LoadsPage from "../Object Repository [POM]/LoadsPage.page";
import TrucksPage from "../Object Repository [POM]/TrucksPage.page";
import TrailersPage from "../Object Repository [POM]/TrailersPage.page";
import InvoicingPage from "../Object Repository [POM]/LoadInvoicePage.page";

test("Pom creation", async ({page}) => {

    let lp = new LoginPage(page);
    let hp = new HomePage(page);
    let lsp = new LoadsPage(page);
    let tp = new TrucksPage(page); 
    let trailp = new TrailersPage(page);
    let ip = new InvoicingPage(page);

})