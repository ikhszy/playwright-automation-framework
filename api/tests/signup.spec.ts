// api/tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { SignupApi } from '../models/signup.model';
import signupData from '../../test_data/signup.json';

test('first phase signup with name and email', async ({ request }) => {
  const signupApi = new SignupApi(request);
  const uniqueEmail = `testing_ikhsan_${Date.now()}@mail.com`;
  const resfirst = await signupApi.firstSignup(signupData.firstName, uniqueEmail);

  expect(resfirst.status()).toBe(200);

  const resform = await signupApi.formFill(
        resfirst,
        'mr', signupData.firstName, uniqueEmail,
        signupData.password, signupData.day, signupData.month, signupData.year,
        signupData.firstName, signupData.lastName, signupData.company, signupData.address, 
        '', signupData.country, signupData.state, signupData.city, signupData.zipcode, signupData.mobileNumber
    )

    expect(resform.status()).toBe(200);
});