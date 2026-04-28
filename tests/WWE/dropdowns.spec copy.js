import { test, expect } from '@playwright/test';

test('Drop down values selectiing ', async ({ page }) => {


    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    await page.locator('select[name^="DOB_Day"]').selectOption('15') //text

    await page.locator('select[name^="DOB_Month"]').selectOption("04") //value
    await page.locator('select[name^="DOB_Year"]').selectOption({index : 5})  //index 

    // //await page.locator('select[name^="DOB_Month"]').selectOption("07")

    // await page.locator('select[name^="DOB_Month"]').selectOption({index : 8})



})
