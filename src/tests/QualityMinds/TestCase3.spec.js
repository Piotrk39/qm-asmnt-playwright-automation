const {test, expect} = require('@playwright/test');
const { CommonSteps } = require('../../pages/CommonSteps');
const { CareerPage } = require("../../pages/Career/CareerPage");
const { TestConfig } = require('../../util/TestConfig');


test('Verify Job Listing Validations', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const career = new CareerPage(page);
    
    const careerUrl = 'https://qualityminds.com/de/karriere/stellenangebote/';
    const errorMessageDE = 'Bitte gebe eine gültige E-Mail-Adresse ein.';
    const fileName = 'CV_Piotr_Int.pdf';

    await test.step('Navigate to "qualityminds.com/de/karriere/" and accept cookies', async ()=> {
    await common.navigateAndAcceptCookiesDE(careerUrl);
    await career.varifyStellenAngeboteTitle();
  });

  await test.step('Verify thath at least one job listing is present on the page', async ()=> {
    await career.verifyJobListingsNumber(1);
  });

  await test.step('Click on the first job listing and verify it is displayed', async ()=> {
    await career.clickOnAnyListing(1);
  });

  await test.step('Validate errors after cliking send on empty form', async ()=> {
    await career.clickSendAndVerifyErrors();
  });

  await test.step('Validate errors after cliking send and typing Vorname und Nachname', async ()=> {
    await career.typeNameAndVerifyErrors('Piotr');
  });

  await test.step('Validate errors after typing Emoji into Email input', async ()=> {
    await career.typeWrongEmailFormatAndVerifyErr(errorMessageDE);
  });

  await test.step('Type 10 first words from job listing content into the form', async ()=> {
    await career.typeListingContentIntoMessage();
  });

  await test.step('Attach file', async ()=> {
    await career.uploadFile(TestConfig.TEST_DATA_PATH + "/CV_Piotr_Int.pdf", fileName);
  });

  await test.step('Check the GDPR checkbox', async ()=> {
    await career.checkPrivacyChekbox();
  });

});