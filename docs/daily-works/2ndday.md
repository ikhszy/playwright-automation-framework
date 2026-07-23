## 2nd day analysis

# What to do
1. Analyze feature and break it down per category
2. Check possible cases, for both positive and negative
3. Classify each cases to put into different category (Functional, Regression, Smoke, E2E, Automate/not)
4. Proritize which cases to do

# Categories breakdown
- Functional --> The entire individual feature
- Regression --> To ensure existing behavior still works
- Smoke --> Quick check after deployment
- E2E --> End-to-End, ensuring business workflows works

# Feature Inventory
Authentication:
- Login
- Signup
- Logout
- Delete account

Products:
- View all products
- Product details
- Search
- Category filter
- Brand filter

Cart:
- Add item to cart
- Remove item from cart
- Quantity update

Checkout:
- Address verify
- Payment
- Order confirmation

# Breaking down cases for Authentication
Login
| Code | Case | Priority | 
|-------|------|----------|
| LGN-001 | Successful Login | High |
| LGN-002 | Email not found | Low |
| LGN-003 | Incorrect password | Low |
| LGN-004 | Empty email | Low |
| LGN-005 | Empty password | Low |
| LGN-006 | SQL Injection | Medium |
| LGN-007 | XSS | Medium |

Signup
| Code | Case | Priority | 
|-------|------|----------|
| SGN-001 | Successful Signup | High |
| SGN-002 | Empty Name | Low |
| SGN-003 | Empty email | Low |
| SGN-004 | Email exist | Medium |
| SGN-005 | Form - Missing account information | Low |
| SGN-006 | Form - Missing address information | Low |

Logout
| Code | Case | Priority | 
|-------|------|----------|
| LGO-001 | Successful logout | High |
| LGO-002 | Already logout on different tab | Low |

Delete account
| Code | Case | Priority | 
|-------|------|----------|
| DEL-001 | Successful account deletion | High |
| DEL-002 | Already logout on different tab | Low |

# Products
| Code | Case | Priority | 
|-------|------|----------|
| PRD-001 | Open product details | High |
| PRD-002 | Add product to Cart | High |
| PRD-003 | Write Review | Low |
| PRD-004 | Search Product | High | 
| PRD-005 | Change category | Medium |
| PRD-006 | Change brands | Medium |

# Cart
| Code | Case | Priority | 
|-------|------|----------|
| CRT-001 | Checkout | High |
| CRT-002 | Change quantity | High |
| CRT-003 | Delete item | Medium |

# Checkout
| Code | Case | Priority | 
|-------|------|----------|
| CHK-001 | Place order with comment | High |
| CHK-002 | Place order without comment | High |
| CHK-003 | Cancel order | medium