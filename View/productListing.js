function showListings() {
    let html = ``
    model.data.items.forEach((e) => {
      if (e.category == model.input.start.category) html += listing(e)
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