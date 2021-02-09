const createArrayOfTiers = num => {
    var arr = []
    do {
        arr.push(num)
    } while (num > 1) {
        arr.push(num/10 | 0)
        num = num/10 | 0
    }
}

module.exports = createArrayOfTiers;