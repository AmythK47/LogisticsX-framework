
import { test as base, expect } from "./login.fixture.js";

import HomePage from "../Object Repository [POM]/HomePage.page";
import CustomersPage from "../Object Repository [POM]/CustomersPage.page";
import LoadsPage from "../Object Repository [POM]/LoadsPage.page";
import TrucksPage from "../Object Repository [POM]/TrucksPage.page";
import LoadInvoicePage from "../Object Repository [POM]/LoadInvoicePage.page";
import TrailersPage from "../Object Repository [POM]/TrailersPage.page.js";

export const test = base.extend({

    homePage: async ({ login }, use) => {
        const hp = new HomePage(login);
        await use(hp);
    },

    customersPage: async ({ login }, use) => {
        const cp = new CustomersPage(login);
        await use(cp);
    },

    loadsPage: async ({ login }, use) => {
        const lp = new LoadsPage(login);
        await use(lp);
    },

    trucksPage: async ({ login }, use) => {
        const tp = new TrucksPage(login);
        await use(tp);
    },

    loadInvoicesPage: async ({ login }, use) => {
        const ip = new LoadInvoicePage(login);
        await use(ip);
    },

    trailersPage : async({login}, use) => {
        const trailerPage = new TrailersPage(login);
        await use(trailerPage)
    }

});

export { expect };
