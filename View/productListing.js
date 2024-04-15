function getToppings(item) {
  let toppings = []
  model.data.toppings.forEach((e) => {
    if (item.productType == e.productType) toppings.push(e)
  })
  return toppings
}

function showListings() {
  let highlightedHtml = '';
  let normalHtml = '';

  Highlight(); 

  model.data.items.forEach((e) => {
    let hasFilter = false;
    let toppings = getToppings(e);
    toppings.forEach((topping) => {
      topping.filters.forEach((f) => {
        if (model.input.start.filter.includes(f)) {
          hasFilter = true;
        }
      });
    });
    
    if (e.category === model.input.start.category && !hasFilter) {
      const itemHtml = listing(e);
      if (model.data.highlightedItems.includes(e.id)) {
        highlightedHtml += itemHtml;
      } else {
        normalHtml += itemHtml;
      }
    }
  });

  let html = highlightedHtml + normalHtml;

  if (html === '') {
    html += `
      <span>
        Ingen produkter funnet
      </span>
    `;
  }

  return html;
}

function listing(item) {
  const highlightedClass = model.data.highlightedItems.includes(item.id) ? 'highlighted' : '';
  
  return `
    <div id="item-${item.id}" class="${highlightedClass}">
      <p>Name: ${item.name}</p>
      <p>Price: ${item.price}</p>
      <img src="${item.image}" />
      <p>Options: ${item.options}</p>
      <br>
    </div>
  `;
}

function Highlight() {
  for (let id of model.data.highlightedItems) {
    for (let item of model.data.items) {
      if (id === item.id) {
        const itemElement = document.getElementById(`item-${id}`);
      }
    }
  }
}