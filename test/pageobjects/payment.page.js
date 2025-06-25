import { $ } from '@wdio/globals';

class PaymentPage {
    get checkoutButton() {
        return $('android=new UiSelector().text("Checkout")');
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

export default new PaymentPage();
