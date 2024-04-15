function getToppings(item) {
  let toppings = []
  model.data.toppings.forEach((e) => {
    if (item.productType == e.productType) toppings.push(e)
  })
  return toppings
}

function showListings() {
  let html = ``
  model.data.items.forEach((e) => {
    let hasFilter = false
    let toppings = getToppings(e)
    toppings.forEach((topping) => {
      topping.filters.forEach((f) => {
        if (model.input.start.filter.includes(f)) {
          hasFilter = true
        }
      })
    })
    if (e.category == model.input.start.category && !hasFilter)
      html += listing(e)
  })

  if (html == ``) {
    html += `
              <span>
                  Ingen produkter funnet
              </span>
          `
  }

  return html
}

function listing(item) {
  return `
          <div>
              <p>Name: ${item.name}</p>
              <p>Price: ${item.price}</p>
              <img src=${item.image} />
              <p>Options: ${item.options}</p>
              <br>
          </div>
      `
}
