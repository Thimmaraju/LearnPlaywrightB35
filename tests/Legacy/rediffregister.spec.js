import { test, expect } from '@playwright/test';
import { generatePhoneNumber } from '../../utils/testDataGenerator';// Es6

//const { generatePhoneNumber} = require("../utils/testDataGenerator") // before es6


test('Register rediff', async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    await page.locator('input[name^="name"]').fill(generatePhoneNumber())
});

