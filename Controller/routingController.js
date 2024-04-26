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
function navigateToOrdrerConformed() {
	model.app.currentPage = "orderconfirmation";
	updateView()
}
function navigateToContactInfo() {
	model.app.currentPage = "contactinfo";
	updateView()
}
