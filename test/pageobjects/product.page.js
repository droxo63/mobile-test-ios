import { $ } from '@wdio/globals';

class ProductPage {
    get addToCartButton() {
        return $('android=new UiSelector().text("Add To Cart")');
    }

    get removeButton() {
        return $('android=new UiSelector().text("Remove")');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async isRemoveButtonVisible() {
        return await this.removeButton.isDisplayed();
    }
}

export default new ProductPage();
