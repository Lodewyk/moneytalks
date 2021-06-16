const convertWholeAmount = require(`../convertWholeAmount`)

test(`check-for-zero`, () => {
    expect(convertWholeAmount.convertWholeAmount(`0`)).toBe(`zero dollars`)
})

test(`check-for-thousand`, () => {
    expect(convertWholeAmount.convertWholeAmount(`1000`)).toBe(`one thousand dollars`)
})

test(`convert-123`, () => {
    expect(convertWholeAmount.convertAfterChecks(`123`)).toBe(`one hundred and twenty-three dollars`)
})