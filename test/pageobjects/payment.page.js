import { $ } from '@wdio/globals';

class PaymentPage {
    get checkoutButton() {
        return $('android=new UiSelector().text("Checkout")');
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    async isCheckoutButtonVisible() {
        return await this.checkoutButton.isDisplayed();
    }
}

export default new PaymentPage();
