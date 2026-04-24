
import { test, expect } from '@playwright/test';

const creds = [ {username: "Admin", password: "kjghf"}, {username: "fgbfejhbg", password: "admin123"},{username: "efrjbh ", password: "bfewhb"}]


creds.forEach( element => {

    test('Login with Invalid creds - '+ element.username, async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(element.username)
    await page.locator('//input[@name="password"]').fill(element.password)
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    })


})

