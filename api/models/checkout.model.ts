import { APIRequestContext } from '@playwright/test';

export class CheckoutApi {
    constructor(private request: APIRequestContext) {}

    async getCheckout() {
        return this.request.get('checkout', {
            headers: {
                Referer: 'https://automationexercise.com/view_cart'
            }
        })
    }
}