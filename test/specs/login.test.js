import { expect, driver } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'
import profilePage from '../pageobjects/profile.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('cliente@ebac.com.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeThruth()
        await driver.pause(1000)
    })
})

