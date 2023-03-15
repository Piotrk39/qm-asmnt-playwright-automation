const { test, expect } = require("@playwright/test");
const { NavigationBase } = require("../NavigationBase");
const { AboutUsElms } = require("../AboutUs/AboutUsElms");

exports.AboutUsPage = class AboutUsPage extends NavigationBase{

    constructor(page) {
        super(page);
    }

    async searchEvent(text) {
        await this.type(AboutUsElms.SEARCH_FOR_EVENTS_INPUT, text);
        await this.click(AboutUsElms.FIND_EVENTS_BUTTON);
    }

    async verifyNoResults(content) {
        const noResult = await this.getElementText(AboutUsElms.NO_RESULTS_MESSAGE);
        const trimmed = noResult.trim();

        if(trimmed === content) {
            console.log(`No result message matches the required: ${content}`)
        } else {
            throw new Error(`Content do not match instead ${content} received ${trimmed}`);
        }
    }

    async pickTheDate(year, month, day) {
        await this.click(AboutUsElms.NOW_ONWARDS_BUTTON);
        await this.click(AboutUsElms.YEAR_MONTH_SWITCH);
        await this.click(AboutUsElms.YEAR_SWITCH);
        await this.click(AboutUsElms.selectYear(year));
        await this.click(AboutUsElms.selectMonth(month));
        await this.click(AboutUsElms.selectDay(day));
    }

    async verifyEventName(locator, name, date, number) {
        const eventsCount = await this.getCountOfElements(AboutUsElms.EVENTS_RESULTS);
        const eventName = await this.getElementText(locator);
        const trimmed = eventName.trim();

        if(trimmed === name) {
            console.log(`Event Name matches the required: ${name}`)
        } else {
            throw new Error(`Content do not match instead ${name} received ${trimmed}`);
        }

        await this.waitForElementToContainText(AboutUsElms.EVENT_START_DATE, date);

        if(eventsCount === number) {
            console.log(`Events Number matches the required: ${number} event`)
        } else {
            throw new Error(`Content do not match instead ${number} received ${eventsCount}`);
        }
        
    }
}