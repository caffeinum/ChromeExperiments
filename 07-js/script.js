

window.onload = () => {

  const content_container = document.querySelector('#content')
  const user_list_container = document.querySelector('.user-list')
  const user_template = document.querySelector('.user-list .user.template')

  const loadUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => showUsers(users))

  const showUsers = users => {

    users.forEach(user => {
      const node = user_template.cloneNode(true)

      console.log('user', user)

      node.classList.remove('template')
      node.querySelector('.name').innerText = user.name
      node.querySelector('.username').innerText = user.username
      // node.querySelector('.avatar').src = user.image

      user_list_container.appendChild(node)
    })
  }

  document.querySelectorAll('a').forEach(link => {
    link.onclick = event => {
      event.preventDefault()
      console.log('event href', event.target.href)

      fetch(event.target.href, { cors: true })
        .then(response => response.text())
        // .then(console.log)
        .then(html => {
          console.log('html', html)

          const parser = new DOMParser();

          // Parse the text
          const doc = parser.parseFromString(html, "text/html");

          // You can now even select part of that html as you would in the regular DOM
          // Example:
          const docArticle = doc.querySelector('#content').innerHTML;

          content_container.innerHTML = docArticle;

        })

    }
  })

  // loadUsers()
  document.on('DOMContentLoaded', () => loadUsers())
}
