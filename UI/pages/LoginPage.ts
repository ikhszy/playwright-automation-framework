import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly loginEmailInput;
    readonly loginPasswordInput;
    readonly loginSubmitButton;

    constructor(page: Page) {
        super(page);
        this.loginEmailInput = this.page.locator('[data-qa="login-email"]')
        this.loginPasswordInput = this.page.locator('[data-qa="login-password"]')
        this.loginSubmitButton = this.page.locator('[data-qa="login-button"]')
    }

    async loginSubmit(email: string, pass: string) {
        // input the form
        await this.loginEmailInput.fill(email)
        await this.loginPasswordInput.fill(pass)

        // click on submit button
        await expect(this.loginSubmitButton).toBeVisible()
        await this.loginSubmitButton.click()
    }
}