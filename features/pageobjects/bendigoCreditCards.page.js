import * as utils from '../../utils.js';

const bendigoBankCreditCardLocators = {
    screenTitle: '//h2[contains(@class, "exploreTile-title")]',
    creditCardType: function (cardType) {
        return `(//a[@aria-label="${cardType}"])[1]`
    },
    helpFulToolLink: '//h3[contains(text(), "Helpful")]',
    checkMyEligibilityTitle: '//h1[@class="title"]',
    continueApplyButton: "(//*[contains(text(), 'Continue to apply')])[1]",
    cardType: "//p[contains(text(), 'Card Type')]//following-sibling::span",
    gettingStartedProgressBar: "(//div[@step-title='Getting Started']//h2)[1]",
    preferredCreditLimit: "[name='maximumLimit']",
    buttonsInCreditCardpage: function (purposeOption) {
        return `//button[contains(text(), '${purposeOption}')]`
    },
    sectionTitle: "//h2[@class='sst-dp-padding sst-dp-collapsible-panel-title ng-binding']",
    relationshipStatus: '[name="maritalStatus"]',
    applicationDetailsQuestionOptions: function (question, option) {
        return `//label[contains(text(), '${question}')]//following-sibling::div//*[contains(text(), '${option}')]`
    },
    branchSearchField: "[name='branchSearch']",
    searchFindButton: '[name="branchSearchBtn"]',
    locationName: function (locationName) {
        return `//li[contains(text(), '${locationName}')]`
    },
    chosenLocation: "[ng-if='model.branchFormattedAddress']",
    employmentStatusDropDown: '[name="employmentStatus"]',
    occupationSearchInputField: 'input[name="occupationSearch"]',
    occupationDrodownValue: function (value) {
        return `//a[contains(@title, '${value}')]`
    },
    incomeAmountInputField: '[name="incomeAmount"]',
    incomeFrequencyDropDown: 'select[name="incomeFrequency"]',
    expenseAmountInputField: 'input[name="expenseAmount"]',
    paymentFrequencyDroDown: 'select[name="frequency"]',
    pleaseConfirmPopUpMsg: '//sst-dialog[@heading="Please confirm"]//div[@class="sst-dp-dialog-text ng-binding"]',
    buttonsInPopUp: function (button) {
        return `//sst-dialog[@heading="Please confirm"]//button[contains(text(), '${button}')]`
    },
    refNumber: "span[id='appNumber']",
    applicationMessage: 'div[ui-view="content"] h1',
    expenseSectionButton: '[name="expense"] div[class="crud-panel-padding-top-bottom"] button',
    expenseSectionMessage: '[name="expense"] div[class="crud-panel-padding-top-bottom"] label'

}
export async function getSelectedScreenTitle() {
    return await utils.getElementText($(bendigoBankCreditCardLocators.screenTitle))
}

export async function clickApplyNowOnCreditCardType(cardType) {
    await browser.execute('arguments[0].scrollIntoView(); arguments[0].click();', await $(bendigoBankCreditCardLocators.creditCardType(cardType)));
}

export async function getcheckMyEligibilityTitle() {
    return await utils.getElementText($(bendigoBankCreditCardLocators.checkMyEligibilityTitle))
}

export async function clickOnContinueApplyButton() {
    const currentWindow = await utils.getMultipleWindows()
    await utils.clickOnElement($(bendigoBankCreditCardLocators.continueApplyButton))
    await utils.switchToNewWindowById(currentWindow)
    await utils.waitForPageLoad()
}

export async function IsBendigoCardTypeDisplayed() {
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.cardType))
    return await utils.isElementDisplayed($(bendigoBankCreditCardLocators.cardType))
}

export async function getBendigoCardType() {
    return await utils.getElementText($(bendigoBankCreditCardLocators.cardType))
}

export async function isGettingProgessBarDisplayed() {
    return await utils.isElementDisplayed($(bendigoBankCreditCardLocators.gettingStartedProgressBar))
}

