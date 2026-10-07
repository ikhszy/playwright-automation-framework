import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPage extends BasePage {
    // product details
    readonly productTitle
    readonly productPrice
    readonly productQuantity
    readonly productImage
    readonly addCartButton

    // review section
    readonly reviewName
    readonly reviewEmail
    readonly reviewInput
    readonly reviewSubmitButton

    // success notification
    readonly notificationSuccessButton
    readonly notificationViewCart
    

    constructor(page: Page) {
        super(page);

        // product details
        this.productTitle = this.page.locator('div[class="product-information"] h2')
        this.productPrice = this.page.locator('div[class="product-information"] span span')
        this.productQuantity = this.page.locator('#quantity')
        this.productImage = this.page.locator('div[class="view-product"] img')
        this.addCartButton = this.page.locator('button[class="btn btn-default cart"]')

        // review section
        this.reviewName = this.page.locator('#name')
        this.reviewEmail = this.page.locator('#email')
        this.reviewInput = this.page.locator('#review')
        this.reviewSubmitButton = this.page.locator('#button-review')

        // success notification
        this.notificationSuccessButton = this.page.locator('button[class="btn btn-success close-modal btn-block"]')
        this.notificationViewCart = this.page.locator('a[href="/view_cart"]').last()
    }

    async addProductToCart(quantity: string): Promise<string> {
        await expect(this.productTitle).toBeVisible()
        await expect(this.productImage).toBeVisible()
        await expect(this.productQuantity).toBeVisible()
        await expect(this.productPrice).toBeVisible()

        const title = await this.productTitle.textContent();
        const priceText = await this.productPrice.textContent();

        console.log('item name: ' + title + ' valued at: ' + priceText)

        await this.productQuantity.fill(quantity)
        await this.addCartButton.click()

        await expect(this.notificationSuccessButton).toBeVisible()

        console.log('Successfully add item to cart')

        // count the total of the price vs quantity
        const unitPrice = Number(priceText?.replace(/[^0-9.]/g, ''));
        const total = unitPrice * Number(quantity);
        const formattedTotal = `Rs. ${total}`;

        return formattedTotal;
    }

    async addProductOnly(quantity: string) {
        await expect(this.productTitle).toBeVisible()
        await expect(this.productImage).toBeVisible()
        await expect(this.productQuantity).toBeVisible()
        await expect(this.productPrice).toBeVisible()

        const title = await this.productTitle.textContent();
        const priceText = await this.productPrice.textContent();

        console.log('item name: ' + title + ' valued at: ' + priceText)

        await this.productQuantity.fill(quantity)
        await this.addCartButton.click()

        await expect(this.notificationSuccessButton).toBeVisible()

        console.log('Successfully add item to cart')
    }
}