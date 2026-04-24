import { test, expect } from '@playwright/test';


const Raju = {


}
test('Login to Sauce Demo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');  // Launch the url 

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();

    Raju['orderNumber'] = "23243254"
});


test("Sample test", ()=>{

  console.log(Raju.orderNumber)

})