export async function getGettingProgessBarText() {
    return await utils.getElementText($(bendigoBankCreditCardLocators.gettingStartedProgressBar))
}

export async function enterAmountInPreferredLimitField(amount) {
    await utils.setInputField($(bendigoBankCreditCardLocators.preferredCreditLimit), amount)
}

export async function clickOnOption(purpose) {
    await utils.clickOnElement($(bendigoBankCreditCardLocators.buttonsInCreditCardpage(purpose)))
}

export async function getSectionTitle() {
    await utils.waitForPageLoad()
    await browser.pause(10000)
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.sectionTitle))
    return await utils.getElementText($(bendigoBankCreditCardLocators.sectionTitle))
}

export async function selectRelationShipDropDownValue(value) {
    await utils.selectDropdownByVisibleText($(bendigoBankCreditCardLocators.relationshipStatus), value)
}

export async function selectOptionForQuestion(question, option) {
    await utils.clickOnElement($(bendigoBankCreditCardLocators.applicationDetailsQuestionOptions(question, option)))
}

export async function searchLocation(locationName) {
    await utils.setInputField($(bendigoBankCreditCardLocators.branchSearchField), locationName)
    await utils.clickOnElement($(bendigoBankCreditCardLocators.searchFindButton))
}

export async function selectLocation(location) {
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.locationName(location)))
    await utils.scrollIntoElementView($(bendigoBankCreditCardLocators.locationName(location)))
    await utils.clickOnElement($(bendigoBankCreditCardLocators.locationName(location)))
}

export async function getChosenLocation() {
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.cardType))
    return await utils.getElementText($(bendigoBankCreditCardLocators.chosenLocation))
}

export async function selectEmploymentStatusDropDownValue(value) {
    await utils.selectDropdownByVisibleText($(bendigoBankCreditCardLocators.employmentStatusDropDown), value)
}

export async function enterOccupationInOcccupationField(occupation) {
    await utils.setInputField($(bendigoBankCreditCardLocators.occupationSearchInputField), occupation)
}

export async function selectDropDownValInOccupationValues(occupationDropDownVal) {
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.occupationDrodownValue(occupationDropDownVal)))
    await utils.clickOnElement($(bendigoBankCreditCardLocators.occupationDrodownValue(occupationDropDownVal)))
}

export async function enterAmountInIncomeAmountField(amount) {
    await utils.setInputField($(bendigoBankCreditCardLocators.incomeAmountInputField), amount)
}

export async function selectDropDownValInFrequencyDropDownVals(incomeFrequencyVal) {
    await utils.selectDropdownByVisibleText($(bendigoBankCreditCardLocators.incomeFrequencyDropDown), incomeFrequencyVal)
}

export async function enterAmountInExpenseAmountInputField(amount) {
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.expenseAmountInputField))
    await utils.setInputField($(bendigoBankCreditCardLocators.expenseAmountInputField), amount)
}

export async function selectDropDownValInExpenseAmountInputField(paymentFrequency) {
    await utils.selectDropdownByVisibleText($(bendigoBankCreditCardLocators.paymentFrequencyDroDown), paymentFrequency)
    await browser.pause(2000)
}
export async function getPleaseConfirmPopUpMsg() {
    return utils.getElementText($(bendigoBankCreditCardLocators.pleaseConfirmPopUpMsg))
}

export async function clickOnButtonInPopUp(button) {
    await utils.clickOnElement($(bendigoBankCreditCardLocators.buttonsInPopUp(button)))
}

export async function getRefNumber() {
    return utils.getElementText($(bendigoBankCreditCardLocators.refNumber))
}

export async function getApplicationMessage() {
    return utils.getElementText($(bendigoBankCreditCardLocators.applicationMessage))
}

export async function getExpenseButtonName() {
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.expenseSectionButton))
    return utils.getElementText($(bendigoBankCreditCardLocators.expenseSectionButton))
}

export async function getExpenseMessage() {
    return utils.getElementText($(bendigoBankCreditCardLocators.expenseSectionMessage))
}

