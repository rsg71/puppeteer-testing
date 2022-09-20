const puppeteer = require("puppeteer");

(async () => {
    console.log('opening browser');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://dorshinar.me");
    console.log(await page.title());

    await page.screenshot({ path: "screenshot.png" });

    await browser.close();
})();