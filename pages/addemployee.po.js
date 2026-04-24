import { expect } from "@playwright/test"

export class addEmployeePage {


    constructor(page) {

        this.page = page
        this.addempsubmenu = page.locator("//a[text()='Add Employee']")
        this.firstnameInput = page.locator('input[name="firstName"]')
        this.lastNameInput = page.locator('input[name="lastName"]')
        this.saveButton = page.locator('//button[@type="submit"]')
        this.personaldetailsHeader = page.locator("//h6[text()='Personal Details']")
       
    }

    async openAddEmployeePage() {

        await this.addempsubmenu.click()
    }

    async enterMandatoryDetailsAndSave(firstname, lastname){


        await this.firstnameInput.fill(firstname)
        await this.lastNameInput.fill(lastname)
        await this.saveButton.click()
    }

    async employeeCreationSuccess(){

        await expect(this.personaldetailsHeader).toBeVisible()
    }

}