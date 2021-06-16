const convertHundreds = require(`./app`)

test('check', () => {
    expect(convertHundreds(1)).toBe(`one hundred`)
})