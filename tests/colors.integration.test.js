const { describe, test, expect } = require("@jest/globals");

describe("Colors Integration Tests", () => {

    test("Proper Color Data Structure", () => {

        const colors = {
            colors: [
                {
                    name: "Red",
                    hex: "#FF0000"
                },
                {
                    name: "Green",
                    hex: "#00FF00"
                },
                {
                    name: "Blue",
                    hex: "#0000FF"
                }
            ]
        };

        expect(colors).toHaveProperty("colors");

        expect(Array.isArray(colors.colors)).toBe(true);

        colors.colors.forEach(color => {
            expect(color).toHaveProperty("name");
            expect(color).toHaveProperty("hex");
            expect(color.hex).toMatch(/^#[0-9A-Fa-f]{6}$/);
        });

    });

});