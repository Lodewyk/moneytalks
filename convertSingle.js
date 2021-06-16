// const constants = require(`./constants`) // @TODO figure out how to make this work as a global
const singles = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`]

module.exports = {
    /**
     * Converts a single digit to an english word
     * 
     * @param String digit 
     * 
     * @returns String
     */
    convertSingle: function(digit) {
        return singles[digit]
    }
}