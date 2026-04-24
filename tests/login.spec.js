
import {test, expect} from "@playwright/test"
import { loginPage } from "../pages/loginpage.po"

import data from "../testdata/login.json"

let login

test.beforeEach(async ({page}) =>{

    login = new loginPage(page)

    await login.launchApp()
    await login.isLogoDisplayed()

})

test("Verify loginwith Valid credentials", async () =>{

  
    await login.loginwithcreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await login.loginSuccess()



} )




test("Verify valid username and Invalid password", async () =>{


    await login.loginwithcreds(process.env.APP_USERNAME, data.wrongpassword)
    await login.loginFailure()

})


test("Verify INvalid username and valid password - POM", async () =>{


    await login.loginwithcreds(data.wrongusername, data.password)
    await login.loginFailure()

})


test("Verify INvalid username and INvalid password - POM ", async () =>{


    await login.loginwithcreds(data.wrongusername, data.wrongpassword)
    await login.loginFailure()

})