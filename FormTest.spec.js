import { test, expect } from '@playwright/test';

test('Fill out form inside iframe', async ({ page }) => {
  // Navigate to the page with the iframe
  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input');

  // Get the iframe's frame
  const iframe = page.frameLocator('#iframeResult'); 

  // Wait for the input field inside the iframe to be visible
  await iframe.locator('input[name="firstname"]').waitFor({ timeout: 30000 });

  // Fill out the "firstname" input field
  await iframe.locator('input[name="firstname"]').fill('John Doe');

  // Verify if the input field is filled correctly
  const inputValue = await iframe.locator('input[name="firstname"]').inputValue();
  expect(inputValue).toBe('John Doe');
});
