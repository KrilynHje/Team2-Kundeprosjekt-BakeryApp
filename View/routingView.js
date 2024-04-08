function updateView() {
	switch (model.app.currentPage) {
		case "checkout":
			checkoutView();
			break
	  case "contact":
			contactView();
			break
		case "main":
			mainView();
			break
		case "basket":
			basketView();
			break
	}
}
