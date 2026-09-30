import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductListPage extends BasePage {
    // Category
    readonly categoryWomen;
    readonly categoryMen;
    readonly categoryKids;

    // Sub category
    readonly womenDress;
    readonly womenTops;
    readonly womenSaree;

    readonly menTshirts;
    readonly menJeans;

    readonly kidsDress;
    readonly kidsTops;

    // search
    readonly searchBox;
    readonly searchButton;

    // notification
    readonly successButton
    readonly successCart

    constructor(page: Page) {
        super(page);
        this.categoryWomen = this.page.locator('a[href="#Women"]')
        this.categoryMen = this.page.locator('a[href="#Men"]')
        this.categoryKids = this.page.locator('a[href="#Kids"]')

        this.womenDress = this.page.locator('#Women a', { hasText: 'Dress ' })
        this.womenTops = this.page.locator('#Women a', { hasText: 'Tops ' })
        this.womenSaree = this.page.locator('#Women a', { hasText: 'Saree ' })

        this.menTshirts = this.page.locator('#Men a', { hasText: 'Tshirts ' })
        this.menJeans = this.page.locator('#Men a', { hasText: 'Jeans ' })

        this.kidsDress = this.page.locator('#Kids a', { hasText: 'Dress' })
        this.kidsTops = this.page.locator('#Kids a', { hasText: 'Tops & Shirts' })

        this.searchBox = this.page.locator('#search_product')
        this.searchButton = this.page.locator('#submit_search')

        this.successButton = this.page.locator('button[class="btn btn-success close-modal btn-block"]')
        this.successCart = this.page.locator('u', { hasText: 'View Cart' })
    }

    async searchProduct(searchText: string) {
        // input text and press enter
        await expect(this.searchBox).toBeVisible()
        await this.searchBox.fill(searchText)
        await this.searchButton.click()
    }

    async addToCart(index: number) {
        const productImage = this.page.locator('.productinfo').nth(index)
        await expect(productImage).toBeVisible()

        await productImage.hover()
        await productImage.locator('a[data-product-id]').first().click()

        await expect(this.successButton).toBeVisible()
        console.log('successfully add item to cart')
    }

    async viewProduct(index: number) {
        const productIndex = this.page.locator('a[href="/product_details/' + index + '"]')
        await expect(productIndex).toBeVisible()

        await productIndex.click()
    }

    async dismissSuccessDialog() {
        await expect(this.successButton).toBeVisible()
        await this.successButton.click()
        console.log('dialog dismissed')
    }
}