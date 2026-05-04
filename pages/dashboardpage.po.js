import { expect } from "@playwright/test"

export class dashBoardPage {


    constructor(page) {

        this.page = page
        this.PIMMenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
        this.adminMenu = page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
        this.adminMenu = page.locator('//a[@href="/web/index.php/admin/ViewLeave"]')
       
    }

    async openPIMModule() {

        await this.PIMMenu.click()
    }

    async openAdminModule(){
        await this.openAdminModule()
    }


    async openLeaveModule(){
        await this.openleaveModule()
    }

    
}