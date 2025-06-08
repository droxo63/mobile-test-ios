import { expect, driver } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import registerPage from '../pageobjects/register.page.js';
import profilePage from '../pageobjects/profile.page.js';


describe('Cadastro de usuário', () => {
    it('deve realizar o cadastro com sucesso', async () => {

        // Acessa a tela de cadastro
        await ProfilePage.goToSignUp(); 

        const newUser = {
            firstName: 'Diego',
            lastName: 'Souza',
            phone: '11999999999',
            email: `diego${Date.now()}@teste.com`,  
            password: 'Teste@123',
            repassword: 'Teste@123'
        };

        // Preenche o formulário
        await registerPage.fillRegistrationForm(newUser);

        // Submete o formulário
        await registerPage.submit();

       

       
    });
});
