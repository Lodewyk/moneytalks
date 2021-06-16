const convertHundreds = require(`../convertHundreds`)

test(`one hundred`, () => {
    expect(convertHundreds.convertHundreds(`1`)).toBe(`one hundred`)
})