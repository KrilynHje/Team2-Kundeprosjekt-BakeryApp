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
