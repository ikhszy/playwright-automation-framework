## 3RD DAY Works

# Change how the Branch works
Instead of directly pulling and pushing to main branch, I'm going to setup different branch for each day, with naming following this guideline:

**"[type]/[details on what changes]"**

the following are list of types:
- feat: new feature
- refactor: refactoring existing codes
- docs: anything related to documentation
- fix: if any bug fixed

# Change daily workflow
1. Pull latest from main branch
2. Create new branch
3. Analyze what's need to be done
4. Implement
5. Multiple small commits
6. Push branch
7. Code Review (by Kiro)
8. Merge into Main

# Today's plan
1. Analyzing which cases to be part of which testing type [DONE]
2. Introduce minimal basePage [DONE]
3. Continue on phase 1:
  - LGN-002 (Invalid email)
  - LGN-003 (Incorrect password)
4. Wrapping up:
  - Commits and push
  - Code review by Kiro
  - Open PR and merge to main branch

# Analyzing which cases to be part of which testing type
Login
| Code | Case | Smoke test (y/n) | Regression (y/n) | Functional (y/n) | E2E (y/n) |  
|-------|------|----------|
| LGN-001 | Successful Login | y | y | y | y |
| LGN-002 | Email not found | n | n | y | n |
| LGN-003 | Incorrect password | n | n | y | n |
| LGN-004 | Empty email | n | n | y | n |
| LGN-005 | Empty password | n | n | y | n |

Signup
| Code | Case | Smoke test (y/n) | Regression (y/n) | Functional (y/n) | E2E (y/n) |  
|-------|------|----------|
| SGN-001 | Successful Signup | y | y | y | y |
| SGN-002 | Empty Name | n | n | y | n |
| SGN-003 | Empty email | n | y | y | n |
| SGN-004 | Email exist | n | n | y | n |
| SGN-005 | Form - Missing account information | n | n | y | n |
| SGN-006 | Form - Missing address information | n | n | y | n |

Logout
| Code | Case | Smoke test (y/n) | Regression (y/n) | Functional (y/n) | E2E (y/n) |  
|-------|------|----------|
| LGO-001 | Successful logout | y | y | y | y |

Delete account
| Code | Case | Smoke test (y/n) | Regression (y/n) | Functional (y/n) | E2E (y/n) |  
|-------|------|----------|
| DEL-001 | Successful account deletion | y | y | y | y |

Products
| Code | Case | Smoke test (y/n) | Regression (y/n) | Functional (y/n) | E2E (y/n) |  
|-------|------|----------|
| PRD-001 | Open product details | y | y | y | y |
| PRD-002 | Add product to Cart | y | y | y | y |
| PRD-003 | Write Review | n | y | y | n |
| PRD-004 | Search Product | y | y | y | n |
| PRD-005 | Change category | n | n | y | n |
| PRD-006 | Change brands | n | n | y | n |

Cart
| Code | Case | Smoke test (y/n) | Regression (y/n) | Functional (y/n) | E2E (y/n) |  
|-------|------|----------|
| CRT-001 | Checkout | y | y | y | y |
| CRT-002 | Change quantity | y | y | y | y |
| CRT-003 | Delete item | y | y | y | y |

Checkout
| Code | Case | Smoke test (y/n) | Regression (y/n) | Functional (y/n) | E2E (y/n) |  
|-------|------|----------|
| CHK-001 | Place order with comment | y | y | y | y |
| CHK-002 | Place order without comment | n | n | y | n |
| CHK-003 | Cancel order | n | n | y | n |

