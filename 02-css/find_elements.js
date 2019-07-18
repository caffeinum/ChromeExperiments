// find first div on page
document.querySelector('div')

// find all images from page
document.querySelectorAll('img')

// find all images from page
document.querySelectorAll('img').forEach(node => node.remove())

// replace all paragraphs into "meow"
document.querySelector('p').forEach(node => node.innerText = 'meow')

document.querySelectorAll('span').forEach(node => node.innerText = 'meow')

// open https://github.com/caffeinum and run this:
document.querySelector('.vcard-fullname').innerText = 'MEOW'
