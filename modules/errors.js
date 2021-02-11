function isBreak() {
    try {
        return 4 + z;
    } catch (err) {
        console.log(err.message)
    }
    console.log("This is after the try/catch")
}

isBreak();