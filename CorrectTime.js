const timeCorrect = t => {
    var values = t.split(":")

    //console.log(values)
    if (values[1] > 59) {
        values[0] = parseInt(values[0])+1;
        values[1] = parseInt(values[1]-60)

        if (values[2] > 59) {
            values[2] = parseInt(values[2]-60)
        }
    }

    console.log(values)
}

timeCorrect("09:10:01");
timeCorrect("11:70:10");



