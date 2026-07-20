import { test, expect } from '@playwright/test';
import { CommonHeader } from '../../pages/common/CommonHeader.ts'
import { LoginPage } from '../../pages/LoginPage.ts'

test('basic login', async ({ page }) => {
    const header = new CommonHeader(page);
    const loginPage = new LoginPage(page);

    // enter the page
    await page.goto('/');

    // access the login page
    await header.gotoLogin();

    // login using correct data
    await loginPage.loginSubmit('ikhszy+exercise_1@gmail.com', 'Password123!@#');

    // verify we successfully logged in
    await expect(header.logout).toBeVisible();
})