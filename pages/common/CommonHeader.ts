import { expect, type Locator, type Page } from '@playwright/test';

export class CommonHeader {
    readonly home;
    readonly products;
    readonly cart;
    readonly login;
    readonly logout;

    constructor(private readonly page: Page) {
        this.home = page.locator('a', {hasText: ' Home'});
        this.products = page.locator('a', {hasText: ' Products'});
        this.cart = page.locator('a', {hasText: ' Cart'});
        this.login = page.locator('a', {hasText: ' Signup / Login'});
        this.logout = page.locator('a', {hasText: ' Logout'});
    }

    async gotoLogin() {
        await expect(this.login).toBeVisible();

        await this.login.click();
    }

    async gotoHome() {
        await expect(this.home).toBeVisible();

        await this.home.click();
    }

    async gotoProduct() {
        await expect(this.products).toBeVisible();

        await this.products.click();
    }

    async gotoCart() {
        await expect(this.cart).toBeVisible();

        await this.cart.click();
    }
}