const { test, expect } = require("@playwright/test");
const { NavigationBase } = require("../NavigationBase");
const { PortfolioElms } = require("../Portfolio/PortfolioElms");

exports.PortfolioPage = class PortfolioPage extends NavigationBase{

    constructor(page) {
        super(page);
    }

    async varifyContactUsButton() {
        await this.hover(PortfolioElms.CONTACT_US_BUTTON_DE);
        await this.isElementPresent(PortfolioElms.CONTACT_US_BUTTON_DE);
    }
}