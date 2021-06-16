'use strict';

const convertWholeAmount = require(`./convertWholeAmount`)
const convertDoubleDigits = require(`./convertDoubleDigits`)

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

// @TODO figure out how to make this work as a global
const doubleDigits = [`n/a`, `ten`, `twenty`, `thirty`, `fourty`, `fifty`, `sixty`, `seventy`, `eighty`, `ninety`]

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

    let wholeString = convertWholeAmount.convertWholeAmount(whole)
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
    let decimalString = convertDoubleDigits.convertDoubleDigits(deciArray[0], deciArray[1])
    if (decimalString !== ``) {
        wholeString += ` and ${decimalString} cents`
    }

    console.log(`${wholeString}`)
}