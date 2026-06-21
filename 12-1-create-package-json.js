//step 1 - npm version by npm -v,
//step 2 - npm init --(step by step give the input) // if you want defualt then run npm init -y
// step 3 - installed any package by npm like npm i lodash



const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItem = _.flatMapDeep(items)

console.log(newItem)