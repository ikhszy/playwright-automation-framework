# Playwright Automation Framework

A scalable end-to-end test automation framework built with Playwright and TypeScript for web UI and API testing.

This project demonstrates modern automation engineering practices including Page Object Model (POM), reusable fixtures, data-driven testing, API validation, network interception, cross-browser execution, and CI/CD integration.

The framework is designed with maintainability, readability, and scalability in mind, following patterns commonly adopted in enterprise QA teams.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- HTML Report
- Trace Viewer

---

## Project Structure

```
.
├── data
├── fixtures
├── helpers
├── pages
├── tests
│   ├── api
│   ├── integration
│   └── ui
├── utils
├── playwright.config.ts
└── README.md
```

---

## Features

- UI automation
- API testing
- End-to-end workflow validation
- Page Object Model (POM)
- Data-driven testing
- Custom fixtures
- Cross-browser execution
- Retry strategy
- HTML reporting
- Trace Viewer
- Screenshot and video capture
- CI/CD pipeline
- Parallel execution

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### Run UI tests

```bash
npx playwright test tests/ui
```

### Run API tests

```bash
npx playwright test tests/api
```

### Run integration tests

```bash
npx playwright test tests/integration
```

### Open HTML report

```bash
npx playwright show-report
```

---

## Reporting

The framework generates:

- HTML Report
- Trace Viewer
- Screenshots on failure
- Video recordings on failure

---

## Continuous Integration

GitHub Actions executes the test suite automatically for every push and pull request.

---

## Future Enhancements

- Accessibility testing
- Visual regression testing
- Docker support
- Performance smoke tests
- Multi-environment execution