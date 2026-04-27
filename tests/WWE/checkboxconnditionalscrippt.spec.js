import { test, expect } from '@playwright/test';

test('Check the checkbox conditionally', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.waitForTimeout(4000)
    const statusofCheckbox = await page.locator('#checkBoxOption1').isChecked()

    console.log(statusofCheckbox)

    if (!statusofCheckbox) {

        await page.locator('#checkBoxOption1').check()
    }
})


test('Check the checkbox Rediff ', async ({ page }) => {


    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    await page.locator('input[name^="chk_altemail"]').check()

    await expect(page.locator('input[name^="chk_altemail"]')).toBeChecked()

    await page.waitForTimeout(3000)

    await page.locator('input[name^="chk_altemail"]').uncheck()

    await expect(page.locator('input[name^="chk_altemail"]')).not.toBeChecked()


})



test('Check the checkbox Rediff - check all - Multiple checkboxes handling ', async ({ page }) => {


    // Launch the Url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Enter username 
    await page.locator("input[name='username']").fill(process.env.APP_USERNAME)

    //Password enter 
    await page.locator("input[name='password']").fill(process.env.APP_PASSWORD)

    // click on login button
    await page.locator("button[type='submit']").click()

    // Whether its naviated to dashboard page or not 
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    // PIM 
    await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()

    const checkboxes = ['//input[@type="checkbox" and @value="0"]', '//input[@type="checkbox" and @value="0"]', '//input[@type="checkbox" and @value="3"]', '//input[@type="checkbox" and @value="6"]', '//input[@type="checkbox" and @value="8"]', '//input[@type="checkbox" and @value="12"]']

    for (let checkbox of checkboxes) {

        await page.locator(checkbox).check({ force: true })
    }


})


// ischecked() - Just to get the status 

//    true - if already checked 

//    false - if not checked 
// it not assertion 

//toBeChecked
// assertions 

// pass - if assertions pass 


// $$ - it will return the array for us 

test('Check the mutilple checkboxes ', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const checkboxes = await page.$$('//input[@type="checkbox"]')  // [el1, ele2,el3,el4]

    for (let checkbox of checkboxes) {

        await checkbox.check()
    }

    await page.waitForTimeout(3000)

    for (let checkbox of checkboxes) {

        await checkbox.uncheck()
    }



})


test("click on multiple elements ", async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    const products = await page.$$('//div[@class="product-action"]/button')

    for (let product of products) {

        await product.click()
    }

})


//Radio Button 


test('Check the Radio button', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('//input[@value="radio2"]').check()

    await expect( page.locator('//input[@value="radio2"]')).toBeChecked()

    await page.waitForTimeout(4000)

   // await page.locator('//input[@value="radio2"]').uncheck()


})