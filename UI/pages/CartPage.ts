import { type Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    readonly checkoutBtn

    readonly cartImage
    readonly cartTitle
    readonly cartPrice
    readonly cartQuantity
    readonly cartSumPrice
    readonly cartDeleteBtn

    constructor(page: Page) {
        super(page)

        this.checkoutBtn = this.page.locator('a[class="btn btn-default check_out"]')

        this.cartImage = this.page.locator('img[class="product_image"]')
        this.cartTitle = this.page.locator('td[class="cart_description"] a')
        this.cartPrice = this.page.locator('td[class="cart_price"] p')
        this.cartQuantity = this.page.locator('td[class="cart_quantity"] button')
        this.cartSumPrice = this.page.locator('p[class="cart_total_price"]')
        this.cartDeleteBtn = this.page.locator('a[class="cart_quantity_delete"]')
    }

    async verifyCart(itemCount: number) {
        await expect(this.page).toHaveURL('/view_cart')
        await expect(this.cartImage).toHaveCount(itemCount)
        console.log('total items: ' + itemCount)
    }

    async verifyItemPrices(itemCount: number) {
        for(let i = 0; i < itemCount; i++) {
            const perPrice: string = await this.cartPrice.nth(i).textContent() ?? ''
            const totalPrice: string = await this.cartSumPrice.nth(i).textContent() ?? ''
            const perQty: string = await this.cartQuantity.nth(i).textContent() ?? ''
            
            expect(parseInt(perPrice.replace(/[^\d]/g, '')) * parseInt(perQty))
            .toEqual(parseInt(totalPrice.replace(/[^\d]/g, '')))

            console.log('total price ' + totalPrice + ' is correct for item number ' + (i + 1))
            }
    }

    async removeItem(itemLocation: number) {
        await expect(this.cartDeleteBtn.nth(itemLocation)).toBeVisible()
        await this.cartDeleteBtn.nth(itemLocation).click()

        console.log('successfully removed item number ' + (itemLocation + 1))
    }

    async checkoutItem() {
        await expect(this.checkoutBtn).toBeVisible()
        await this.checkoutBtn.click()

        await expect(this.page).toHaveURL('/checkout')
        console.log('Successfully checkout the item')
    }
}