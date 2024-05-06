const menuItems = [
  {
    name: 'Gå til startsiden',
    altName: null,
    alt: false,
    dataClick: navigateToMain,
    altDataClick: null,
    needsAdmin: false,
  },
  {
    name: 'Handlekurv',
    altName: null,
    alt: false,
    dataClick: navigateToBasket,
    altDataClick: logout,
    needsAdmin: false,
  },
  {
    name: 'Login',
    altName: 'Logg ut',
    alt: false,
    dataClick: toggleLogin,
    altDataClick: logout,
    needsAdmin: false,
  },
  {
    name: 'Registrer',
    altName: null,
    alt: false,
    dataClick: toggleRegistration,
    altDataClick: null,
    needsAdmin: false,
  },
  // {
  //   name: 'Rediger produkter',
  //   altName: null,
  //   alt: false,
  //   dataClick: navigateToEditProducts,
  //   altDataClick: null,
  //   needsAdmin: true,
  // },
]

function showMenuItems() {
  let html = `<div id="menu-items">`
  menuItems.forEach((e) => {
    if (e.name == 'Login' && model.app.user != null) e.alt = true
    else if (e.name == 'Login') e.alt = false

    if (
      (e.needsAdmin && model.app.user && getUser(model.app.user).admin) ||
      !e.needsAdmin
    )
      html += `
			<div class="menu-item" data-click="${e.alt ? e.altDataClick : e.dataClick}">${e.alt ? e.altName : e.name}</div>
		`
  })
  html += `</div>`
  return html
}

function resolveDeepValue(obj, path) {
  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = obj[path[i]]
  }
  return obj
}

function showInput(label, type, field) {
  let withoutModel = field.split('.')
  withoutModel.shift()
  withoutModel = withoutModel.join('.')
  let value = resolveDeepValue(model, withoutModel)
  value = value != null ? value : ''
  return `
		<div class="input-container">
			<p>${label}</p>
			<input onchange="${field} = this.value; updateView()" value="${value}" class="input-box" type="${type}" placeholder="${label}" />
		</div>
	`
}

function showButton(text, field1, field2, onclick, field3 = undefined) {
  return `
		<button onclick="${onclick}" ${field1 == null || field2 == null || (field3 == null && field3 != undefined) ? 'disabled' : ''} style="width: 100%;" class="checkout-button button">${text}</button>
	`
}

function showUserError() {
  if (model.app.error == null) return ``
  return `
		<p id="error-user">${model.app.error}</p>
	`
}

function showLogin() {
  let html = `<div class="page">`

  html += `
		${showInput('Telefon', 'text', 'model.input.menu.login.username')}
		${showInput('Passord', 'password', 'model.input.menu.login.password')}
		${showButton('Login', model.input.menu.login.username, model.input.menu.login.password, 'login()')}
		${showUserError()}
	`

  html += `</div>`
  return html
}

function showRegister() {
  let html = `<div class="page">`

  html += `
		${showInput('Telefon', 'text', 'model.input.menu.register.username')}
    ${showInput('Navn', 'text', 'model.input.menu.register.name')}
		${showInput('Passord', 'password', 'model.input.menu.register.password')}
		${showButton('Registrer', model.input.menu.register.username, model.input.menu.register.password, 'register()', model.input.menu.register.name)}
		${showUserError()}
	`

  html += `</div>`
  return html
}

function showExit() {
  let html = `
		<div id="menu-header-container">
	`

  if (model.input.menu.isLogin || model.input.menu.isRegistering) {
    html += `
			<div onclick="menuBack()" class="menu-header-item"><-</div>
		`
  } else {
    html += `<div></div>`
  }

  html += `
			<div onclick="toggleMenu()" class="menu-header-item">X</div>
	`

  html += `</div>`
  return html
}

function showMenu() {
  let html = `
		<div id="menu">
			${showExit()}
	`

  if (model.input.menu.isRegistering) html += `${showRegister()}`
  else if (model.input.menu.isLogin) html += `${showLogin()}`
  else html += `${showMenuItems()}`

  waitForElement('#menu-items').then((elem) => {
    elem.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-item')) {
        let elem = menuItems.find(
          (f) =>
            f.name == e.target.innerText || f.altName == e.target.innerText,
        )
        if (elem.alt) elem.altDataClick()
        else elem.dataClick()
      }
    })
  })

  html += `</div>`
  return html
}

function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect()
        resolve(document.querySelector(selector))
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}
