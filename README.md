# Registration Functionality Test with Playwright

This project tests the registration functionality of a web application using **Playwright** and the **Page Object Model (POM)** design pattern.

## 🌟 Features

- ✅ Developed using Playwright
- ✅ Implements Page Object Model (POM) for better scalability and maintainability
- ✅ Uses fixtures to manage test state and dependencies
- ✅ Includes validation for positive and negative test cases
- ✅ Handles error messaging and edge cases

## 🛠️ Test Scenarios

- ✅ **Successful Registration**
- 🚫 **Invalid Email with Valid Mobile Number**
- 🚫 **Valid Email with Invalid Mobile Number**
- 🚫 **Empty Email and Mobile Number**
- 🚫 **Special Characters in Email and Mobile Number**
- 🚫 **Empty Business Information**
- 🚫 **Special Characters in Business Name**
- 🚫 **Missing Agreement to Terms and Privacy Policy**

## 🧪 Test Framework

- **Playwright** – Browser automation framework
- **JavaScript** – Test scripting language
- **GitHub Actions** – CI/CD integration

## 🚀 Installation & Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (latest LTS version)
- **npm** (included with Node.js)
- **Git** (for version control)

### Installation Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   cd YOUR_REPOSITORY
   ```

2. **Install Dependencies**

   ```sh
   npm install -D @playwright/test
   ```

3. **Install Playwright Browsers**

   ```sh
   npx playwright install --with-deps
   ```

4. **Run Tests**

   ```sh
   npx playwright test
   ```

5. **Generate Allure Report (Optional)**

   ```sh
   npx playwright test --reporter=allure-playwright
   allure generate allure-results --clean -o allure-report
   ```

6. **View Allure Report**

   ```sh
   allure serve allure-results
   ```

## 🤖 Running Tests in CI/CD (GitHub Actions)

This project includes **GitHub Actions** workflow to run Playwright tests automatically.

1. Push your code to GitHub.
2. Navigate to **Actions** tab in your repository.
3. Select the latest workflow run to view test results.
