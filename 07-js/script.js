
const loadUsers = () =>
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => showUsers(users))

const showUsers = users => {
  const user_list_container = document.querySelector('.user-list')
  const user_template = document.querySelector('.user-list .user.template')

  users.forEach(user => {
    if (!user_template) return

    const node = user_template.cloneNode(true)

    console.log('user', user)

    node.classList.remove('template')
    node.querySelector('.name').innerText = user.name
    node.querySelector('.username').innerText = user.username
    // node.querySelector('.avatar').src = user.image

    user_list_container.appendChild(node)
  })
}

const switchPage = (contentHtml) => {

  const content_container = document.querySelector('#content')

  content_container.innerHTML = contentHtml

  setTimeout(() => loadUsers())
}

window.onload = () => {

  document.querySelectorAll('a').forEach(link => {
    link.onclick = event => {
      event.preventDefault()

      fetch(event.target.href)
        .then(response => response.text())
        .then(html => {
          console.log('html', html)

          const parser = new DOMParser()

          // Parse the text
          const doc = parser.parseFromString(html, "text/html")

          // You can now even select part of that html as you would in the regular DOM
          // Example:
          const contentHtml = doc.querySelector('#content').innerHTML

          switchPage(contentHtml)
        })

    }
  })

  loadUsers()
}
