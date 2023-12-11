const Base = require("@playwright/test");
const { loginPage } = require('../pages/loginPage');
const { productsPage } = require('../pages/productsPage');

exports.test = Base.test.extend({
    loginPage: async ({page}, use) => {
        await use(new loginPage(page))
    },
    productsPage: async ({page}, use) => {
        await use(new productsPage(page))
    }
})

exports.verify = Base.expect
exports.expect = Base.expect
exports.request = Base.request