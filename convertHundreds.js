const convertSingle = require(`./convertSingle`)

module.exports = {
    /**
     * Converts triple digit characters (representing hundreds) to english words.
     * 
     * @param String digit 
     * 
     * @returns String
     */
    convertHundreds: function(digit) {
        return `${convertSingle.convertSingle(digit)} hundred`
    }
}