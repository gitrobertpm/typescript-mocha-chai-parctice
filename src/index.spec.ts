import { expect } from "chai";
import "mocha";

import { titleCase } from './index';

/**
 * Sanity test
 */
// describe("This", () => {
//   describe("should", () => {
//     it("always pass", () => {
//       expect(true).to.equal(true);
//     });
//   });
// });


/**
 * Test suite to check if input string has first letter of each word capitalized 
 */
describe("TitleCase", () => {

  // Test spec (unit test)
  it("should turn a string into a proper title", () => {
    //expect(titleCase('fear and loathing in las vegas')).to.be.a('string');
    expect(titleCase('fear and loathing in las vegas')).to.equal('Fear And Loathing In Las Vegas');
  });
});
