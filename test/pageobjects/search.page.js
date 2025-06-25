import { $, $$ } from '@wdio/globals';

class SearchPage {
    get inputSearch() {
        return $('id:searchInput'); 
    }

    async searchProduct(productName) {
        await this.inputSearch.setValue(productName);
        await driver.pressKeyCode(66); 
    }

    async selectProductByText(productText) {
        await $(`android=new UiSelector().text("${productText}")`).click();
    }
}

export default new SearchPage();
