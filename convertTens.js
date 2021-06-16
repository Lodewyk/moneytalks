const constants = require(`./util/constants`)
const convertSingle = require(`./convertSingle`)

module.exports = {
    /**
     * Converts double digits up to 99 to english words
     * 
     * @param String representsTens represents 10s
     * @param String representsOnes represents single digits
     * 
     * @returns String
     */
    convertTens: function(representsTens, representsOnes) {
        if (representsOnes === `0`) {
            return constants.doubleDigits[representsTens];
        } else if (representsTens === `1`) {
            return constants.tens[representsOnes]
        } else {
            let single = convertSingle.convertSingle(representsOnes);
            let ten = constants.doubleDigits[representsTens];
            return `${ten}-${single}`
        }
    }
}