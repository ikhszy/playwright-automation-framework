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

    async getAllProducts() {
        return this.request.get('/products', {
            headers: {
                Referer: 'https://automationexercise.com/view_cart'
            }
        })
    }

    async addToCart(productId: string) {
        return this.request.get(`/add_to_cart/${productId}`, {
            headers: {
                Referer: 'https://automationexercise.com/products'
            }
        })
    }

    async addToCartWithQuantity(productId: string, quantity: number) {
        return this.request.get(`/add_to_cart/${productId}`, {
            params: {
                quantity: quantity
            },
            headers: {
                Referer: `https://automationexercise.com/product_details/${productId}`
            }
        })
    }
}