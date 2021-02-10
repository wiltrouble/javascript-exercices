const bears = (x, s) => {
    var pairs = s.match(/(8B)|(B8)/g) || [];
    return [pairs.join(''), pairs.length >= x]
}

module.exports = bears;

// Best practices
const solution1 = (x,s) => [y=(s.match(/(8B)|(B8)/g) || []).join(''), y.length/2 >= x];

function solution2(x,s) {
    var count = 0;
    var out = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'B' && s[i+1] === '8' || s[i] === '8' && s[i+1] === 'B') {
            out += s[i] + s[i+1];
            i++;
            count++;
        }
    }
    return res = [out, count >= x ? true: false];
}

function solutio3(x, s) {
    let pairsOfBears = s.match(/8B|B8/g);
    pairsOfBears = (pairsOfBears === null? "": pairsOfBears.join(""));
    return [pairsOfBears, pairsOfBears.length/2 >= x];
}
