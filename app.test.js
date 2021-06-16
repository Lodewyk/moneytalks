const convertHundreds = require(`./app`)
// const convertTens = require(`./app`)

test('convertHundreds one', () => {
    expect(convertHundreds(`1`)).toBe(`one hundred`)
})

test('convertHundreds nine', () => {
    expect(convertHundreds(`9`)).toBe(`nine hundred`)
})

test('ten', () => {
    expect(convertTens(`1`, `0`)).toBe(`ten`)
})

// test('eleven', () => {
//     expect(convertTens(`1`, `1`)).toBe(`eleven`)
// })

// test('eighteen', () => {
//     expect(convertTens(`1`, `8`)).toBe(`eighteen`)
// })