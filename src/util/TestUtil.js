const { expect } = require("@playwright/test");

exports.TestUtil = class TestUtil {
      static async uploadFile(page, locator, fileName) {
        const [fileChooser] = await Promise.all([
          page.waitForEvent('filechooser'),
          page.click(locator)
        ]);
        await fileChooser.setFiles(fileName);
      }
}