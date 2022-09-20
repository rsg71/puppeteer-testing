const puppeteer = require("puppeteer");

describe("testing testing", () => {

    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true
        });
        page = await browser.newPage();
        await page.goto("https://dorshinar.me", { waitUntil: "domcontentloaded" })
    })

    test("should get correct page title", async () => {
        const pageTitle = await page.title();

        expect(pageTitle).toBe('All posts | Dor Shinar');
    });

    afterAll(() => browser.close());
})
