const convertDoubleDigits = require("../convertDoubleDigits")

test(`ten`, () => {
    expect(convertDoubleDigits.convertDoubleDigits(`0`, `1`)).toBe(`ten`)
})

test(`fourty-seven`, () => {
    expect(convertDoubleDigits.convertDoubleDigits(`7`, `4`)).toBe(`fourty-seven`)
})

test(`sixty-two`, () => {
    expect(convertDoubleDigits.convertDoubleDigits(`2`, `6`)).toBe(`sixty-two`)
})

test(`ninety-nine`, () => {
    expect(convertDoubleDigits.convertDoubleDigits(`9`, `9`)).toBe(`ninety-nine`)
})

test(`seventeen`, () => {
    expect(convertDoubleDigits.convertDoubleDigits(`7`, `1`)).toBe(`seventeen`)
})

test(`three-with-leading-zero`, () => {
    expect(convertDoubleDigits.convertDoubleDigits(`3`, `0`)).toBe(`three`)
})

test(`three-with-no-ten-input`, () => {
    expect(convertDoubleDigits.convertDoubleDigits(`3`)).toBe(`three`)
})