function navigateToBasket() {
	model.app.currentPage = "basket";
	updateView()
}

function navigateToCheckout() {
	model.app.currentPage = "checkout";
	updateView()
}

function navigateToMain() {
	model.app.currentPage = "main";
	updateView()
}

function navigateToContact() {
	model.app.currentPage = "contact";
	updateView()
}
