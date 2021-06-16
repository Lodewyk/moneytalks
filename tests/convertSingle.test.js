const convertSingle = require(`../convertSingle`)

test(`one`, () => {
    expect(convertSingle.convertSingle(`1`)).toBe(`one`)
})

test(`five`, () => {
    expect(convertSingle.convertSingle(`5`)).toBe(`five`)
})

test(`nine`, () => {
    expect(convertSingle.convertSingle(`9`)).toBe(`nine`)
})