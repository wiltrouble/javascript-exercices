function fizzbuzz(n) {
    var arr = []
    for (var i = 1; i <= n; i++) {
      if(i % 5 === 0 && i % 3 === 0) {
        arr.push("FizzBuzz")
      } else if(i % 3 === 0) {
        arr.push("Fizz")
      } else if (i % 5 === 0){
        arr.push("Buzz")
      } else {
        arr.push(i)
      }
    }
    return arr;
}

// Best practices
const solution1 = n => {
    var i = 1;
    var arr = [];
    while(i <= n) {
        var fizz = (i % 3 == 0);
        var buzz = (i % 6 == 0);
        if( fizz  || buzz) {
            arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""))
        } else {
            arr.push(i)
        }
        i++;
    }
    return arr;
}

var fizzify = fizzbuzz = function(n) {
    return Array.apply(null, new Array(n)).map(function(e, i){
        return (++i % 3? '':'Fizz') + (i % 5? '':'Buzz') || i;
    });
}


function fizzbuzz(n) {
    var fizzified = []
    for (var i = 1; i <= n; i++) {
        var val = '';
        if (i % 3 == 0) val += 'Fizz';
        if (i % 5 == 0) val += 'Buzz';
        fizzified.push(vval || i);
    }
    return fizzified;
}
function fizzify(n) {
    return fizzbuzz(n);
}

module.exports = fizzbuzz;