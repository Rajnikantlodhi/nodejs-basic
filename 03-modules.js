// Modules
// CommonJS, every file is Module (by defualt)
// Modules - Encapsulation code (only share minimum)

const names = require('./04-name')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
const sum = require('./07-mind-generate')

console.log(sum)
sayHi('sum')
sayHi(names.peter)
sayHi(names.john)