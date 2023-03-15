const { test, expect } = require("@playwright/test");
const { NavigationBase } = require("../NavigationBase");
const { CareerElms } = require("../Career/CareerElms");
const { TestUtil } = require("../../util/TestUtil");

exports.CareerPage = class CareerPage extends NavigationBase{

    constructor(page) {
        super(page);
    }

    async varifyStellenAngeboteTitle() {
        await this.waitForElementToHaveText(CareerElms.TITLE_STELLENAGEBOTE, 'Stellenangebote');
    }

    async verifyJobListingsNumber(number) {
        const jobListingElCount = await this.getCountOfElements(CareerElms.JOB_LISTING);
        
        if (jobListingElCount >= number) {
            console.log(`${jobListingElCount} job listings present`);
        } else {
            throw new Error(`Count of job listings is lower then ${number}, amount displayed is equal to ${jobListingElCount}`);
        }
    }

    async clickOnAnyListing(number) {
        await this.click(CareerElms.clickAnyJobListing(number));
        await this.isElementPresent(CareerElms.JOB_LISTING_INNER_FORM);
    }

    async clickSendAndVerifyErrors() {
        await this.click(CareerElms.SUBMIT_FORM_BUTTON);

        await this.isElementPresent(CareerElms.NAME_ERROR);
        await this.isElementPresent(CareerElms.EMAIL_ERROR);
        await this.isElementPresent(CareerElms.PHONE_ERROR);
        await this.isElementPresent(CareerElms.COVER_LETTER_ERROR);
    }

    async typeNameAndVerifyErrors(name) {
        await this.click(CareerElms.SUBMIT_FORM_BUTTON);

        await this.type(CareerElms.NAME_AND_SURNAME_INPUT, name)

        await this.click(CareerElms.EMAIL_INPUT);

        await this.isElementPresent(CareerElms.NO_ERROR_NAME);
        await this.isElementPresent(CareerElms.EMAIL_ERROR);
        await this.isElementPresent(CareerElms.PHONE_ERROR);
        await this.isElementPresent(CareerElms.COVER_LETTER_ERROR);
    }

    async typeWrongEmailFormatAndVerifyErr(errorText) {
        await this.type(CareerElms.EMAIL_INPUT, '😊');
        await this.click(CareerElms.PHONE_INPUT);

        const emailErrorText = await this.getElementText(CareerElms.EMAIL_ERROR);

        if (emailErrorText === errorText) {
            console.log(`${emailErrorText}, text is correct`);
        } else {
            throw new Error(`Error text is not: ${errorText}, instead error text is: ${emailErrorText}`);
        }
    }

    async typeListingContentIntoMessage() {   
        // Split and Slice the text of the listing
        function getWordStr(str) {
            return str.split(/\s+/).slice(0, 10).join(" ");
        }
        
        //TO CALL THIS FUNCTION
        const listingcontent = await this.getElementText(CareerElms.LISTING_CONTENT);
        let finalStr = getWordStr(listingcontent);
        
        await this.type(CareerElms.COVER_LETTER_INPUT, finalStr)
        await this.click(CareerElms.PHONE_INPUT);

        await this.isElementPresent(CareerElms.NO_COVER_LETTER_ERROR);
    }

    async uploadFile(filePath, fileName) {
        await TestUtil.uploadFile(this.page, CareerElms.UPLOAD_INPUT, filePath);
        
        const buttonFileName = await this.getElementText(CareerElms.UPLOAD_INPUT);

        if (buttonFileName === fileName) {
            console.log(`${buttonFileName}, text is correct`);
        } else {
            throw new Error(`File name is not: ${fileName}, instead error text is: ${buttonFileName}`);
        }
    }

    async checkPrivacyChekbox() {
        await this.clickUntilElementDisappears(CareerElms.PRIVACY_POLICY_CHECKBOX, CareerElms.PRIVACY_POLICY_ERROR)
    }
}