function navigateToBasket() {
	model.app.currentPage = "basket";
	updateView()
}

function navigateToCheckout() {
	model.app.currentPage = "checkout";
	updateView()
}

function navigateToMain() {
	model.app.currentPage = null;
	updateView()
}

function navigateToContact() {
	model.app.currentPage = "contact";
	updateView()
}
function navigateToOrdrerConfirmed() {
	model.app.currentPage = "orderconfirmation";
	updateView()
}
function navigateToContactInfo() {
	model.app.currentPage = "contactinfo";
	updateView()
}
function navigateToToppings() {
	model.app.currentPage = "toppings";
	updateView()
}

function resetRegisterInput() {
	model.input.menu.register.name = null
	model.input.menu.register.username = null
}
