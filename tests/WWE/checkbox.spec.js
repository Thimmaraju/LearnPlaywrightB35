import { test, expect } from '@playwright/test';


test("Working with check box", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('#checkBoxOption1').check()

    await expect(page.locator('#checkBoxOption1')).toBeChecked()

    await page.waitForTimeout(4000)

    await page.locator('#checkBoxOption1').uncheck()
    await expect(page.locator('#checkBoxOption1')).not.toBeChecked()

})


test("Working with check box 2", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

   //const checkboxes = await page.$$('')

   const checkboxes = ['#checkBoxOption1', '#checkBoxOption2', '#checkBoxOption3']

   for (let checkbox of checkboxes){

      await page.locator(checkbox).check()
   }


})


test("Working with check box 3", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

     await page.waitForTimeout(2000)

   const checkboxes = await page.$$('//label//input[@type="checkbox"]')

   await expect(checkboxes.length).toBe(3)

   await page.waitForTimeout(2000)

   for (let checkbox of checkboxes){

     await checkbox.check()
   }


})


test("Working with Radio button", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

     await page.waitForTimeout(2000)

     await page.locator('//input[@name="radioButton"][@value="radio2"]').check()


})