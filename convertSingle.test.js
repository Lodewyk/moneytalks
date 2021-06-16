const convertSingle = require(`./convertSingle`)

test(`one`, () => {
    expect(convertSingle.convertSingle(`1`)).toBe(`one`)
})