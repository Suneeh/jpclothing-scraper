import { listViewButton, productList, productName, productPrice, productUrl, UrlsToCheck } from '../fixtures/fixture';

describe('JP Performance', () => {
  UrlsToCheck.forEach((url, index) => {
    const list = [];
    it('has the same hoodies as last time', () => {
      cy.visit(url);

      // Make articles be shown as list view
      cy.get(listViewButton).click();

      cy.get(productList).each((article, index) => {
        const title = article.find(productName).get(0).innerHTML;
        const price = article.find(productPrice).get(0).innerHTML;
        const url = article.find(productUrl).get(0).getAttribute('href');

        list.push({
          index,
          title,
          price,
          url: Cypress.config().baseUrl + url,
        });
      });
      if (index === 2) {
        cy.debug();
      }
    });
    console.log(list);
  });
});
