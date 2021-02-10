const expect = require("@jest/globals")
const pairsOfBears = require("../exercises/PairsOfBears")

var actualZoo = "8j8mBliB8gimjB8B8jlB";
var exptectedPairOfBears = "B8B8B8";
test(`The pair of bears should be ${exptectedPairOfBears}`, () => {
    expext(pairsOfBears(actualZoo)).toBE(exptectedPairOfBears);
})