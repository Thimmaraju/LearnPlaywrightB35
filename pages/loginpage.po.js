import { expect } from "@playwright/test"

export class loginPage{


      constructor(page){

         this.page = page
         this.logo = page.locator('img[alt="company-branding"]')
         this.usernameInput = page.locator('input[name="username"]')
         this.passwordInput = page.locator('//input[@name="password"]')
         this.loginBtn = page.locator('button[type="submit"]')
         this.loginErrorMessage = page.locator("//p[text()='Invalid credentials']")

      }

      async launchApp(){

        await this.page.goto('/web/index.php/auth/login')
      }


      async isLogoDisplayed() {

        await expect(this.logo).toBeVisible()
        
      }

     async loginwithcreds(username, password){

        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
     }

     async loginSuccess(){

        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
     }

     async loginFailure(){

        await expect(this.loginErrorMessage).toBeVisible()
     }



}