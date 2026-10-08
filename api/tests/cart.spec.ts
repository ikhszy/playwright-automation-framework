import { test, expect } from '@playwright/test';
import { LoginApi } from '../models/login.model'
import { productListApi } from '../models/product.model';
import { CartApi } from '../models/cart.model';
import { CheckoutApi } from '../models/checkout.model'
import loginData from '../../test_data/login.json'

test('Remove item', async ({ request }) => {
    const prodList = new productListApi(request)
    const cartApi = new CartApi(request)
    
    // add multiple items to cart
    const results = await prodList.addMultipleToCart([
        { productId: '1', quantity: 2 },
        { productId: '3', quantity: 1 },
        { productId: '5', quantity: 4 },
    ]);
    for (const res of results) {
        expect(res.status()).toBe(200);
    }

    // remove item with productId 1
    const cartResult = await cartApi.removeFromCart('1')
    expect(cartResult.status()).toBe(200)

    // verify item removed
    const getCart = await cartApi.getCarts()
    expect(await getCart.text()).not.toContain('id="product-1"')
})

test('checkout items', async ({ request }) => {
        const loginApi = new LoginApi(request)
        const prodList = new productListApi(request)
        const cartApi = new CartApi(request)
        const checkoutApi = new CheckoutApi(request)

        // login first
        const loginResult = await loginApi.login(loginData.email, loginData.password)
        expect(loginResult.status()).toBe(302)

        const productIds = await prodList.getProductIds(3);
        const itemsToAdd = productIds.map(id => ({ productId: id, quantity: 2 }));
        
        // add multiple items to cart
        const results = await prodList.addMultipleToCart(itemsToAdd)
        for (const res of results) {
            expect(res.status()).toBe(200)
        }

        // checkout the items
        const checkoutResult = await checkoutApi.getCheckout()
        expect(checkoutResult.status()).toBe(200)

        // verify item added
        for (const item of itemsToAdd) {
            expect(await checkoutResult.text()).toContain(`id="product-${item.productId}"`);
    }
})