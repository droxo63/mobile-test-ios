import { $ } from '@wdio/globals';

class OrderPage {
    get successMessage() {
        return $('android=new UiSelector().textContains("Transaction successful")');
    }

    async getSuccessMessage() {
        return await this.successMessage.getText();
    }
}

export default new OrderPage();
