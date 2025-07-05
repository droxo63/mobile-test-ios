import { expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';
import profilePage from '../pageobjects/profile.page.js';

describe('Login', () => {
    it('Deve logar com credenciais válidas', async () => {
        await homePage.openMenu('profile');
        await loginPage.login('cliente@ebac.com.br', 'GD*peToHNJ1#c$sgk08EaYJQ');
        await homePage.openMenu('profile');

        const nameDisplayed = await profilePage.profileName('EBAC Cliente').isDisplayed();
        expect(nameDisplayed).toBeTruthy();
    });
});

