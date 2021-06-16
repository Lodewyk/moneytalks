const convertSingle = require(`./convertSingle`)
const doubleDigits = [`n/a`, `ten`, `twenty`, `thirty`, `fourty`, `fifty`, `sixty`, `seventy`, `eighty`, `ninety`]
const tens = [`n/a`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`]

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
// function convertTens(representsTens, representsOnes) {
//     if (representsOnes === `0`) {
//         return doubleDigits[representsTens];
//     } else if (representsTens === `1`) {
//         return tens[representsOnes]
//     } else {
//         let single = convertSingle.convertSingle(representsOnes);
//         let ten = doubleDigits[representsTens];
//         return `${ten}-${single}`
//     }
// }