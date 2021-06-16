const convertSingle = require(`./convertSingle`)
const convertTens = require(`./convertTens`)

module.exports = {
    /**
     * Converts double digits to english words
     * 
     * @param String singles 
     * @param String tens 
     * 
     * @returns String
     */
    convertDoubleDigits: function(singles, tens) {
        let doubleDigits = ``
        if (typeof tens === `undefined` || tens === `0`) {
            doubleDigits = convertSingle.convertSingle(singles)
        } else {
            doubleDigits = convertTens.convertTens(tens, singles)
        }
        return doubleDigits
    }
}