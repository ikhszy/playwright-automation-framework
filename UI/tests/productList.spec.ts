// ui/tests/product-list.spec.ts
import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';

test.describe('Product List Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.route('**://*.googlesyndication.com/**', route => route.abort());
        await page.route('**://*.doubleclick.net/**', route => route.abort());
        });

    test('search returns results', async ({ page }) => {
        const productListPage = new ProductListPage(page);

        await page.goto('/products');
        await productListPage.searchProduct('Top');

        await expect(page).toHaveURL(/search/);
        await expect(page.locator('.features_items .product-image-wrapper').first()).toBeVisible();
    });

    test('add first product to cart', async ({ page }) => {
        const productListPage = new ProductListPage(page);

        await page.goto('/products')
        await productListPage.addToCart(0)
        await productListPage.dismissSuccessDialog()
    });

    test('view first product detail', async ({ page }) => {
        const productListPage = new ProductListPage(page);

        await page.goto('/products')

        // grab the actual product ID from the first card instead of assuming it's 0/1
        const firstProductId = await page
        .locator('a[data-product-id]')
        .first()
        .getAttribute('data-product-id')

        await productListPage.viewProduct(Number(firstProductId))

        await expect(page).toHaveURL(new RegExp(`/product_details/${firstProductId}`))
    });
});