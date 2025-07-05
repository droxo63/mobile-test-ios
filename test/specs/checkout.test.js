import { expect } from '@wdio/globals';
import cartPage from '../pageobjects/cart.page.js';
import addressPage from '../pageobjects/address.page.js';
import paymentPage from '../pageobjects/payment.page.js';

describe('Fluxo de compra - Endereço e Checkout', () => {
    it('Deve adicionar novo endereço e prosseguir', async () => {
        await cartPage.openCart();
        await cartPage.tapAddNewAddress();

        await addressPage.fillAddressForm({
            name: 'Diego Souza',
            phone: '11999999999',
            address: 'Rua Teste, 123',
            city: 'Bauru',
            state: 'SP',
            zipcode: '17000000'
        });

        await addressPage.saveAddress();
        await cartPage.continueToPayment();

        const visible = await paymentPage.isCheckoutButtonVisible();
        expect(visible).toBe(true);
    });
});
