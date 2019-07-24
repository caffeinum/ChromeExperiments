window.onload = () => {

  const user_list_container = document.querySelector('.user-list')
  const user_template = document.querySelector('.user-list .user.template')

  const showUsers = users => {

    users.forEach(user => {
      const node = user_template.cloneNode(true)

      console.log('user', user)

      node.classList.remove('template')
      node.querySelector('.name').innerText = user.name
      node.querySelector('.username').innerText = user.username
      node.querySelector('.avatar').src = user.image

      user_list_container.appendChild(node)
    })
  }

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => showUsers(users))

}
