import { $ } from '@wdio/globals';

class HomePage {
    async openMenu(menu) {
        const selector = `id:tab-${menu}`;
        const element = await $(selector);

        await browser.waitUntil(async () => await element.isDisplayed(), {
            timeout: 10000,
            timeoutMsg: `O menu '${menu}' (${selector}) não apareceu na tela.`
        });

        await element.click();
    }
}

export default new HomePage();
