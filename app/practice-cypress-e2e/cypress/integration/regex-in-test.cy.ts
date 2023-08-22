export class Regex {
  static checkInfoTextClusterCountInBetween(
    itemCount: [number, number],
    rowsCount: number
  ) {
    cy.get(".info-text").should(($infoText) => {
      const text = $infoText.text();
      const itemCountRegex = /I found (\d+) items in/;
      const rowsCountRegex = /(\d+) rows/;
      const itemCountMatch: any = text.match(itemCountRegex);
      const rowsCountMatch: any = text.match(rowsCountRegex);

      const countofItem = parseInt(itemCountMatch[1]);
      const countofRows = parseInt(rowsCountMatch[1]);

      expect(countofItem).to.be.within(itemCount[0], itemCount[1]);
      expect(countofRows).to.equal(rowsCount);
    });
    return this;
  }
}
