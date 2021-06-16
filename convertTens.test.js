const convertTens = require(`./convertTens`)

test(`ten`, () => {
    expect(convertTens.convertTens(`1`, `0`)).toBe(`ten`)
})

test(`eighteen`, () => {
    expect(convertTens.convertTens(`1`, `8`)).toBe(`eighteen`)
})

test(`thirty-two`, () => {
    expect(convertTens.convertTens(`3`, `2`)).toBe(`thirty-two`)
})