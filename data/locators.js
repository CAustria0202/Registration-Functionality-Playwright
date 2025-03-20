export class websiteLocators {
    //LOCATORS BY ID
    static FIRST_NAME = '[id="firstname"]'
    static LAST_NAME = '[id="lastname"]'
    static EMAIL = '[id="email"]'
    static MOBILE = '[id="mobile"]'
    static BUSINESS = '[id="business"]'
    static INDUSTRY = '[id="industryType"]'
    static ADDRESS = '[id="address"]'
    static PROVINCE = '[id="province"]'
    static CITY = '[id="city"]'
    static ZIP = '[id="zipCode"]'
    static PRIV = '[id="privacyPolicy"]'
    static TERMS = '[id="termsConditions"]'
    static SUBMIT = '[value="Submit"]'

    //LOCATORS BY CCS Selector
    static INDUSTRY_DRPDOWN = '#industryType'

    //XPATH FOR ERROR MESSAGES
    static FIRST_NAME_ERROR1 = "xpath=//small[normalize-space()='Please input your first name']"
    static FIRST_NAME_ERROR2 = "xpath=//small[contains(text(),'Enter a valid first name (alphabetic characters on')]"
    static LAST_NAME_ERROR1 = "xpath=//small[normalize-space()='Please input your last name']"
    static LAST_NAME_ERROR2 = "xpath=//small[contains(text(),'Enter a valid last name (alphabetic characters onl')]"
    static EMAIL_ERROR1 = "xpath=//small[normalize-space()='Please input your email address']"
    static EMAIL_ERROR2 = "xpath=//small[contains(text(),'Enter a valid email address (e.g., user@example.co')]"
    static MOBILE_ERROR1 = "xpath=//small[normalize-space()='Please input your mobile number']"
    static MOBILE_ERROR2 = "xpath=//small[contains(text(),'Enter a valid 11-digit mobile number starting with')]"
    static BUSINESS_ERROR1 = "xpath=//small[normalize-space()='Please input your business name']"
    static BUSINESS_ERROR2 = "xpath=//small[contains(text(),'Business name can only contain letters, numbers, s')]"
    static INDUSTRY_ERROR = "xpath=//small[normalize-space() = 'Select an industry type']"
    static ADDRESS_ERROR = "xpath=//small[normalize-space() = 'Enter your address']"
    static PROVINCE_ERROR = "xpath=//small[normalize-space() = 'Enter your province']"
    static CITY_ERROR = "xpath=//small[normalize-space() = 'Enter your city/municipality']"
    static ZIP_ERROR = "xpath=//small[normalize-space() = 'Enter a valid 4-5 digit zip code']"
    static PRIVACY_ERROR = "xpath=//small[normalize-space() = 'You must agree to the Privacy Policy']"
    static TERMS_ERROR = "xpath=//small[normalize-space() = 'You must agree to the Terms and Conditions']"

    //LOCATE THE MESSAGE ON THANK YOU PAGE
    static SUCCESSFUL_MESSAGE = "xpath=//h1[normalize-space()='Your Registration is Successful!']"
}