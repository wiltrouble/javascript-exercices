const { expect } = require("@jest/globals");
const evensAndOdds = require("../EvensAndOdds");

test("should ve equals", () => {
    expect(evensAndOdds(2)).toEqual('10')
})