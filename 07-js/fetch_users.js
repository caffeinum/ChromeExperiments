const url = 'https://jsonplaceholder.typicode.com/users'
const users = [
  { name: 'Aleksey', username: 'caffeinum' },
  { name: 'Denis', username: 'jazz333' },
  { name: 'Jack', username: 'jazz333' },
]

window.onload = function (event) {
  const node = user_template.cloneNode(true)

  const user_list = document.querySelector('.user-list')
  const user_template = document.querySelector('.user.template')

  const showUser = info => {
    const node = user_template.cloneNode(true)

    node.classList.remove('template')
    node.querySelector('.name').innerText = info.name
    node.querySelector('.username').innerText = info.username

    user_list.appendChild( node )
  }

  const showUsers = (users) => {
    users.forEach(user => {
      showUser(user)
    })
  }

  const fetchUsers = (url) => {
    new Promise(resolve => resolve(users))
    // fetch(url).then(response => response.json())
      .then(users => {
        users.forEach(user => {
          showUser(user)
        })
      })
  }

  fetchUsers(url)

}
