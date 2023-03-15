const {DashboardPage} = require('./../pages/Dashboard/DashboardPage');

exports.CommonSteps = class CommonSteps {

    constructor(page) {
        this.page = page;
    }

    async navigateAndAcceptCookies(url) {        
        const dashboardPage = new DashboardPage(this.page);
        await this.page.goto(url);
        await dashboardPage.acceptCookies();
    }

    async navigateAndAcceptCookiesDE(url) {        
        const dashboardPage = new DashboardPage(this.page);
        await this.page.goto(url);
        await dashboardPage.acceptCookiesDE();
    }

    async navigate(url) {        
        await this.page.goto(url);
    }
}