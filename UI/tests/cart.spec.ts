import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage'
import { CommonHeader } from '../pages/common/CommonHeader'
import { CartPage } from '../pages/CartPage'

test.describe('Cart Page Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.route('**://*.googlesyndication.com/**', route => route.abort());
        await page.route('**://*.doubleclick.net/**', route => route.abort());
    });

    test('Verify cart (all items with same quantity)', async({ page }) => {
        const productListPage = new ProductListPage(page)
        const cartPage = new CartPage(page)

        await page.goto('/products');
        await productListPage.addMultipleItems(3)

        await page.goto('/view_cart')
        await cartPage.verifyCart(3)
        await cartPage.verifyItemPrices(3)
    })

    test('Verify cart items with different quantity', async ({ page }) => {
        const productListPage = new ProductListPage(page)
        const prodDetailsPage = new ProductDetailsPage(page)
        const commonHeader = new CommonHeader(page)
        const cartPage = new CartPage(page)

        await page.goto('/')

        for(let i = 0; i <= 3; i++) {
            await commonHeader.gotoProduct()
            const randomNumber: number = Math.floor(Math.random() * 10) + 1
            await productListPage.viewProduct(i + 1)
            await prodDetailsPage.addProductOnly(randomNumber.toString())
            await productListPage.dismissSuccessDialog()
        }

        await commonHeader.gotoCart()
        await cartPage.verifyCart(4)
        await cartPage.verifyItemPrices(4)
    })
})