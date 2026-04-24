import { test, expect } from '@playwright/test';





test.describe("Group 1", () => {





    test('Test case 1', async () => {

        console.log("Test case 1 ")


    })

    test('Test case 2', async () => {

        console.log("Test case 2 ")

    })

    test('Test case 3', async () => {

        console.log("Test case 3 ")

    })

})


test.describe("Group 2", () => {


    
    test.afterAll(() => {

        console.log("Print After all tests")
    })


    test.beforeAll(() => {

        console.log("Print Before all tests")
    })


    test.beforeEach(() => {

        console.log("Print Before Each test")
    })


    test.afterEach(() => {

        console.log("Print After Each test")
    })

    test('Test case 4', async () => {

        console.log("Test case 4 ")

    })

    test('Test case 5', async () => {

        console.log("Test case 5 ")

    })

    test('Test case 6', async () => {

        console.log("Test case 6 ")

    })

})
