const convertSingles = require(`./convertSingles`)

const doubleDigits = [`n/a`, `ten`, `twenty`, `thirty`, `fourty`, `fifty`, `sixty`, `seventy`, `eighty`, `ninety`]

/**
 * Converts double digits up to 99 to english words
 * 
 * @param String representsTens represents 10s
 * @param String representsOnes represents single digits
 * 
 * @returns String
 */
//  function convertTens(representsTens, representsOnes) {
//     if (representsOnes === `0`) {
//         return doubleDigits[representsTens];
//     } else if (representsTens === `1`) {
//         return tens[representsOnes]
//     } else {
//         let single = convertSingle(representsOnes);
//         let ten = doubleDigits[representsTens];
//         return `${ten}-${single}`
//     }
// }

module.exports = {
    convertTens: function(representsTens, representsOnes) {
        if (representsOnes === `0`) {
            return doubleDigits[representsTens];
        } else if (representsTens === `1`) {
            return tens[representsOnes]
        } else {
            let single = convertSingle.convertSingle(representsOnes);
            let ten = doubleDigits[representsTens];
            return `${ten}-${single}`
        }
    }
}