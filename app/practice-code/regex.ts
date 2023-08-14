// Replace someone with SOMEONE globally

const regex = /someone/g;
const myname = "my name is someone and someone is someone";
console.log(myname.replace(regex, "SOMEONE"));

// gi here mean global insensitive, it still replace regardless of the case

const regex1 = /someonesomeone/gi;
const myname1 = "my name is Someonesomeone and someone";
console.log(myname1.replace(regex1, "SOMEONE"));

// It won't replace because 'Someonesomeone' has capital 'S' in it

const regex2 = /someonesomeone/g;
const myname2 = "my name is Someonesomeone and someone";
console.log(myname2.replace(regex2, "someone"));

// To check range of the dynamic number in the string by cypress through Regex
// Please uncomment to run below code, it works fine

/*
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
*/
