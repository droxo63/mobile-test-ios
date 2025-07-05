import { expect } from '@wdio/globals';
import paymentPage from '../pageobjects/payment.page.js';
import orderPage from '../pageobjects/order.page.js';

describe('Concluir Pedido', () => {
    it('Deve mostrar mensagem de sucesso', async () => {
        await paymentPage.checkout();
        const msg = await orderPage.getSuccessMessage();
        expect(msg).toContain('Transaction successful');
    });
});
