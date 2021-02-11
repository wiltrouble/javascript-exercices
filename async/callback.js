function hi(name, myCallback) {
    setTimeout(function() {
        console.log('hi ' + name)
        myCallback(name)
    }, 1500)
}

function talk(callbackTalk) {
    setTimeout(function() {
        console.log('bla, bla, bla')
        callbackTalk();
    }, 2000)
}

function bye(name, otherCalllback) {
    setTimeout(function() {
        console.log("Bye " + name)
        otherCalllback();
    }, 2500)
}