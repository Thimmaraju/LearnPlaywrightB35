import { test, expect } from '@playwright/test';

import data from "../testdata/textbox.json"

test('Verify text Boxes', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')

    await page.locator('#userName').fill(data.fullname)

    await page.locator('#userEmail').fill(data.emailaddress)

    await page.locator('#currentAddress').fill(data.currentaddress)

    await page.locator('#permanentAddress').fill(data.permanentaddress)

    await page.locator('#submit').click()

    await page.close()


})