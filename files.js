var fs = require('fs')

fs.readFile('./lib/circle.js', 'utf8', function (err, data) {
    if (err) {
        throw err
    } else {
        console.log("== async file contents:", data)
    }
})
var four = 2 + 2
console.log("== four:", four)

var fileContents = fs.readFileSync('./lib/circle.js', 'utf8')
console.log("== sync fileContents:", fileContents)
var five = 2 + 3
console.log("== five:", five)
