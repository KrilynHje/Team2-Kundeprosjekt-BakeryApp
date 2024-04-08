function updateView() {
  let view = document.getElementById('app')
  switch (model.app.currentPage) {
    case 'checkout':
      view.innerHTML = checkoutView()
      break
    case 'contact':
      view.innerHTML = contactView()
      break
    case 'main':
      view.innerHTML = mainView()
      break
    case 'basket':
      view.innerHTML = basketView()
      break
  }
}
