import { test, expect } from '@playwright/test';

test('Assertion practice', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    //page.locator('[data-test="login-button"]');

    await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    console.log("Practice 2nd push")

})