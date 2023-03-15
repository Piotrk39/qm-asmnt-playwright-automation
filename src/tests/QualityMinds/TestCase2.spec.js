const {test, expect} = require('@playwright/test');
const { CommonSteps } = require('../../pages/CommonSteps');
const {DashboardPage} = require('../../pages/Dashboard/DashboardPage');
const { AboutUsPage } = require("../../pages/AboutUs/AboutUsPage");
const { AboutUsElms } = require("../../pages/AboutUs/AboutUsElms");


test('Verify Events on Events page', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const dashboard = new DashboardPage(page);
    const aboutUs = new AboutUsPage(page);
    
    const eventName = 'ICSTTP 2021: 15. International Conference on Software Testing, Types and Process';
    const eventDate = 'January 4, 2022';

    await test.step('Navigate to "qualityminds.com", accept cookies and verify English version', async ()=> {
    await common.navigateAndAcceptCookies(baseURL);
    await dashboard.verifyEnglishFlag();
  });

  await test.step('Hover over About Us and Verify If Sub-Menu is displayed', async ()=> {
    await dashboard.hoverAboutUsAndVerifySubMenu();
  });

  await test.step('Click on Events and Search for 2021 events', async ()=> {
    await dashboard.clickAboutUsSubMenu('Events');
    await expect(page).toHaveURL("https://qualityminds.com/events/");
    await aboutUs.searchEvent('2021');
    await aboutUs.verifyNoResults('There were no results found for "2021".');
  });

  await test.step('Navigate through the calendar to December 2021', async ()=> {
    await aboutUs.pickTheDate('2021', 'Dec', '31');
    await aboutUs.verifyEventName(AboutUsElms.RESULT_TITLE ,eventName, eventDate, 1);
  });

});