
import {test, expect} from "@playwright/test"
import { loginPage } from "../pages/loginpage.po"
import { dashBoardPage } from "../pages/dashboardpage.po"
import { addEmployeePage } from "../pages/addemployee.po"

import data from "../testdata/login.json"
import addempdata from "../testdata/addemployee.json"

let login
let dashboard 
let addemp 

test.beforeEach(async ({page}) =>{

    login = new loginPage(page)
    dashboard = new dashBoardPage(page)
    addemp = new addEmployeePage(page)

    await login.launchApp()
    await login.isLogoDisplayed()
    await login.loginwithcreds(data.username, data.password)
    await dashboard.openPIMModule()
    await addemp.openAddEmployeePage()

})

test("Verify Add Employee with Mandatory Details ", async () =>{

  
    await addemp.enterMandatoryDetailsAndSave(addempdata.firstname, addempdata.lastname)
    await addemp.employeeCreationSuccess()


})