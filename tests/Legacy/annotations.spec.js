import { test, expect } from '@playwright/test';


test.describe("Group 1", () => {


    test('Test case 1', async () => {
     
       test.fixme()
        console.log("Test case 1 ")

        expect(20).toBe(20)

    })

    test('Test case 2', async () => {

        console.log("Test case 2 ")

    })

    test.skip('Test case 3', async () => {

        console.log("Test case 3 ")

    })

})


test.describe("Group 2", () => {


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
