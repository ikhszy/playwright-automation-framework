import { type Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {

    // delivery address objects
    readonly deliveryName
    readonly deliveryAddress1
    readonly deliveryAddress2
    readonly deliveryCityStateZip
    readonly deliveryNation
    readonly deliveryPhone

    // Billing address objects
    readonly billingName
    readonly billingAddress1
    readonly billingAddress2
    readonly billingCityStateZip
    readonly billingNation
    readonly billingPhone

    // Product objects
    readonly productImage
    readonly productTitle
    readonly productPrice
    readonly productQty
    readonly productTotal
    readonly totalPrice

    // comment submit objects
    readonly commentText
    readonly orderBtn

    constructor(page: Page) {
        super(page)
        
        // delivery address objects locators
        this.deliveryName = this.page.locator('ul[id="address_delivery"] li[class="address_firstname address_lastname"]')
        this.deliveryAddress1 = this.page.locator('ul[id="address_delivery"] li[class="address_address1 address_address2"]').nth(1)
        this.deliveryAddress2 = this.page.locator('ul[id="address_delivery"] li[class="address_address1 address_address2"]').last()
        this.deliveryCityStateZip = this.page.locator('ul[id="address_delivery"] li[class="address_city address_state_name address_postcode"]')
        this.deliveryNation = this.page.locator('ul[id="address_delivery"] li[class="address_country_name"]')
        this.deliveryPhone = this.page.locator('ul[id="address_delivery"] li[class="address_phone"]')

        // billing address objects locators
        this.billingName = this.page.locator('ul[id="address_invoice"] li[class="address_firstname address_lastname"]')
        this.billingAddress1 = this.page.locator('ul[id="address_invoice"] li[class="address_address1 address_address2"]').nth(2)
        this.billingAddress2 = this.page.locator('ul[id="address_invoice"] li[class="address_address1 address_address2"]').last()
        this.billingCityStateZip = this.page.locator('ul[id="address_invoice"] li[class="address_city address_state_name address_postcode"]')
        this.billingNation = this.page.locator('ul[id="address_invoice"] li[class="address_country_name"]')
        this.billingPhone = this.page.locator('ul[id="address_invoice"] li[class="address_phone"]')

        // product objects locators
        this.productImage = this.page.locator('td[class="cart_product"] img')
        this.productTitle = this.page.locator('td[class="cart_description"] a')
        this.productPrice = this.page.locator('td[class="cart_price"] p')
        this.productQty = this.page.locator('td[class="cart_quantity"] button')
        this.productTotal = this.page.locator('p[class="cart_total_price"]')
        this.totalPrice = this.page.locator('p[class="cart_total_price"]').last()

        // Comment submit objects locators
        this.commentText = this.page.locator('textarea[name="message"]')
        this.orderBtn = this.page.locator('a[class="btn btn-default check_out"]')
    }

    async verifyCheckoutPage() {
        await expect(this.page.url()).toContain('/checkout')
        await expect(this.deliveryName).toBeVisible()
        await expect(this.billingName).toBeVisible()
        await expect(this.productImage.first()).toBeVisible()
        await expect(this.orderBtn).toBeVisible()

        console.log('Successfully entered the Checkout page')
    }

    async commentAndOrder(comment: string) {
        await expect(this.commentText).toBeVisible()
        await this.commentText.fill(comment)
        await this.orderBtn.click()

        await expect(this.page.url()).toContain('/payment')
        console.log('Successfully comment and order')
    }

    async orderNoComment() {
        await this.orderBtn.click()

        await expect(this.page.url()).toContain('/payment')
        console.log('Successfully comment and order')
    }

    async verifyItemPrices(itemCount: number) {
        let sumtotal: number = 0
        for(let i = 0; i < itemCount; i++) {
            const perPrice: string = await this.productPrice.nth(i).textContent() ?? ''
            const itemTotal: string = await this.productTotal.nth(i).textContent() ?? ''
            const perQty: string = await this.productQty.nth(i).textContent() ?? ''
            
            expect(parseInt(perPrice.replace(/[^\d]/g, '')) * parseInt(perQty))
            .toEqual(parseInt(itemTotal.replace(/[^\d]/g, '')))

            console.log('total price ' + itemTotal + ' is correct for item number ' + (i + 1))
            sumtotal += parseInt(perPrice.replace(/[^\d]/g, '')) * parseInt(perQty)
        }
        const totalPrice: string = await this.totalPrice.textContent() ?? ''
        expect(parseInt(totalPrice.replace(/[^\d]/g, ''))).toEqual(sumtotal)
    }
}