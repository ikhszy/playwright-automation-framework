import { test, expect } from '@playwright/test';
import { productListApi } from '../models/product.model';

test('Search product', async ({ request }) => {
    const prodList = new productListApi(request)
    const res = await prodList.searchProduct('Tops')

    expect(res.status()).toBe(200)
    expect(await res.text()).toContain('src="/get_product_picture/1"')
})

test('Add to cart', async ({ request }) => {
    const prodList = new productListApi(request)
    const allProd = await prodList.getAllProducts()

    expect(allProd.status()).toBe(200)

    const html = await allProd.text()
    const firstId = html.match(/data-product-id="(\d+)"/)?.[1]

    if(!firstId) {
        throw new Error('No product id found')
    }

    const addCart = await prodList.addToCart(firstId)

    expect(addCart.status()).toBe(200)
    expect(await addCart.text()).toContain('Added To Cart')
})

test('Add to Cart with Quantity', async ({ request }) => {
    const prodList = new productListApi(request)
    const allProd = await prodList.getAllProducts()

    expect(allProd.status()).toBe(200)

    const html = await allProd.text()
    const firstId = html.match(/data-product-id="(\d+)"/)?.[1]

    if(!firstId) {
        throw new Error('No product id found')
    }

    const res = await prodList.addToCartWithQuantity(firstId, 5)
    expect(res.status()).toBe(200)
    expect(await res.text()).toContain('Added To Cart')
})