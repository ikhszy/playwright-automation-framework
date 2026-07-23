# Feature: Signup

## Business Objective

Allow customer to register as user.

---

## Scope

### In Scope

- Signup with valid data
- Signup with invalid data
- Signup with existing data

### Out of Scope

- Forgot password
- MFA
- Session timeout

---

## Test Data
No test data, we'll be using randomizer

---

## Scenarios

### SIGNUP-001 - Successful Signup

**Priority:** High

**Given**

- User has no registered account
- User is on the Login page

**When**

- User enters a valid email
- User enters a valid password
- User clicks **Signup**
- User fill form details
- User click on **Create Account**

**Then**

- User should be signed up successfully

---

### Future Scenarios
| Code | Case | Priority | 
|-------|------|----------|
| SGN-002 | Empty Name | Low |
| SGN-003 | Empty email | Low |
| SGN-004 | Email exist | Medium |
| SGN-005 | Form - Missing account information | Low |
| SGN-006 | Form - Missing address information | Low |