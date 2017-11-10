var getMinutesSeconds = function(counter) {
    var ss = counter % 60
    var mm = (counter - ss) / 60
    var ssText = "" + ss
    if (ss < 10) {
        ssText = "0" + ssText
    }
    var mmText = "" + mm.toFixed(0)
    if (mm < 10) {
        mmText = "0" + mmText
    }
    return "" + mmText + ":" + ssText
};

module.exports = getMinutesSeconds