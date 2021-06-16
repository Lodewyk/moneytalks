const convertHundreds = require(`./app`)
const convertTens = require(`./app`)

test('convertTens ten', () => {
    expect(convertTens(`1`, `0`)).toBe(`ten`)
})

test('convertHundreds one', () => {
    expect(convertHundreds(`1`)).toBe(`one hundred`)
})

test('convertHundreds nine', () => {
    expect(convertHundreds(`9`)).toBe(`nine hundred`)
})