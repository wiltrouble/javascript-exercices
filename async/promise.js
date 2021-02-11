function hi(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('hi ' + name)
            resolve(name)
        }, 3000)  
    })
}

function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla, bla, bla')
            resolve(name);
        }, 2000)
    })
}

function bye(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Bye ' + name)
            resolve()
        }, 3500)
    })
}

console.log("Starting process")
hi("wilson")
    .then(bye)
    .then(talk)
    .then(() => {
        console.log("Process finished")
    })
    .catch(e => {
        console.log("Have a error2")
    })