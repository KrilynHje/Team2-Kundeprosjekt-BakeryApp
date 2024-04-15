function showHeader() {
  return `
		<div id="header">
			<img src="images/baguetteLogo2.png" />
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
  model.input.start.isEditingFilter = false
}

function toggleFilterDropdown() {
  let dropdown = document.getElementById('filter-dropdown')
  let isExpanded = dropdownIsExpanded(dropdown, 'flex')
  dropdown.style.display = isExpanded ? 'none' : 'flex'
  model.input.start.isEditingFilter = !isExpanded
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

function mainView() {
  return `
		<div>
			${showHeader()}
			${showCategoryAndFilter()}
			<div id="main-page">
				${showListings()}
			</div>
		</div>
	`
}
