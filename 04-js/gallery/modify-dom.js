const outputLinkList = function (links) {
  const link_container = document.querySelector('.link-container')
  const link_template = document.querySelector('.link.template')

  links.forEach(link => {
    const node = link_template.cloneNode(true)

    node.className = 'link'
    node.innerText = link
    node.href = link

    link_container.appendChild(node)
  })
}

const links = ['https://google.com', 'https://yandex.ru']

const toggleLinksContainer = (show = true) => {
  const link_container = document.querySelector('.link-container')

  if (show) {
    link_container.style.display = ''
  } else {
    link_container.style.display = 'none'
  }
}
