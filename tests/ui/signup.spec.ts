import { test, expect } from '@playwright/test';
import { CommonHeader } from '../../pages/common/CommonHeader.ts'
import { SignupPage } from '../../pages/SignupPage.ts'
import { randomEmail } from '../../utils/Randomizer'
import signupData from '../../test_data/signup.json'

test.describe('Testsuite for all related to signup', ()=> {

    test('successful signup', async ({ page }) => {

        const common = new CommonHeader(page);
        const sign = new SignupPage(page);

        await page.goto('/')
        await common.gotoLogin()
        await sign.loginSignup(signupData.fullName, randomEmail('ikhszy@gmail.com'))
        await sign.formSignup()

        var successMessage = page.locator('h2', {hasText: 'Account Created!'})
        await expect(successMessage).toBeVisible();
    })
})