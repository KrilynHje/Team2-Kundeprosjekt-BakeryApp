function toggleMenu() {
	model.app.currentPage = model.app.currentPage == "menu" ? null : "menu"
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

function menuBack() {
	model.input.menu.isRegistering = false
	model.input.menu.isLogin = false
	updateView()
}
