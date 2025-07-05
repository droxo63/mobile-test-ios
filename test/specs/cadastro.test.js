import { expect } from '@wdio/globals';
import profilePage from '../pageobjects/profile.page.js';
import registerPage from '../pageobjects/register.page.js';
import homePage from '../pageobjects/home.page.js';


describe('Cadastro de usuário', () => {
    it('deve realizar o cadastro com sucesso', async () => {
        await homePage.openMenu('profile');
        await profilePage.goToSignUp();

        const newUser = {
            firstName: 'Diego',
            lastName: 'Souza',
            phone: '11999999999',
            email: `diego${Date.now()}@teste.com`,
            password: 'Teste@123',
            repassword: 'Teste@123'
        };

        await registerPage.fillRegistrationForm(newUser);
        await registerPage.submit();
    
    });
});
