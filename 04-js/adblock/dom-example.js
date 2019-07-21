const links = document.querySelectorAll('a')

links.forEach(function (link, index) {
  link.append(', lets go!')
})

links.forEach(function (link, index) {
  // disable all the links
  link.href = '#'
  // wow-wow, event handler
  link.onclick = null
})
