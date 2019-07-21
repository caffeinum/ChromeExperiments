window.onload = function () {
  // window.alert('Hi!')

  document.querySelector('.btn-mouse-over').onmouseover = () => window.alert('Mouse over me!')
  document.querySelector('.btn-mouse-out').onmouseout = () => window.alert('Cat after me!')

  // events are async
  document.querySelector('.btn-mouse-click').onclick = () => {
    window.alert('You clicked me! Instant reaction')
  }
  document.querySelector('.btn-mouse-click-delay').onclick = () => {
    syncDelay(4)
    window.alert('AFTER LONG 5 SECONDS DELAY I PRESENT MYSELF')
  }
  document.querySelector('.btn-mouse-click-async-delay').onclick = async () => {
    await asyncDelay(5)
    window.alert('I WAIT 5 SECONDS TOO, BUT I DONT FREEZE THE THREAD')
  }
}

const syncDelay = (sec = 1) => {
  console.time()

  let value = 0
  for(let index = 0; index <= 1e9 * sec; index++) {
    value += index
  }

  console.timeEnd()
}

const asyncDelay = (sec = 1) => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * sec)
  })
}
