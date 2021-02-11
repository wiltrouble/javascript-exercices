const fileSystem = require('fs');

function read(path, callback) {
    fileSystem.readFile(path, (error, data) => {
        console.log(data.toString())
    })
}

//read(__dirname + '/file.txt')

function write(path, content, callback) {
    fileSystem.writeFile(path, content, function (error) {
        if (error) {
            console.error("I cant write");
        } else {
            console.log("Succes write")
        }
    });
}

//write(__dirname + '/file2.txt', 'Im a new file, with this row of text', console.log)

function deleteFile(path, callback) {
    fileSystem.unlink(path, callback)
}

deleteFile(__dirname+'/file2.txt', console.log)

