function toggleMenu() {
  if (model.app.currentPage != 'menu')
    model.app.lastPage = model.app.currentPage
  model.app.currentPage =
    model.app.currentPage == 'menu' ? model.app.lastPage : 'menu'
  model.input.menu.isRegistering = false
  model.input.menu.isLogin = false
  updateView()
}

function toggleRegistration() {
  model.input.menu.isLogin = false
  model.input.menu.isRegistering = !model.input.menu.isRegistering
  updateView()
}

function toggleLogin() {
  model.input.menu.isRegistering = false
  model.input.menu.isLogin = !model.input.menu.isLogin
  updateView()
}

function getUser(user) {
  if (!user) return null
  return model.data.users.find((e) => e.username == user)
}

function menuBack() {
  model.input.menu.isRegistering = false
  model.input.menu.isLogin = false
  model.input.menu.register.username = null
  model.input.menu.register.password = null
  model.input.menu.login.username = null
  model.input.menu.login.password = null
  model.app.error = null
  updateView()
}

function login() {
  if (
    model.input.menu.login.username == null ||
    model.input.menu.login.password == null
  ) {
    model.app.error = 'Mangler brukernavn og/eller passord'
    updateView()
    return
  }

  let username = model.input.menu.login.username
  let password = model.input.menu.login.password

  if (
    model.data.users.find(
      (e) => e.username == username && e.password == password,
    )
  ) {
    model.app.user = username
    model.input.menu.login.username = null
    model.input.menu.login.password = null
    toggleMenu()
  } else {
    model.app.error = 'Feil brukernavn eller passord'
    updateView()
  }
}

function logout() {
  model.app.user = null
  navigateToMain()
}

function register() {
  if (
    model.input.menu.register.username == null ||
    model.input.menu.register.password == null
  ) {
    model.app.error = 'Mangler brukernavn og/eller passord'
    updateView()
    return
  }

  let username = model.input.menu.register.username
  let password = model.input.menu.register.password

  if (model.data.users.find((e) => e.username == username)) {
    model.app.error = 'Brukernavn tatt'
    updateView()
    return
  }

  let user = {
    username: username,
    password: password,
    admin: false,
  }

  model.data.users.push(user)

  model.input.menu.register.username = null
  model.input.menu.register.password = null
  model.app.user = user.username
  toggleMenu()
}
