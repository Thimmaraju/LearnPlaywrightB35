import { test, expect } from '@playwright/test';


test('Login to Orange HRM', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL(/.*dashboard.*/);

})

test('Login to Orange HRM with Invalid username and valid password', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill("bfvhjber")
    await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})


test('Login to Orange HRM with valid username and Invalid password', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('//input[@name="password"]').fill("kjrngj")
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})


test('Login to Orange HRM with INvalid username and Invalid password', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill("kjeffhgj")
    await page.locator('//input[@name="password"]').fill("kjrngj")
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})