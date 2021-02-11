async function hi(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('hi ' + name)
            resolve(name)
        }, 3000)  
    })
}

async function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla, bla, bla')
            resolve(name);
        }, 2000)
    })
}

async function bye(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Bye ' + name)
            resolve()
        }, 3500)
    })
}

async function main() {
    let name = await hi("wilson")
    await talk();
    await talk();
    await talk();
    await bye(name)
    console.log('Process finished')
}

console.log("Starting the process")
main()
console.log("Second instruccion")