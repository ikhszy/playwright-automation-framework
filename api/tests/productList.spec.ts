import { test, expect } from '@playwright/test';
import { productListApi } from '../models/productList.model';

test('Search product', async ({ request }) => {
    const prodList = new productListApi(request)
    const res = await prodList.searchProduct('Tops')

    expect(res.status()).toBe(200)
    expect(await res.text()).toContain('src="/get_product_picture/1"')
})