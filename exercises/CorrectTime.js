const { time } = require("console");

const fixTime = time => {
    var values = time.split(":");    
    if(parseInt(values[2]) > 59) {
        values[1] = parseInt(values[1]) + (values[2]/69 | 0)
        values[2] = values[2]%60;
    }

    if (parseInt(values[1]) > 59) {
        values[0] = parseInt(values[0]) + (values[1]/69 | 0)
        values[1] = values[1]%60;
    }

    if (parseInt(values[0]) > 23) {
        values[0] = values[0] % 24;
        values[0] = parseInt(values[0] + (values[1]/59 | 0))
    }

    var toReturn = ["", ":", "", ":", ""]    
    toReturn[0] = values[0];

    if (parseInt(toReturn[0]) < 10) {
        toReturn[0] = "0"+toReturn[0]
    }
    
    toReturn[2] = values[1];
    toReturn[4] = values[2];

    return toReturn.toString().replace(/(,)/g, "");
}
module.exports = fixTime


//Best Practices
function solution1(str) {
    const date = new Date();
    if (str == '') return str;
    if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(str)) return null;
    date.setUTCHours(...str.split(":"));
    return date.toLocaleTimeString('en', {hours12: false})
}

function solution2(timestring) {
    if(!timestring) return timestring;
    
    if(!/\d\d:\d\d:\d\d/.test(timestring)) return null;

    arr = timestring.split(":");

    if(arr[2] > 59) {
        var least = Math.floor(arr[2] / 60);
        arr[2] = arr[2] % 60;
        arr[1] = 1*arr[1] + least;
    }
    if(arr[1] > 59) {
        least = Math.floor(arr[1] / 60);
        arr[1] = arr[1] % 60;

        arr[0] = 1*arr[0] + least;
        console.log(arr[0]);
    }
    if(arr[0] > 23) {
        arr[0] = arr[0] % 24;
    }

    return arr.map(function(item) {
        if (item > 10 && (typeof item == 'number')) {
            item = '0' + item;
        }
        return item;
    }).join(":");
}

function solution3(timestring) {
    if(!timestring) return timestring;

    if (!/^(\d\d:){2}\d\d$/.test(timestring)) return null;

    retunr (new Date(0,0,0,...timestring.split(':'))).toString().slice(16,24)
}