import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly loginHeader;
    readonly loginEmailInput;
    readonly loginPasswordInput;
    readonly loginSubmitButton;

    constructor(page: Page) {
        super(page);
        this.loginHeader = this.page.locator('h2', {hasText: 'Login to your account'})
        this.loginEmailInput = this.page.locator('[data-qa="login-email"]')
        this.loginPasswordInput = this.page.locator('[data-qa="login-password"]')
        this.loginSubmitButton = this.page.locator('[data-qa="login-button"]')
    }

    async loginSubmit(email: string, pass: string) {
        await expect(this.loginHeader).toBeVisible()

        await this.loginEmailInput.fill(email)
        await this.loginPasswordInput.fill(pass)

        await expect(this.loginSubmitButton).toBeVisible()
        await this.loginSubmitButton.click()
    }
}