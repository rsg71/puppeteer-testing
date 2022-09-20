const puppeteer = require("puppeteer");

describe("testing testing", () => {
    it("should render the page", () => {

        (async () => {
            console.log('opening browser');
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://dorshinar.me");
            const pageTitle = await page.title();
            console.log(await page.title());

            expect(pageTitle).toBe('All posts | Dor Shinar');

            // await page.screenshot({ path: "screenshot.png" });

            await browser.close();
        })();


    })
})
