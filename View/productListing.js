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
  const ukensTilbudBox = model.data.highlightedItems.includes(item.id) ? '<div class="ukens-tilbud">Ukens Tilbud</div>' : '';

  return `
    <div id="item-${item.id}" class="item-container ${highlightedClass}">
      <img onclick="showProduct(${item.id})" src="${item.image}" class="image-container" />
      ${ukensTilbudBox}
      <p style="display: flex; justify-content: space-between;">
        <span>${item.name}</span>
        <span>fra ${item.price} kr per stykk</span>
      </p>
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