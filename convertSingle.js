
// const constants = require(`./constants`) // @TODO figure out how to make this work as a global
const singles = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`]


module.exports = {
    convertSingle: function(digit) {
        return singles[digit]
    }
}