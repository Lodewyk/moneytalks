const convertDoubleDigits = require(`./convertDoubleDigits`)
const convertHundreds = require(`./convertHundreds`)

module.exports = {
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
    convertWholeAmount: function(amount) {
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
    
        return convertAfterChecks(amount)
    },
    convertAfterChecks: function(amount) {
        let wholeNumbers = amount.split(``).reverse()
        let doubleDigits = convertDoubleDigits.convertDoubleDigits(wholeNumbers[0], wholeNumbers[1])
    
        let hundreds = ``;
        if (typeof wholeNumbers[2] !== `undefined`) {
            hundreds = convertHundreds.convertHundreds(wholeNumbers[2])
        }
    
        let result = ``
    
        if (hundreds !== `` && doubleDigits !== ``) {
            result = `${hundreds} and ${doubleDigits}`
        } else {
            result = `${hundreds} ${doubleDigits}`.trim()
        }
    
        return `${result} dollars`;
    }
}

/**
 * Converts a whole number to english words
 * 
 * @param String amount 
 * 
 * @returns String
 */
//  function convertAfterChecks(amount) {
//     let wholeNumbers = amount.split(``).reverse()
//     let doubleDigits = convertDoubleDigits.convertDoubleDigits(wholeNumbers[0], wholeNumbers[1])

//     let hundreds = ``;
//     if (typeof wholeNumbers[2] !== `undefined`) {
//         hundreds = convertHundreds.convertHundreds(wholeNumbers[2])
//     }

//     let result = ``

//     if (hundreds !== `` && doubleDigits !== ``) {
//         result = `${hundreds} and ${doubleDigits}`
//     } else {
//         result = `${hundreds} ${doubleDigits}`.trim()
//     }

//     return `${result} dollars`;
// }