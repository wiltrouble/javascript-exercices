const { expect } = require('@jest/globals');
const fizzbuzz = require('../exercises/FizzBuzz')

test("Should fizzify 10 numbers correctly", () => {
    var expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
    expect(fizzbuzz(10)).toStrictEqual(expected)
})
