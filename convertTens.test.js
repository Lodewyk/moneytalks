const convertTens = require(`./convertTens`)

test(`ten`, () => {
    expect(convertTens.convertTens(`1`, `0`)).toBe(`ten`)
})