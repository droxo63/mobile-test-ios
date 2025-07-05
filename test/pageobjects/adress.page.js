import { $ } from '@wdio/globals';

class AddressPage {
    get nameInput() { return $('android=new UiSelector().text("Enter your name")'); }
    get phoneInput() { return $('android=new UiSelector().text("Enter your mobile number")'); }
    get addressInput() { return $('android=new UiSelector().text("Enter your address")'); }
    get cityInput() { return $('android=new UiSelector().text("City")'); }
    get stateInput() { return $('android=new UiSelector().text("State")'); }
    get zipcodeInput() { return $('android=new UiSelector().text("ZipCode")'); }
    get saveButton() { return $('android=new UiSelector().text("Save")'); }

    async fillAddressForm(data) {
        await this.nameInput.setValue(data.name);
        await this.phoneInput.setValue(data.phone);
        await this.addressInput.setValue(data.address);
        await this.cityInput.setValue(data.city);
        await this.stateInput.setValue(data.state);
        await this.zipcodeInput.setValue(data.zipcode);
    }

    async saveAddress() {
        await this.saveButton.click();
    }
}

export default new AddressPage();
