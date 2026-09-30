// api/tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { SignupApi } from '../models/signup.model';
import signupData from '../../test_data/signup.json';

test('first phase signup with name and email', async ({ request }) => {
  const signupApi = new SignupApi(request);
  const resfirst = await signupApi.firstSignup(signupData.firstName, 'testing_ikhsan_1@mail.com');

  expect(resfirst.status()).toBe(200);

  const resform = await signupApi.formFill(
        resfirst,
        'mr', signupData.firstName, 'testing_ikhsan_1@mail.com',
        signupData.password, signupData.day, signupData.month, signupData.year,
        signupData.firstName, signupData.lastName, signupData.company, signupData.address, 
        '', signupData.country, signupData.state, signupData.city, signupData.zipcode, signupData.mobileNumber
    )

    console.log(await resform.text())

    expect(resform.status()).toBe(200);
});