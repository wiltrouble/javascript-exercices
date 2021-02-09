const { expect } = require('@jest/globals');
const correctTime = require('../exercices/CorrectTime');

test("11:70:10 should be converted to 12:10:10", () => {
    expect(correctTime("11:70:10")).toBe("12:10:10")
})

test("11:70:10 should be converted to 12:10:10", () => {
    expect(correctTime("11:70:10")).toBe("12:10:10")
})

test("19:99:09 should be converted to 20:39:09", () => {
    expect(correctTime("19:99:09")).toBe("20:39:09")
})

test("19:99:99 should be converted to 20:40:39", () => {
    expect(correctTime("19:99:99")).toBe("20:40:39")
})

test("24:01:01 should be converted to 00:01:01", () => {
    expect(correctTime("24:01:01")).toBe("00:01:01")
})

test("52:01:01 should be converted to 04:01:01", () => {
    expect(correctTime("52:01:01")).toBe("04:01:01")
})