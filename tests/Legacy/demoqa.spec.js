import { test, expect } from '@playwright/test';

const data  = ["Raju G", "rajutester2673@gmail.com", "Blr", "Blr"]

test('Enter text in to textbox and Verify the text displayed',  async ({ page }) => {
  await  page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(data[0]);
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(data[1]);
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(data[2]);
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill(data[3]);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Raju G')).toBeVisible();
  await expect(page.getByText('Email:rajutester2673@gmail.com')).toBeVisible();
  await expect(page.getByText('Permananet Address :Bangalore')).toBeVisible();
  await expect(page.getByText('Current Address :Bangalore')).toBeVisible();
});