const { expect } = require("@jest/globals");
const evensAndOdds = require("../exercices/EvensAndOdds");

test("should be equals", () => {
    expect(evensAndOdds(2)).toEqual('10')
});

test("should be equals", () => {
    expect(evensAndOdds(15)).toEqual('f')
})