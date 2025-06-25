import { expect } from '@wdio/globals';
import cartPage from '../pageobjects/cart.page.js';
import addressPage from '../pageobjects/address.page.js';
import paymentPage from '../pageobjects/payment.page.js';

describe('Fluxo de compra - Endereço e Checkout', () => {
    it('Deve adicionar um novo endereço e prosseguir para o pagamento', async () => {
        // 1. Ir para o carrinho
        await cartPage.openCart(); // id:cart

        // 2. Adicionar novo endereço
        await cartPage.tapAddNewAddress();

        // 3. Preencher e salvar endereço
        await addressPage.fillAddressForm({
            name: 'Diego Souza',
            phone: '11999999999',
            address: 'Rua Teste, 123',
            city: 'Bauru',
            state: 'SP',
            zipcode: '17000000'
        });

        await addressPage.saveAddress();

        // 4. Continuar para pagamento
        await cartPage.continueToPayment();

        // 5. Verificar tela de pagamento visível
        const visible = await paymentPage.isCheckoutButtonVisible();
        expect(visible).toBe(true);
    });
});
