exports.DashboardPageObject = class DashboardPageObject {
    
    static ACCEPT_COOKIES_BTN = '//button[text()="Accept all"]';
    static ACCEPT_COOKIES_BTN_DE = '//button[text()="Alle akzeptieren"]';
    static PORTFOLIO_DROPDOWN = '//*[@id="top-menu"]//a[text()="PORTFOLIO"]';
    static SERVICES_DROPDOWN = '//*[@id="top-menu"]//a[text()="SERVICES"]';
    static ABOUT_US_DORPDOWN = '//*[@id="top-menu"]//a[text()="ABOUT US"]';
    static LANGUAGE_DROPDOWN = "//*[@id='top-menu']/li[8]";
    static ENGLISH_LANGUAGE_FLAG = '//img[@class="wpml-ls-flag" and @src="https://r9w2g9k2.rocketcdn.me/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"]';
    
    static changeLanguage(text) {
        return `//*[@id="top-menu"]/li/ul/li/a/img[contains(@alt, ${text})]`;
    }

    static generatePortfolioSubMenu(text) {
        return `//*[@id="top-menu"]/li/ul/li/ul/li/a[text()='${text}']`;
    }   
    
    static generateAboutUsSubMenu(text) {
        return `//*[@id="top-menu"]/li[4]/ul/li/a[text()='${text}']`
    }
}