import { test as base } from '@playwright/test'
import { RegistrationPage } from '../pages/index-page'

export const test = base.extend({
    page: async ({ browser }, use) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto(process.env.BASE_URL); // ✅ Use BASE_URL from .env
        await use(page)
        await context.close()
        await page.close()
    },

    regPage: async ({ page }, use) => {
        const regPage = new RegistrationPage(page)
        await use(regPage)
    }
})

export { expect } from '@playwright/test'

