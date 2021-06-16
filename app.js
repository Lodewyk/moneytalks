'use strict';

/**
 * The readline constant as well as the `question` method were copied
 * from nodejs.dev - I was not certain what the best way would be to
 * accepted input from the user in the command line
 * {@link https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs}
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Please input an amount: `, amount => {
    amount = sanitizeInput(amount);
    convertAmount(amount)
    readline.close()
})
/** copy paste ends here */

const singles = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`]
const doubleDigits = [`n/a`, `ten`, `twenty`, `thirty`, `fourty`, `fifty`, `sixty`, `seventy`, `eighty`, `ninety`]
const tens = [`n/a`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`]

/**
 * Should return the input string with everything not numerical or `.` removed. Does not handle multiple decimals
 * Extra decimals will mean everything after the second decimal (including the decimal) is removed
 * 
 * @param String input 
 * 
 * @returns 
 */
function sanitizeInput(input) {
    return input.replace(/[^0-9\.]/g,'');
}

/**
 * This will not handle negative amounts, and will only accept `.` as the decimal character
 * Commas are not supported and will return weird results.
 * I am assuming that whatever is entered is a valid amount, string values e.g. 15yyy will not work.
 * Any amount over 1000 will be ignored.
 * 
 * The dollar and cent amounts are always returned, even if zero e.g. 
 * 100 will return one hundred dollards and zero cents, and 
 * 0.80 will return zero dollards and eighty cents
 * 
 * The result is printed out to the console.
 * 
 * @param String amount 
 */
function convertAmount(amount) {
    let inputArr = amount.split(`.`)
    let whole = inputArr[0];
    let deci = `0`
    if (typeof inputArr[1] !== `undefined`) {
        deci = inputArr[1].substring(0, 2)
    }

    // trim leading zeroes
    whole = +whole
    // recast whole as a string
    whole = `${whole}`

    let wholeString = checkAndConvertWhole(whole)
    if (wholeString === false) {
        console.log(`Only whole numbers up to 1000 are supported.`)
        return
    }

    /*
     * if the decimal string is only 1 character long it's assumed that the input was something like 0.8
     * and that the second character was not supplied, so we will set it add it before continuing
     */
    if (deci.length === 1) {
        deci += `0`;
    }
    const deciArray = deci.split(``).reverse()
    let decimalString = convertDoubleDigits(deciArray[0], deciArray[1])
    if (decimalString !== ``) {
        wholeString += ` and ${decimalString} cents`
    }

    console.log(`${wholeString}`)
}

/**
 * Checks whether the entered amount is the lowest limit (0) or
 * highest limit (1000) and returns that value as a string. If neither
 * limit is detected the amount is passed to another function that
 * will convert it to english words
 * 
 * @param {*} amount 
 * 
 * @returns String
 */
function checkAndConvertWhole(amount) {
    if (amount === `0`) {
        return `zero dollars`;
    }

    if (amount.length >= 4) {
        if (amount === `1000`) {
            return `one thousand dollars`
        } else {
            return false
        }
    }

    return convertWhole(amount)
}

/**
 * Converts a whole number to english words
 * 
 * @param String amount 
 * 
 * @returns String
 */
function convertWhole(amount) {
    let wholeNumbers = amount.split(``).reverse()
    let doubleDigits = convertDoubleDigits(wholeNumbers[0], wholeNumbers[1])

    let hundreds = ``;
    if (typeof wholeNumbers[2] !== `undefined`) {
        hundreds = convertHundreds(wholeNumbers[2])
    }

    let result = ``

    if (hundreds !== `` && doubleDigits !== ``) {
        result = `${hundreds} and ${doubleDigits}`
    } else {
        result = `${hundreds} ${doubleDigits}`.trim()
    }

    return `${result} dollars`;
}

/**
 * Converts a single digit to an english word
 * 
 * @param String digit 
 * 
 * @returns String
 */
function convertSingle(digit) {
    return singles[digit]
}

/**
 * Converts double digits to english words
 * 
 * @param String singles 
 * @param String tens 
 * 
 * @returns String
 */
function convertDoubleDigits(singles, tens) {
    let doubleDigits = ``
    if (typeof tens === `undefined` || tens === `0`) {
        doubleDigits = convertSingle(singles)
    } else {
        doubleDigits = convertTens(tens, singles)
    }
    return doubleDigits
}

/**
 * Converts double digits up to 99 to english words
 * 
 * @param String representsTens represents 10s
 * @param String representsOnes represents single digits
 * 
 * @returns String
 */
export function convertTens(representsTens, representsOnes) {
    if (representsOnes === `0`) {
        return doubleDigits[representsTens];
    } else if (representsTens === `1`) {
        return tens[representsOnes]
    } else {
        let single = convertSingle(representsOnes);
        let ten = doubleDigits[representsTens];
        return `${ten}-${single}`
    }
}

/**
 * Converts triple digit characters (representing hundreds) to english words.
 * 
 * @param String digit 
 * 
 * @returns String
 */
export function convertHundreds(digit) {
    return `${convertSingle(digit)} hundred`
}

// module.exports = sanitizeInput
// module.exports = convertAmount
// module.exports = checkAndConvertWhole
// module.exports = convertWhole
// module.exports = convertSingle
// module.exports = convertDoubleDigits
// module.exports = convertTens
// module.exports = convertHundreds
module.exports = {
    convertTens: convertTens,
    convertHundreds: convertHundreds
}