import { listViewButton, productList, productName, productPrice, productUrl, CategoriesToCheck } from '../fixtures/fixture';

describe('JP Performance', () => {
  const result: Result = {};

  it('has the same hoodies as last time', () => {
    CategoriesToCheck.forEach((category) => {
      const products = [];
      cy.visit(category.url);

      cy.get(listViewButton).click();

      cy.get(productList).each((article, index) => {
        products.push({
          index,
          title: article.find(productName).get(0).innerHTML,
          price: article.find(productPrice).get(0).innerHTML,
          url: Cypress.config().baseUrl + article.find(productUrl).get(0).getAttribute('href'),
        });
      });

      result[category.name] = products;
    });

    // Diff the old and new results
    cy.readFile('results/result.json').then((oldResult: Result) => {
      CategoriesToCheck.forEach((category) => {
        if (oldResult[category.name].length == result[category.name].length) {
          // find diff between oldResult and result and print it to some file ?
        }
      });
      // write new file so the next run has some good data to check
      //cy.writeFile('results/result.json', result);
    });
  });
});

// Move those to /fixtures/interfaces.ts
interface Result {
  [key: string]: ArticleInfo[];
}

interface ArticleInfo {
  index: number;
  title: string;
  price: string;
  url: string;
}
