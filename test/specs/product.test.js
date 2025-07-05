import { expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import searchPage from '../pageobjects/search.page.js';
import productPage from '../pageobjects/product.page.js';

describe('Buscar e Adicionar Produto', () => {
    it('Deve buscar produto e adicionar ao carrinho', async () => {
        await homePage.openMenu('Search');
        await searchPage.searchProduct('Ingrid Running Jacket');
        await searchPage.selectProductByText('Ingrid Running Jacket');
        await productPage.addToCart();
        const removeVisible = await productPage.isRemoveButtonVisible();
        expect(removeVisible).toBeTruthy();
    });
});
