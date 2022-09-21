const puppeteer = require("puppeteer");

// const url = 'https://dorshinar.me';
const url = 'http://localhost:3000';

describe("testing testing", () => {

    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true
        });
        page = await browser.newPage();
        await page.goto(url, { waitUntil: "domcontentloaded" })
    })

    test("should get correct page title", async () => {
        const pageTitle = await page.title();

        // expect(pageTitle).toBe('All posts | Dor Shinar');
        expect(pageTitle).toBe('React App RG');
    });

    afterAll(() => browser.close());
})
