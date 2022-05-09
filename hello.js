console.log("Hello, world!")

console.log("== process.env.USER:", process.env.USER)
console.log("== process.env.SOME_ENV_VAR:", process.env.SOME_ENV_VAR)

console.log("== __dirname:", __dirname)
console.log("== __filename:", __filename)

function foo() {
    console.log("== Inside foo()")
}

foo()

var circle = require('./lib/circle')
console.log("== circle:", circle)
console.log("== circle.area(5):", circle.area(5))
console.log("== circle.circumference(5):", circle.circumference(5))

var figlet = require('figlet')
figlet("Hello, CS 290!", function (err, data) {
    if (!err) {
        console.log(data)
    }
})
