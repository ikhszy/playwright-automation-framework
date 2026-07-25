import { test, expect } from '@playwright/test';
import { CommonHeader } from '../../pages/common/CommonHeader.ts'
import { LoginPage } from '../../pages/LoginPage.ts'
import login from '../../test_data/login.json'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    console.log('entering the page')

    const header = new CommonHeader(page);

    // access login page
    await header.gotoLogin()
    console.log('entering login page')
});

test('LGN-001 - Successful login', async ({ page }) => {
    const header = new CommonHeader(page);
    const loginPage = new LoginPage(page);

    // login using correct data
    await loginPage.loginSubmit(login.email, login.password)

    // verify we successfully logged in
    await expect(header.logout).toBeVisible()
})

test('LGN-002 - Incorrect email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // login using incorrect email
    await loginPage.loginSubmit('whatever@malogusto.com', login.password)
    console.log('Submitting data with incorrect email')

    // verify error text appeared
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
    console.log('error text appeared')
})

test('LGN-003 - Incorrect password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // login using incorrect email
    await loginPage.loginSubmit(login.email, 'wrongpasswordHAHAHAHA')
    console.log('Submitting data with incorrect email')

    // verify error text appeared
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
    console.log('error text appeared')
})