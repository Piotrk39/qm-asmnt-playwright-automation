const {expect} = require('@playwright/test');
const { DashboardPageObject } = require("./Dashboard/DashboardPageObject");

exports.NavigationBase = class NavigationBase {
    constructor(page) {
        this.page = page;
    }

    async checkChekbox(locator) {
        if (await (await this.page.isChecked(locator))) {
            expect(await this.page.isChecked(locator)).toBeTruthy();
        } else {          
            await this.click(locator);
        }
    }

    async hover(locator) {
        await this.page.hover(locator);
    }

    async type(locator, text) {
        await this.page.waitForSelector(locator);
        await this.page.fill(locator, text);
        return text;
    }

    async click(locator) {
        await this.page.waitForSelector(locator);
        await this.page.click(locator);
    }

    async isElementPresent(locator) {
        return await this.page.isVisible(locator);
    }

    async getElementText(locator) {
        return await this.page.locator(locator).textContent();
    }

    async waitForPageLoad() {
        await this.page.waitForEvent("domcontentloaded");
        await this.page.waitForLoadState('networkidle');
    }

    async waitForTimeout(timeout) {
        await this.page.waitForTimeout(timeout);
    }

    async getCountOfElements(locator) {
        await this.waitForElementDisplayed(locator);
        
        let elements = await this.page.locator(locator).count();
        return elements;
    }

    
    async waitForElementDisplayed(selector) {
        await this.page.waitForSelector(selector, {state: 'visible'});
    }

    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }

    async clickUntilElementDisappears(locatorToClick, selectorToDisappear) {
        for(let i= 0; i<10; i++) {
            await this.click(locatorToClick)
            await this.waitForTimeout(500);
            if(!(await this.page.isVisible(selectorToDisappear))) {
                break;
            }
        }
    }

    async waitForElementToHaveText(selector, text) {
        await this.waitForElementDisplayed(selector);
        let i =0;
        let content = '';
        while(text!=content && i<10) {
            await this.waitForTimeout(500);
            content = await this.getElementText(selector);
            i++;
        }
        if(text==content) {
            console.log(`Element with text "${content}" was displayed`)
            
        }
        else {
            throw new Error(`Element ${selector} did not contain text "${text}", instead it contained "${content}"`)
        }
    }

    async waitForElementToContainText(selector, text) {
        await this.waitForElementDisplayed(selector);
        let i =0;
        let content = '';
        while(!content.includes(text) && i<10) {
            await this.waitForTimeout(500);
            content = await this.getElementText(selector);
            i++;
        }
        if(content.includes(text)) {
            console.log(`Element with text "${content}" was displayed`)
        }
        else {
            throw new Error(`Element ${selector} did not contain text "${text}", instead it contained "${content}"`)
        }
    }
}

 