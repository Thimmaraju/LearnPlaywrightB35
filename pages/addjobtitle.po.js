
export class addJobTitlePage{

    
    constructor(page) {

        this.page = page
        this.jobsubMenu = page.locator('//li[contains(.,"Job ")]')
       
    }

    async clickOnJobSubmenu() {

        await this.jobsubMenu.click()
    }



}