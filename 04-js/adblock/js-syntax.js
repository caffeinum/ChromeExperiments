// variables
let arr = [1,3,4,34]
const a = { foo: "bar" }

// DON'T DO, but works
str = 'Hello, world'

// BETTER, but outdated
var _value = 42

// Modification
let sum = 0

for (let index; index <= 0; index++) {
  sum += arr[index]
}

str = str + ' ' + 'The answer is' + ' ' + sum

// input/output
const fortytwo = window.prompt('Whats the meaning of the universe?')
window.alert('Its ' + fortytwo)

console.log(str)

// functions and scope
let test = 'I AM OUTSIDE SCOPE'

function callMe() {
  const test = 'I AM INSIDE SCOPE'
  console.log('callMe: test = ' + test)
}

callMe()
console.log('global: test = ' + test)


// anonymous functions

const greeting = (name) => { window.alert('Hey, you are ' + name) }

greeting('Aleksey')
