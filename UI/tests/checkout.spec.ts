import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage'
import { CommonHeader } from '../pages/common/CommonHeader'
import { LoginPage } from '../pages/LoginPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import login from '../../test_data/login.json'

test.describe('Checkout page test', () => {
    test.beforeEach(async ({ page }) => {
        await page.route('**://*.googlesyndication.com/**', route => route.abort());
        await page.route('**://*.doubleclick.net/**', route => route.abort());

        await page.goto('/');
        console.log('entering the page')
    
        const header = new CommonHeader(page);
    
        // access login page
        await header.gotoLogin()
        console.log('entering login page')

    });

    test('Verify page', async({ page }) => {
        const loginPage = new LoginPage(page)
        const productListPage = new ProductListPage(page)
        const cartPage = new CartPage(page)
        const checkPage = new CheckoutPage(page)
        const header = new CommonHeader(page);

        // login using correct data
        await loginPage.loginSubmit(login.email, login.password)

        // verify we successfully logged in
        await expect(header.logout).toBeVisible()

        // go to product list page
        await page.goto('/products');
        await productListPage.addMultipleItems(3)

        // go to cart page
        await page.goto('/view_cart')
        await cartPage.checkoutItem()

        // verify checkout page
        await checkPage.verifyCheckoutPage()
        await checkPage.verifyItemPrices(3)
    })
})