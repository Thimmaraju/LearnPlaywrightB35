import { test, expect } from '@playwright/test';

test('Register rediff', async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    await page.locator('input[name^="name"]').fill("Raju G")
});

