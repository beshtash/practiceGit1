import {test} from "@playwright/test";

test("Practice of locator methods", async({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('input#user-name').fill("standard_user");
    await page.locator('input[placeholder="Password"]').fill("secret_sauce");
    await page.locator('input[value="Login"]').click();
    await page.pause();
})

test("Practice of locator method with options", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator(".form_group", { has: page.locator("input#user-name")}).click();
    await page.locator(".form_group", { has: page.locator("input#user-name")}).pressSequentially('standard_user');
    
    await page.locator(".form_group", { hasNot: page.locator("input#user-name")}).click();    
    await page.locator(".form_group", { hasNot: page.locator("input#user-name")}).pressSequentially('secret_sauce');


    await page.locator("#login-button").click();

    await page.locator("a", { hasText: "Sauce Labs Backpack"}).click();

    await page.locator("button", { hasText: 'Back to products' }).click();

    await page.locator('.inventory_item_name', { hasNotText: /Sauce.*/} ).click();
    await page.pause();
})

test("Practice of getBy methods", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/login");
    await page.getByLabel("Email:", { exact: true }).fill("testcodeautomate@gmail.com");
    await page.pause();

})

test('Practice of getByPlaceholder', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/login');
    
    console.log(await page.getByText('New Customer', { exact: true}).textContent());
    //await page.getByAltText('nopCommerce demo store').click();
    //await page.getByTitle("Show products in category Electronics").first().click();
    await page.getByPlaceholder('Search store').fill('Sample');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.locator('div').nth(4).click();
    //await checkbox.click();
    await page.pause();
})