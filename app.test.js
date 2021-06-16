const convertHundreds = require(`./app`)

test('convertHundreds one', () => {
    expect(convertHundreds(`1`)).toBe(`one hundred`)
})

test('convertHundreds nine', () => {
    expect(convertHundreds(`9`)).toBe(`nine hundred`)
})