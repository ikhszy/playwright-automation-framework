// api/tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginApi } from '../models/login.model';
import loginData from '../../test_data/login.json'

test('login with valid credentials', async ({ request }) => {
  const loginApi = new LoginApi(request);
  const res = await loginApi.login(loginData.email, loginData.password);

  expect(res.status()).toBe(302);
  expect(res.headers()['location']).toBe('/');
});

test('login with wrong password', async ({ request }) => {
  const loginApi = new LoginApi(request);
  const res = await loginApi.login('ikhszy+exercise_1@gmail.com', 'wrongpass');

  expect(res.status()).toBe(200);
});