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
    expect(titleCase('fear and loathing in las vegas')).to.equal('Fear and Loathing In Las Vegas');
  });

  it("should turn a string into a proper title", () => {
    expect(titleCase("aren't can't don't won't")).to.equal("Aren't can't don't Won't");
  });

  it("should turn a string into a proper title", () => {
    expect(titleCase('a i o u xyz to be free')).to.equal('A I O U Xyz to Be Free');
  });
});
