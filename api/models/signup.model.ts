import { APIRequestContext, APIResponse } from '@playwright/test';

export class SignupApi {
  constructor(private request: APIRequestContext) {}

  private extractCsrfToken(html: string): string {
    const token = html.match(/name="csrfmiddlewaretoken" value="([^"]+)"/)?.[1];
    if (!token) throw new Error('CSRF token not found');
    return token;
  }

  private async getCsrfToken(): Promise<string> {
    const page = await this.request.get('/login');
    const html = await page.text();
    return this.extractCsrfToken(html);
  }

  async firstSignup(name: string, email: string) {
    const csrfToken = await this.getCsrfToken();

    return this.request.post('/signup', {
      headers: { Referer: 'https://automationexercise.com/login' },
      form: {
        csrfmiddlewaretoken: csrfToken,
        name,
        email,
        form_type: 'signup',
      },
    });
  }

  async formFill(
    firstSignupRes: APIResponse,   // <-- new param
    title: string, name: string, email_address: string, password: string, days: string,
    months: string, years: string, first_name: string, last_name: string, company: string,
    address1: string, address2: string, country: string, state: string, city: string,
    zipcode: string, mobile_number: string,
  ) {
    const html = await firstSignupRes.text();
    const csrfToken = this.extractCsrfToken(html); 

    return this.request.post('/signup', {
      headers: { Referer: 'https://automationexercise.com/signup' },
      form: {
        csrfmiddlewaretoken: csrfToken,
        title,
        name,
        email_address,
        password,
        days,
        months,
        years,
        first_name,
        last_name,
        company,
        address1,
        address2,
        country,
        state,
        city,
        zipcode,
        mobile_number,
        form_type: 'create_account',
      },
    });
  }
}