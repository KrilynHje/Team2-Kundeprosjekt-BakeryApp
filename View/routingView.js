function updateView() {
  let view = document.getElementById('app')
  switch (model.app.currentPage) {
    case 'checkout':
      view.innerHTML = checkoutView()
      break
    case 'contact':
      view.innerHTML = contactView()
      break
    case null:
      view.innerHTML = mainView()
      break
    case 'basket':
      view.innerHTML = basketView()
      break
		case 'menu':
			view.innerHTML = showMenu()
			break
		case 'editProducts':
			view.innerHTML = showEditProducts()
			break
    case 'Orderconfirmation':
      view.innerHTML = orderConfirmedView()
      break
  }
}
