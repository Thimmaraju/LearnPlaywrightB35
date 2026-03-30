import {test , expect} from '@playwright/test';

test.describe('Admin - Add Employment Status', () => {
  test('Admin-001: Verify Admin can add new employment status', async ({ page }) => {
    // Login as Admin      
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('text=Dashboard').waitFor();

    // Navigate to Admin > Job > Employment Status
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('link', { name: 'Job' }).click();
    await page.getByRole('link', { name: 'Employment Status' }).click();
    await page.locator('text=Employment Status').waitFor(); 
    
  })

})