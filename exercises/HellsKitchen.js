/**
 
Description:

Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

 */

function gordon(a) {
    var flag = a.replace(/[a]/gm, '@')
    var flag = flag.replace(/[e]/gm, '*')
    var flag = flag.replace(/[i]/gm, '*')
    var flag = flag.replace(/[o]/gm, '*')
    var flag = flag.replace(/[u]/gm, '*')
    return flag.toUpperCase().replace(/(\s)/gm, '!!!! ')+'!!!!';
}

module.exports = gordon;

// Best practices
function solution1(ramsay) {
    return ramsay.toUpperCase().replace(/\w+/g, '$&!!!!')
    .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
}

const solution2 = str => str.toUpperCase().replace(/a/g, x => '@')
    .replace(/[EOUI]/g, x => '*').split(' ').map(el => el + '!!!!').join(' ');


const solution3 = a => a.toUpperCase().split(' ').map(a => a.replace(/A/g, '@')
    .replace(/[EIOU]/g, '*') + "!!!!").join(' ');

    