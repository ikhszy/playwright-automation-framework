import { APIRequestContext } from '@playwright/test';

export class productListApi {
    constructor(private request: APIRequestContext) {}

    async searchProduct(searchText: string) {
        return this.request.get('/products', {
            params: {
                search: searchText,
            },
            headers: {
                Referer: 'https://automationexercise.com/products'
            },
            maxRedirects: 0
        })
    }
}