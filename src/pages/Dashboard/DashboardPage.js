const { DashboardPageObject } = require('./DashboardPageObject');
const { NavigationBase } = require("./../NavigationBase");

exports.DashboardPage = class DashboardPage extends NavigationBase {

    constructor(page) {
        super(page);
    }

    async acceptCookies() {
        await this.click(DashboardPageObject.ACCEPT_COOKIES_BTN);
    }

    async acceptCookiesDE() {
        await this.click(DashboardPageObject.ACCEPT_COOKIES_BTN_DE);
    }

    async hoverAndChangeLanguage(language) {
        await this.hover(DashboardPageObject.LANGUAGE_DROPDOWN);
        await this.click(DashboardPageObject.changeLanguage(language));
    }

    async navigatePortfolioMenu(menu) {
        await this.hover(DashboardPageObject.PORTFOLIO_DROPDOWN);
        await this.click(DashboardPageObject.generatePortfolioSubMenu(menu))
    }

    async navigateServicesMenu(menu) {
        await this.hover(DashboardPageObject.SERVICES_DROPDOWN);
        await this.click(DashboardPageObject.generatePortfolioSubMenu(menu))
    }

    async hoverAboutUsAndVerifySubMenu() {
        await this.hover(DashboardPageObject.ABOUT_US_DORPDOWN);
        await this.isElementPresent(DashboardPageObject.generateAboutUsSubMenu('Cultural Values'));
        await this.isElementPresent(DashboardPageObject.generateAboutUsSubMenu('Facts and Figures'));
        await this.isElementPresent(DashboardPageObject.generateAboutUsSubMenu('ESR – Everybody’s Social Responsibility'));
        await this.isElementPresent(DashboardPageObject.generateAboutUsSubMenu('News & Blog'));
        await this.isElementPresent(DashboardPageObject.generateAboutUsSubMenu('Events'));
    }

    async clickAboutUsSubMenu(subMenu) {
        await this.click(DashboardPageObject.generateAboutUsSubMenu(subMenu))
    }

    async verifyEnglishFlag() {
        await this.isElementPresent(DashboardPageObject.ENGLISH_LANGUAGE_FLAG)
    }

    
}