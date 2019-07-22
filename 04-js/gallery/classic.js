const syncDelay = (sec = 1) => {
  let value = 0
  for(let index = 0; index <= 1e9 * sec; index++) {
    value += index
  }
}

setTimeout(() => {
  console.log('6 second has passed!')
}, 6000)

syncDelay(5)

console.log('5 seconds has passed!')
