// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test('Convert text to uppercase', async ({ page }) => {
  await page.goto('http://localhost:5500'); // Update with your project URL
  await page.fill('.edit-area', 'test text');
  await page.click('button:has-text("Capitalize All Text")');
  
  // Ensure this line captures the text from the correct element
  const text = await page.inputValue('.edit-area');
  
  expect(text).toBe('TEST TEXT');
});
