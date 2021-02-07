const fixTime = time => {
    var values = time.split("");
    values[1] = parseInt(values[1] + (values[2]/59 | 0))
}
module.exports = timeCorrect

console.log(fixTime("19:99:99"))