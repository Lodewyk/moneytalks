const constants = require(`./util/constants`)

module.exports = {
    /**
     * Converts a single digit to an english word
     * 
     * @param String digit 
     * 
     * @returns String
     */
    convertSingle: function(digit) {
        return constants.singles[digit]
    }
}