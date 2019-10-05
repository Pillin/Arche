const { assert } = require("chai");
const { validateNumber } = require("../../../src/utils/validations");

describe("Utils/Validations", () => {
  describe("Validate validateNumber", () => {
    it("should be accept number", () => {
      const value = validateNumber("0123456789");
      assert.equal(value, "0123456789");
    });
    it("should be accept dot", () => {
      const value = validateNumber("012345678.9");
      assert.equal(value, "012345678.9");
    });

    it("should be avoid double dot", () => {
      const value = validateNumber("01234.5678.9");
      assert.equal(value, "012345678.9");
    });

    it("should be avoid letters", () => {
      const value = validateNumber("01234.5678.9abcdefghijklmnñopqrstuv");
      assert.equal(value, "012345678.9");
    });

    it("should be avoid symbols", () => {
      const value = validateNumber("01234.56#78.9abcdefghijklmn&%ñopqrstuv");
      assert.equal(value, "012345678.9");
    });
  });
});
