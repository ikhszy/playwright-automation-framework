import { test, expect } from '@playwright/test';
import { CommonHeader } from '../../pages/common/CommonHeader.ts'
import { SignupPage } from '../../pages/SignupPage.ts'

test.describe('Testsuite for all related to signup', ()=> {

    test('successful signup', async ({ page }) => {

        const common = new CommonHeader(page);
        const sign = new SignupPage(page);

        await page.goto('/')
        await common.gotoLogin()
        await sign.loginSignup('Jackson', 'manuel_ibarra@mail.com')
        await sign.formSignup()
    })
})