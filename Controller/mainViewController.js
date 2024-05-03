function setCategory(index) {
  model.input.start.category = index
  updateView()
}

function setFilter(index) {
  if (model.input.start.filter.includes(index)) {
    model.input.start.filter = model.input.start.filter.filter(
      (e) => e != index,
    )
  } else {
    model.input.start.filter.push(index)
  }
  updateView()
}

function showProduct(id) {
  model.app.chosenProduct = id
  model.app.currentPage = 'toppings'
  model.input.chosenToppings = []
  // makeToppingsArray(model.data.toppings.filter((topping) => topping.productType == model.data.items[model.app.chosenProduct].productType).length)
  updateView()
}

