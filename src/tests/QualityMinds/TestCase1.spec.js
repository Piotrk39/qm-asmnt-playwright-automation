const {test, expect} = require('@playwright/test');
const { CommonSteps } = require('../../pages/CommonSteps');
const {DashboardPage} = require('../../pages/Dashboard/DashboardPage');
const {PortfolioPage} = require('../../pages/Portfolio/PortfolioPage');

test('Verify Language Change on Services page', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const dashboard = new DashboardPage(page);
    const portfolio = new PortfolioPage(page);

    await test.step('Navigate to "qualityminds.com" and accept cookies', async ()=> {
    await common.navigateAndAcceptCookies(baseURL);
  });

  await test.step('Hover over British flag and change language to German', async ()=> {
    await dashboard.hoverAndChangeLanguage('DE');
    await expect(page).toHaveURL("https://qualityminds.com/de/");
  });

  await test.step('Hover over Portfolio and click Automatisiertes Testen', async ()=> {
    await dashboard.navigatePortfolioMenu("Automatisiertes Testen");
    await expect(page).toHaveURL("https://qualityminds.com/de/portfolio/qa-kernkompetenzen/automatisiertes-testen/");
  });

  await test.step('Verify that page contains Contact button with email address: testing@qualityminds.de', async ()=> {
    await portfolio.varifyContactUsButton();
  });

  await test.step('Navigate back to www.qualityminds.com main page and verify English version', async ()=> {
    await common.navigate(baseURL);
    await expect(page).toHaveURL("https://qualityminds.com/");
    await dashboard.verifyEnglishFlag();
  });

  await test.step('Hover over Services, click Test Automation and change language to German', async ()=> {
    await dashboard.navigateServicesMenu('Test Automation');
    await dashboard.hoverAndChangeLanguage('DE');
    await expect(page).toHaveURL("https://qualityminds.com/de/portfolio/qa-kernkompetenzen/automatisiertes-testen/");
  });

});