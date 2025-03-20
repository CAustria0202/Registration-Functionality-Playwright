import { expect } from '@playwright/test'
import { websiteLocators } from '../data/locators'

export class RegistrationPage {

    constructor(page) {
        this.page = page
        this.initLocators()
    }

    initLocators() {
        this.firstname = this.page.locator(websiteLocators.FIRST_NAME)
        this.lastname = this.page.locator(websiteLocators.LAST_NAME)
        this.emailAdd = this.page.locator(websiteLocators.EMAIL)
        this.mobileNum = this.page.locator(websiteLocators.MOBILE)
        this.business = this.page.locator(websiteLocators.BUSINESS)
        this.industry = this.page.locator(websiteLocators.INDUSTRY)
        this.industry_drpdwn = this.page.locator(websiteLocators.INDUSTRY_DRPDOWN)
        this.address = this.page.locator(websiteLocators.ADDRESS)
        this.province = this.page.locator(websiteLocators.PROVINCE)
        this.city = this.page.locator(websiteLocators.CITY)
        this.zip = this.page.locator(websiteLocators.ZIP)
        this.privacy_policy = this.page.locator(websiteLocators.PRIV)
        this.terms_conditions = this.page.locator(websiteLocators.TERMS)
        this.submit_button = this.page.locator(websiteLocators.SUBMIT)

        this.firstname_error1 = this.page.locator(websiteLocators.FIRST_NAME_ERROR1)
        this.firstname_error2 = this.page.locator(websiteLocators.FIRST_NAME_ERROR2)
        this.lastname_error1 = this.page.locator(websiteLocators.LAST_NAME_ERROR1)
        this.lastname_error2 = this.page.locator(websiteLocators.LAST_NAME_ERROR2)
        this.email_error1 = this.page.locator(websiteLocators.EMAIL_ERROR1)
        this.email_error2 = this.page.locator(websiteLocators.EMAIL_ERROR2)
        this.mobile_error1 = this.page.locator(websiteLocators.MOBILE_ERROR1)
        this.mobile_error2 = this.page.locator(websiteLocators.MOBILE_ERROR2)
        this.business_error1 = this.page.locator(websiteLocators.BUSINESS_ERROR1)
        this.business_error2 = this.page.locator(websiteLocators.BUSINESS_ERROR2)
        this.industry_error = this.page.locator(websiteLocators.INDUSTRY_ERROR)
        this.address_error = this.page.locator(websiteLocators.ADDRESS_ERROR)
        this.province_error = this.page.locator(websiteLocators.PROVINCE_ERROR)
        this.city_error = this.page.locator(websiteLocators.CITY_ERROR)
        this.zip_error = this.page.locator(websiteLocators.ZIP_ERROR)
        this.privacy_policy_error = this.page.locator(websiteLocators.PRIVACY_ERROR)
        this.terms_error = this.page.locator(websiteLocators.TERMS_ERROR)
    }

    async enter_firstname(fname) {
        await this.firstname.click()
        await this.firstname.fill(fname)
    }

    async enter_lastname(lname) {
        await this.lastname.click()
        await this.lastname.fill(lname)
    }

    async enter_email(email) {
        await this.emailAdd.click()
        await this.emailAdd.fill(email)
    }

    async enter_mobile(mobile) {
        await this.mobileNum.click()
        await this.mobileNum.fill(mobile)
    }

    async enter_business(business_name) {
        await this.business.click()
        await this.business.fill(business_name)
    }

    async select_industry(industy_name) {
        await this.industry.click()
        await this.industry_drpdwn.selectOption({ label: industy_name })
    }

    async enter_address(address_name) {
        await this.address.click()
        await this.address.fill(address_name)
    }

    async enter_province(prov) {
        await this.province.click()
        await this.province.fill(prov)
    }

    async enter_city(city_name) {
        await this.city.click()
        await this.city.fill(city_name)
    }

    async enter_zip(zip_code) {
        await this.zip.click()
        await this.zip.fill(zip_code)
    }

    async click_privacyPolicy() {
        await this.privacy_policy.click()
    }

    async click_termsConditions() {
        await this.terms_conditions.click()
    }

    async click_submitButton() {
        await this.submit_button.click()
    }

    async firstname_error_message(expectedText) {
        if (await this.firstname_error1.isVisible()) {
            await expect.soft(this.firstname_error1).toHaveText(expectedText)
        } else if (await this.firstname_error2.isVisible()) {
            await expect.soft(this.firstname_error2).toHaveText(expectedText)
        } else {
            throw new Error('No matching error message found')
        }
    }

    async lastname_error_message(expectedText) {
        if (await this.lastname_error1.isVisible()) {
            await expect.soft(this.lastname_error1).toHaveText(expectedText)
        } else if (await this.lastname_error2.isVisible()) {
            await expect.soft(this.lastname_error2).toHaveText(expectedText)
        } else {
            throw new Error('No matching last name error message found')
        }
    }

    async email_error_message(expectedText) {
        if (await this.email_error1.isVisible()) {
            await expect.soft(this.email_error1).toHaveText(expectedText)
        } else if (await this.email_error2.isVisible()) {
            await expect.soft(this.email_error2).toHaveText(expectedText)
        } else {
            throw new Error('No matching email error message found')
        }
    }

    async mobile_error_message(expectedText) {
        if (await this.mobile_error1.isVisible()) {
            await expect.soft(this.mobile_error1).toHaveText(expectedText)
        } else if (await this.mobile_error2.isVisible()) {
            await expect.soft(this.mobile_error2).toHaveText(expectedText)
        } else {
            throw new Error('No matching mobile error message found')
        }
    }

    async business_error_message(expectedText) {
        if (await this.business_error1.isVisible()) {
            await expect.soft(this.business_error1).toHaveText(expectedText)
        } else if (await this.business_error2.isVisible()) {
            await expect.soft(this.business_error2).toHaveText(expectedText)
        } else {
            throw new Error('No matching business error message found')
        }
    }

    async industry_error_message(expectedText) {
        expect.soft(this.industry_error).toHaveText(expectedText)
    }

    async address_error_message(expectedText) {
        expect.soft(this.address_error).toHaveText(expectedText)
    }

    async province_error_message(expectedText) {
        expect.soft(this.province_error).toHaveText(expectedText)
    }

    async city_error_message(expectedText) {
        expect.soft(this.city_error).toHaveText(expectedText)
    }

    async zip_error_message(expectedText) {
        expect.soft(this.zip_error).toHaveText(expectedText)
    }

    async privacy_error_message(expectedText) {
        expect.soft(this.privacy_policy_error).toHaveText(expectedText)
    }

    async terms_error_message(expectedText) {
        expect.soft(this.terms_error).toHaveText(expectedText)
    }

    async submit_form(fname, lname, email, mobile, business_name, industy_name, address_name, prov, city_name, zip_code, checkCheckBoxes = true) {
        await this.enter_firstname(fname)
        await this.enter_lastname(lname)
        await this.enter_email(email)
        await this.enter_mobile(mobile)
        await this.enter_business(business_name)
        await this.select_industry(industy_name)
        await this.enter_address(address_name)
        await this.enter_province(prov)
        await this.enter_city(city_name)
        await this.enter_zip(zip_code)

        if (checkCheckBoxes) {
            await this.click_privacyPolicy()
            await this.click_termsConditions()
        }

        await this.click_submitButton()
    }
}