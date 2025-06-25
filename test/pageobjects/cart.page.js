import { $, browser } from '@wdio/globals';

class CartPage {
    get cartIcon() {
        return $('id:cart');
    }

    get addNewAddressButton() {
        return $('android=new UiSelector().text("Add New Address")');
    }

    get continueToPaymentButton() {
        return $('android=new UiSelector().text("Continue to payment")');
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async tapAddNewAddress() {
        await this.addNewAddressButton.click();
    }

    async continueToPayment() {
        await this.continueToPaymentButton.click();
    }
}

export default new CartPage();
