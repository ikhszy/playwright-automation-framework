import { type Page, type Locator, expect } from "@playwright/test";
import signup from '../test_data/signup.json';
import { BasePage } from "./BasePage";

export class SignupPage extends BasePage {

    // on login page
    readonly newName;
    readonly newEmail;
    readonly newSignupButton;
    
    // form on account information
    readonly titleMr;
    readonly titleMrs;
    readonly formName;
    readonly formEmail;
    readonly formPassword;
    readonly formSelectDay;
    readonly formSelectMonth;
    readonly formSelectYear;
    readonly formCheckNewsletter;
    readonly formCheckSpecialoffer;

    // form on address information
    readonly formFirstname;
    readonly formLastname;
    readonly formCompany;
    readonly formAddress1;
    readonly formAddress2;
    readonly formSelectCountry;
    readonly formState;
    readonly formCity;
    readonly formZipcode;
    readonly formMobilenumber;
    readonly formCreateButton;

    constructor(page: Page) {
        super(page);
        this.newName = this.page.locator('[data-qa="signup-name"]')
        this.newEmail = this.page.locator('[data-qa="signup-email"]')
        this.newSignupButton = this.page.locator('[data-qa="signup-button"]')

        this.titleMr = this.page.locator('#id_gender1')
        this.titleMrs = this.page.locator('#id_gender2')
        this.formName = this.page.locator('[data-qa="name"]')
        this.formEmail = this.page.locator('#email')
        this.formPassword = this.page.locator('#password')
        this.formSelectDay = this.page.locator('#days')
        this.formSelectMonth = this.page.locator('#months')
        this.formSelectYear = this.page.locator('#years')
        this.formCheckNewsletter = this.page.locator('#newsletter')
        this.formCheckSpecialoffer = this.page.locator('#optin')

        this.formFirstname = this.page.locator('#first_name')
        this.formLastname = this.page.locator('#last_name')
        this.formCompany = this.page.locator('#company')
        this.formAddress1 = this.page.locator('#address1')
        this.formAddress2 = this.page.locator('#address2')
        this.formSelectCountry = this.page.locator('#country')
        this.formState = this.page.locator('#state')
        this.formCity = this.page.locator('#city')
        this.formZipcode = this.page.locator('#zipcode')
        this.formMobilenumber = this.page.locator('#mobile_number')
        this.formCreateButton = this.page.locator('[data-qa="create-account"]')
    }

    async loginSignup(name: string, email: string) {

        // check if the inputs available
        await expect(this.newName).toBeVisible()
        await expect(this.newEmail).toBeVisible()

        // fill and click
        await this.newName.fill(name)
        await this.newEmail.fill(email)
        await this.newSignupButton.click()
        console.log('Fill and click successful')

        // verify if we go to the right destination 
        await expect(this.formName).toHaveAttribute('value', name)
        await expect(this.formEmail).toHaveAttribute('value', email)
        console.log('successfully enter the form page')
    }

    async formSignup() {
        // check if should use Mr or Mrs
        if(signup.gender.toLowerCase() === 'male') {
            await this.titleMr.click()
        } else {
            await this.titleMrs.click()
        }

        await this.formPassword.fill(signup.password)
        await this.formSelectDay.selectOption(signup.day)
        await this.formSelectMonth.selectOption(signup.month)
        await this.formSelectYear.selectOption(signup.year)
        console.log('Account Information filled!')

        await this.formFirstname.fill(signup.firstName)
        await this.formLastname.fill(signup.lastName)
        await this.formCompany.fill(signup.company)
        await this.formAddress1.fill(signup.address)
        await this.formSelectCountry.selectOption(signup.country)
        await this.formState.fill(signup.state)
        await this.formCity.fill(signup.city)
        await this.formZipcode.fill(signup.zipcode)
        await this.formMobilenumber.fill(signup.mobileNumber)
        console.log('Address Information filled!')

        await this.formCreateButton.click()
    }
}