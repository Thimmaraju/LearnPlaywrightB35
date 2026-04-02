import { test, expect } from '@playwright/test';


test('Login to Orange HRM', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")

    await page.waitForTimeout(2000)
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()

    await page.locator('a[class="oxd-main-menu-item"]').first().click()

})

//1 3 7 Technique

// same day practice and write notes  - 1 

// every 3rd  revise last 2 days topics  - 3 

// every weekend - revise whole week topics - 7 