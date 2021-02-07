const evensAndOdds = (number) => {
    if (number % 2 === 0) {
        return (number >>> 0).toString(2);
    } else {
        return number.toString(16);
    }
}

// console.log(evensAndOdds(2))

// Best solutions 
const solution1 = n => n.toString(n % 2 ? 16: 2);
// console.log(solution1(2))

const solution2 = n => (n&1) ? n.toString(16) : n.toString(2)
// console.log(solution2(4))

const solution3 = n => n.toString(n%2*14+2);
// console.log(solution3(11))

function solution4(n) {
    return n.toString([2, 16][n % 2])
}
// console.log(solution4(15))


module.exports = evensAndOdds;
