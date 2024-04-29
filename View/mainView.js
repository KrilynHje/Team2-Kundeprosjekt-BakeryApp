function showHeader() {
  return `
		<div id="header">
			<img onclick="navigateToMain()" src="images/baguetteLogo2.png" />
		  <div onclick="toggleMenu()" id="header-menu"></div>
		</div>
	`
}

function dropdownIsExpanded(elem, display = 'block') {
  if (elem.style.display == '') elem.style.display = 'none'
  return elem.style.display == display
}

function toggleDropdown() {
  let dropdown = document.getElementById('dropdown-content')
  let arrow = document.getElementById('down-arrow')
  arrow.innerText = !dropdownIsExpanded(dropdown) ? '🞁' : '🞃'
  dropdown.style.display = dropdownIsExpanded(dropdown) ? 'none' : 'block'
}

function toggleFilterDropdown() {
  let dropdown = document.getElementById('filter-dropdown')
  let isExpanded = dropdownIsExpanded(dropdown, 'flex')
  dropdown.style.display = isExpanded ? 'none' : 'flex'
  model.input.start.isEditingFilter = !isExpanded
}

function getItem(id) {
  return model.data.items.find((e) => e.id == id)
}

function getTopping(id) {
  return model.data.toppings.find((e) => e.id == id)
}

function getBasketTotalPrice() {
  let total = 0
  model.input.basket.forEach((e) => {
    let price = getItem(e.itemId).price
    if (e.selectedTopping != 0) price += getTopping(e.selectedTopping).price
    total += price * e.count
  })
  return total
}

function showCategorySelector() {
  let selectedCategory = model.app.categories[model.input.start.category]
  let html = `
		<div class="dropdown">
			<button onclick="toggleDropdown()" class="dropdown-btn">
				<div id="dropdown-btn-content">
					<span id="dropdown-btn-text">${selectedCategory}</span>
					<span id="down-arrow">🞃</span>
				</div>
			</button>
			<div id="dropdown-content">
	`

  model.app.categories.forEach((e) => {
    html += `
			<div onclick="setCategory(${model.app.categories.indexOf(e)})" class="dropdown-item">${e}</div>
		`
  })

  html += `
			</div>
		</div>
	`
  return html
}

function filterOptionButton(index, text) {
  let checked = model.input.start.filter.includes(index)
  if (text == 'Gluten') text = 'Glutenfri'
  else if (text == 'Dairy') text = 'Laktosefri'
  else if (text == 'Vegan') text = 'Vegansk'
  else text = 'Uten ' + text.toLowerCase()

  return `
		<div onclick="setFilter(${index})" class="filter-option-button">
			<input ${checked ? 'checked' : ''} value="${index}" type="checkbox" />
			<span>${text}</span>
		</div>
	`
}

function showFilterOptions() {
  let html = ``
  model.app.filters.forEach((e) => {
    html += `
			${filterOptionButton(model.app.filters.indexOf(e), e.name)}
		`
  })
  return html
}

function showFilterButton() {
  let html = `
		<div id="filter-button-container">
			<button onclick="toggleFilterDropdown()" id="filter-button">Filter</button>
			<div id="filter-dropdown" style="${model.input.start.isEditingFilter ? 'display: flex' : 'none'}">
				${showFilterOptions()}
			</div>
		</div>
	`

  return html
}

function showCategoryAndFilter() {
  return `
		<div id="filter-container">
			${showCategorySelector()}
			${showFilterButton()}
		</div>
	`
}

function basketButton() {
  let price = getBasketTotalPrice()
  let count = 0
  model.input.basket.forEach((e) => {
    count += e.count
  })
  return `
		<button class="button" onclick="navigateToBasket()">${count} | ${price}kr</button>
	`
}

function checkoutButton() {
  return `
		<button class="checkout-button button" onclick="navigateToCheckout()">Gå til kassen</button>
	`
}

function showMiniBasket() {
  if (model.input.basket.length == 0) return ''

  return `
		<div id="mini-basket">
			${basketButton()}
			${checkoutButton()}
		</div>
	`
}

function mainView() {
  return `
		<div class="page">
			${showHeader()}
			${showCategoryAndFilter()}
			${showListings()}
		</div>
		${showMiniBasket()}
	`
}
