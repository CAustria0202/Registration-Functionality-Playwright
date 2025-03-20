import { test as base } from '../utils/fixtures'

export const test = base.extend({
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