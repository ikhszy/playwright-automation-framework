# Feature: Login

## Business Objective

Allow registered users to securely access their account.

---

## Scope

### In Scope

- Login with valid credentials
- Login with invalid credentials
- Email validation
- Password validation

### Out of Scope

- Forgot password
- MFA
- Session timeout

---

## Test Data

| Email | Password | Expected |
|--------|----------|----------|
| ikhszy+exercise_1@gmail.com | Password123!@# | Login Success |
| ikhszy+exercise_2@gmail.com | Password123!@# | Login Failed (user does not exist) |
| ikhszy+exercise_1@gmail.com | Password123#@! | Login Failed (wrong password) |

---

## Scenarios

### LOGIN-001 - Successful Login

**Priority:** High

**Given**

- User has a registered account
- User is on the Login page

**When**

- User enters a valid email
- User enters a valid password
- User clicks **Login**

**Then**

- User should be redirected to the Home page
- Logged-in username should be displayed
- Logout option should be available

### LOGIN-002 - Email not found

**Priority:** Low

**Given**

- User has no registered account
- User is on the Login page

**When**

- User enters a invalid email
- User enters a invalid password
- User clicks **Login**

**Then**

- User should stay on login page
- user should see error message related to invalid email

### LOGIN-003 - Incorrect password

**Priority:** Low

**Given**

- User has a registered account
- User is on the Login page

**When**

- User enters a valid email
- User enters a incorrect password
- User clicks **Login**

**Then**

- User should stay on Login page
- User should see error message related to incorrect password

---

### Future Scenarios

- LOGIN-004 Empty email
- LOGIN-005 Empty password
- LOGIN-006 SQL Injection
- LOGIN-007 XSS
- LOGIN-008 Very long password