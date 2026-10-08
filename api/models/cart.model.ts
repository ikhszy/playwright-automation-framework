import { APIRequestContext } from '@playwright/test';

export class CartApi {
    constructor(private request: APIRequestContext) {}

    async getCarts() {
        return this.request.get('view_cart', {
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

    async removeFromCart(productId: string) {
        return this.request.get(`/delete_cart/${productId}`, {
            headers: {
                Referer: 'https://automationexercise.com/view_cart'
            }
        })
    }
}