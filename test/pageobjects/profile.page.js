import { $ } from '@wdio/globals'



class ProfilePage {

    async profileName (name) { 
        return await $('//android.widget.TextView[@text="+${name}+"]'); 
    }
    get signUpButton() {
    return $('//android.widget.TextView[@text="Sign up"]');
}

 async goToSignUp() {
        await this.signUpButton.click();
    }
}

export default new class ProfilePage();
