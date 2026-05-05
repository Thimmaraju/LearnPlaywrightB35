

import { test, expect } from "@playwright/test"
import { faker } from '@faker-js/faker';

test("Verify Add Employee API", async ({ request }) => {

    const firstname = faker.person.firstName()
    const lastname = faker.person.lastName()
    const empid = faker.string.alphanumeric(5)

    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"
    const addemp = await request.post(url, {

        headers: {

            "cookie": "orangehrm=peeto5obp52cfg5bucbh6i6nk0"
        },
        data: { 
            "firstName": firstname, 
            "middleName": "abc", 
            "lastName": lastname, 
            "empPicture": null, 
            "employeeId": empid
        }
    })

    const jsonres = await addemp.json()
    console.log(JSON.stringify(jsonres))
    expect(addemp.status()).toBe(200)

    // Type check
expect(typeof jsonres.data.empNumber).toBe('number');

// Value checks
//expect(jsonres.data.lastName).toBe(-+-);
expect(jsonres.data.firstName).toBe(firstname);
expect(jsonres.data.middleName).toBe("abc");
expect(jsonres.data.employeeId).toBe(empid);
expect(jsonres.data.terminationId).toBeNull();

})


test("Verify Get all Employees API", async ({ request }) => {


    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC"
    const getallEmps = await request.get(url, {

        headers: {

            "cookie": "orangehrm=peeto5obp52cfg5bucbh6i6nk0"
        }
    })

    expect(getallEmps.status()).toBe(200)

    const jsonresponse = await addemp.json()

    console.log(jsonresponse)
})