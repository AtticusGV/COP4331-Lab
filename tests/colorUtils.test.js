const { describe, test, expect } = require("@jest/globals");

describe("Color Validation Tests", () => {

    function isValidColor(color) {
        return /^#([0-9A-Fa-f]{6})$/.test(color);
    }

    test("Accept Valid Hex Colors", () => {
        expect(isValidColor("#00FF00")).toBe(true);
        expect(isValidColor("#FF00FF")).toBe(true);
        expect(isValidColor("#FFFF00")).toBe(true);
    });

    test("Reject Invalid Hex Colors", () => {
        expect(isValidColor("FF0000")).toBe(false);
        expect(isValidColor("#XXYYZZ")).toBe(false);
        expect(isValidColor("#ABC")).toBe(false);
    });

});