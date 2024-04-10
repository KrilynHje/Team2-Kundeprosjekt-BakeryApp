function showHeader() {
	return `
		<div id="header">
			
		</div>
	`
}

function showCategoryAndFilter() {
	return `
		<div id="filter-container">
		
		</div>
	`
}

function showListings() {
	let html = ``
	model.data.items.forEach((e) => {
		html += listing(e)
	})
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
