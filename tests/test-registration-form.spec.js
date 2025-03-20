// import { test, expect } from '../utils/fixtures'
import { test, expect } from '../utils/registration-fixture'
import { websiteLocators } from '../data/locators'


test('Navigate to Homepage', async ({ page }) => {
    await expect.soft(page).toHaveTitle('Registeration')
})

test('Successful Registration', async ({ fillFormAndSubmit }) => {
    await expect(fillFormAndSubmit.locator('h1')).toHaveText('Your Registration is Successful!')
})

test('Valid Email Invalid Number', async ({ regPage }) => {
    await regPage.submit_form('John', 'Doe', 'valid_user@example.com', '+6390881755556', 'Juan Luna Business', 'Retail', 'Kalayaan St.', 'Pampanga', 'San Fernando', '2307', true)
    await regPage.mobile_error_message('Enter a valid 11-digit mobile number starting with 09')
})

test('Invalid Email Valid Number', async ({ regPage}) => {
    await regPage.submit_form('John', 'Doe', 'invalid_user@example', '09088175555', 'Juan Luna Business', 'Retail', 'Kalayaan St.', 'Pampanga', 'San Fernando', '2307', true)
    await regPage.email_error_message('Enter a valid email address (e.g., user@example.com)')
})

test('Empty Email and Empty Number', async ({regPage}) => {
    await regPage.submit_form('John', 'Doe', '', '', 'Juan Luna Business', 'Retail', 'Kalayaan St.', 'Pampanga', 'San Fernando', '2307', true)
    await regPage.email_error_message('Please input your email address')
    await regPage.mobile_error_message('Please input your mobile number')
})

test('Test Special Characters on Email and Number', async ({regPage}) => {
    await regPage.submit_form('John', 'Doe', '!@#user@#$%^', '!@#user@#$%^', 'Juan Luna Business', 'Retail', 'Kalayaan St.', 'Pampanga', 'San Fernando', '2307', true)
    await regPage.email_error_message('Enter a valid email address (e.g., user@example.com)')
    await regPage.mobile_error_message('Enter a valid 11-digit mobile number starting with 09')
})

test('Test Empty Inputs on Business Information Form', async ({regPage}) => {
    await regPage.submit_form('John', 'Doe', 'valid_user@example.com', '09088175555', '', 'Please Select', '', '', '', '', true)
    await regPage.business_error_message('Please input your business name')
    await regPage.industry_error_message('Select an industry type')
    await regPage.address_error_message('Enter your address')
    await regPage.province_error_message('Enter your province')
    await regPage.city_error_message('Enter your city/municipality')
    await regPage.zip_error_message('Enter a valid 4-5 digit zip code')
})

test('Test Special Characters on Business Name', async ({regPage})=> {
    await regPage.submit_form('John', 'Doe', 'valid_user@example.com', '09088175555', 'Juan Lun@ Business!', 'Retail', 'Kalayaan St.', 'Pampanga', 'San Fernando', '2307', true)
    await regPage.business_error_message('Business name can only contain letters, numbers, spaces, and the symbols (.-,&)')

})

test('Test Submit by not Clicking the Checkboxes', async ({ regPage}) => {
    await regPage.submit_form('John', 'Doe', 'valid_user@example.com', '09088175555', 'Juan Luna Business', 'Retail', 'Kalayaan St.', 'Pampanga', 'San Fernando', '2307', false)
    await regPage.privacy_error_message('You must agree to the Privacy Policy')
    await regPage.terms_error_message('You must agree to the Terms and Conditions')
})