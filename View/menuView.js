const menuItems = [
  {
    name: 'Gå til startsiden',
    dataClick: navigateToMain,
  },
  {
    name: 'Login',
    dataClick: toggleLogin,
  },
  {
    name: 'Registrer',
    dataClick: toggleRegistration,
  },
]

function showMenuItems() {
  let html = `<div id="menu-items">`
  menuItems.forEach((e) => {
    html += `
			<div class="menu-item" data-click="${e.dataClick}">${e.name}</div>
		`
  })
  html += `</div>`
  return html
}

function showLogin() {}

function showRegister() {}

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
        menuItems.find((f) => f.name == e.target.innerText).dataClick()
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
