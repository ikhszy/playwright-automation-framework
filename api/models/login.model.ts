import { APIRequestContext } from '@playwright/test';

export class LoginApi {
  constructor(private request: APIRequestContext) {}

  private async getCsrfToken(): Promise<string> {
    const page = await this.request.get('/login');
    const html = await page.text();
    const token = html.match(/name="csrfmiddlewaretoken" value="([^"]+)"/)?.[1];

    console.log('token found: ' + token)

    if (!token) throw new Error('CSRF token not found on login page');
    return token;
  }

  async login(email: string, password: string) {
    const csrfToken = await this.getCsrfToken();

    return this.request.post('/login', {
      headers: {
        Referer: 'https://automationexercise.com/login',
      },
      form: {
        csrfmiddlewaretoken: csrfToken,
        email,
        password,
      },
      maxRedirects: 0,
    });
  }
}