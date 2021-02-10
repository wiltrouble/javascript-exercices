const expect = require('@jest/globals')
const hellsKitchen = require('../exercises/HellsKitchen')

test("What feck damn cake, should be converted to 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'", () => {
    var stringExpected = "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!";
    var current = "What feck damn cake";
    expect(hellsKitchen(current)).toBe(stringExpected)
})