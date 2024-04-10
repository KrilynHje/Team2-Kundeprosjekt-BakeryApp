function showHeader() {
  return `
		<div id="header">
			
		</div>
	`
}

function dropdownIsExpanded() {
  let dropdown = document.getElementById('dropdown-content')
  if (dropdown.style.display == '') dropdown.style.display = 'none'
  let display = dropdown.style.display
  return display == 'block'
}

function toggleDropdown() {
  let dropdown = document.getElementById('dropdown-content')
  let arrow = document.getElementById('down-arrow')
  arrow.innerText = !dropdownIsExpanded() ? '🞁' : '🞃'
  dropdown.style.display = dropdownIsExpanded() ? 'none' : 'block'
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

  let index = 0
  model.app.categories.forEach((e) => {
    html += `
			<div onclick="setCategory(${index})" class="dropdown-item">${e}</div>
		`
    index += 1
  })

  html += `
			</div>
		</div>
	`
  return html
}

function showCategoryAndFilter() {
  return `
		<div id="filter-container">
			${showCategorySelector()}
		</div>
	`
}

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
		</div>
	`
}

function mainView() {
  return `
		<div>
			${showHeader()}
			${showCategoryAndFilter()}
			${showListings()}
		</div>
	`
}
