const convertSingle = require(`./convertSingle`)

module.exports = {
    convertHundreds: function(digit) {
        return `${convertSingle.convertSingle(digit)} hundred`
    }
}