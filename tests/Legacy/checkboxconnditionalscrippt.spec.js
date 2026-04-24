import { test, expect } from '@playwright/test';

test('Check the checkbox conditionally', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.waitForTimeout(4000)
    const statusofCheckbox = await page.locator('#checkBoxOption1').isChecked()

    console.log(statusofCheckbox)

    if(!statusofCheckbox){

         await page.locator('#checkBoxOption1').check()
    }
})