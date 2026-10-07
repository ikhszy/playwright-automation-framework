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

    async addMultipleToCart(items: { productId: string; quantity: number }[]) {
        const responses = [];

        for (const item of items) {
            const res = await this.addToCartWithQuantity(item.productId, item.quantity);
            responses.push(res);
        }

        return responses;
    }

    async getProductIds(itemCount: number): Promise<string[]> {
        const res = await this.getAllProducts();
        const html = await res.text();

        const matches = [...html.matchAll(/data-product-id="(\d+)"/g)];
        const allIds = matches.map(m => m[1]);

        return allIds.slice(0, itemCount);
    }
}