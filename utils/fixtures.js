import { test as base } from '@playwright/test'
import { RegistrationPage } from '../pages/index-page'

export const test = base.extend({
    page: async ({ page }, use) => {
        // const context = await browser.newContext() //Removed since Playwright already provides a fresh page per test by default.
        // const page = await context.newPage()
        await page.goto(process.env.BASE_URL); // ✅ Use BASE_URL from .env
        await use(page)
        // await context.close()
        // await page.close()
    },

    regPage: async ({ page }, use) => {
        const regPage = new RegistrationPage(page)
        await use(regPage)
    },

    fillFormAndSubmit: async ({ regPage }, use) => {
        await regPage.submit_form(
            'John',
            'Doe',
            'valid_user@example.com',
            '09088175555',
            'Juan Luna Business',
            'Retail',
            'Kalayaan St.',
            'Pampanga',
            'San Fernando',
            '2307',
            true
        )

        // Pass the updated page reference to the test context
        await use(regPage.page)
    }
})

export { expect } from '@playwright/test'

