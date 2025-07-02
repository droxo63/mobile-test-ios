import { expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import searchPage from '../pageobjects/search.page.js';
import productPage from './product.test.js';

describe('Fluxo de compra - Buscar e adicionar produto ao carrinho', () => {
    it('Deve buscar um produto, selecionar e adicioná-lo ao carrinho', async () => {
        // 1. Acessar a aba de busca
        await homePage.openMenu('Search'); // id:tab-Search

        // 2. Buscar pelo nome do produto
        await searchPage.searchProduct('Ingrid Running Jacket');

        // 3. Selecionar o produto da lista
        await searchPage.selectProductByText('Ingrid Running Jacket');

        // 4. Adicionar ao carrinho
        await productPage.addToCart();

        // 5. Validar botão de remover visível no carrinho
        const isRemoveVisible = await productPage.isRemoveButtonVisible();
        expect(isRemoveVisible).toBeTruthy();
    });
});
