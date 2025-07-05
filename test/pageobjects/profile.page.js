import { $ } from '@wdio/globals';

class ProfilePage {
    profileName(name) {
        return $(`//android.widget.TextView[@text="${name}"]`);
    }

    get signUpButton() {
        return $('//android.widget.TextView[@text="Sign up"]');
    }

    async goToSignUp() {
        await this.signUpButton.click();
    }
}

export default new ProfilePage();

