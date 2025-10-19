import {chromium, test} from "@playwright/test";

test("Kick Start with Playwright", async ( {page}) =>{
    await page.goto("https://www.google.com");
    await page.getByLabel('Google apps').click();
})

test("Second test", async ()=> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com')
    await page.getByLabel('Google apps').click();
    console.log("Second test");
})