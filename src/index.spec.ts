import { expect } from "chai";
import "mocha";

import { titleCase } from './index';

describe("This", () => {
  describe("should", () => {
    it("always pass", () => {
      expect(true).to.equal(true);
    });
  });
});


describe("This", () => {
  describe("should", () => {
    it("always pass", () => {
      expect(titleCase('fear and loathing in las vegas')).to.be.a('string');
    });
  });
});
// expect(titleCase('fear and loathing in las vegas')).to.be.a('string');