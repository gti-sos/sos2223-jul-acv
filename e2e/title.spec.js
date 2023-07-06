//@ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://sos2223-jul-acv1.appspot.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/SOS2223-jul-acv1/);
  });