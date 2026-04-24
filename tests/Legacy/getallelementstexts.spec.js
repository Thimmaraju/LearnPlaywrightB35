import { test, expect } from '@playwright/test';

test('Get all menu items', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator(`//input[@name="username"]`).fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()

    await page.waitForTimeout(3000)

    const mentitems = await page.locator('//a[@class="oxd-main-menu-item"]').allTextContents()

    console.log(mentitems)


    const sortedmenus = mentitems.sort()

    expect(mentitems).toBe(sortedmenus)


 
});
