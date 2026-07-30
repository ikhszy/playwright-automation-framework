import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class CommonHeader extends BasePage {
    readonly home;
    readonly products;
    readonly cart;
    readonly login;
    readonly logout;

    readonly loginHeader;

    constructor(page: Page) {
        super(page)
        this.home = page.locator('a', {hasText: ' Home'});
        this.products = page.locator('a', {hasText: ' Products'});
        this.cart = page.locator('a', {hasText: ' Cart'});
        this.login = page.locator('a', {hasText: ' Signup / Login'});
        this.logout = page.locator('a', {hasText: ' Logout'});

        // verify object
        this.loginHeader = this.page.locator('h2', {hasText: 'Login to your account'})
    }

    async gotoLogin() {
        await expect(this.login).toBeVisible();

        await this.login.click();

        await expect(this.loginHeader).toBeVisible();
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