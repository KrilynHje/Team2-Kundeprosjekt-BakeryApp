function getOrder(id) {
  return model.data.orders.find((e) => e.orderId == id)
}

function calculateOrderPrice(id, count, topping) {
  let item = getItem(id)
  let price = item.price
  topping.forEach((t) => {
    price += getTopping(t.id).price * t.count
  })
  return price * count
}

function calculateTotalOrderPrice(id) {
  let order = getOrder(id)
  let total = 0
  order.products.forEach((e) => {
    total += calculateOrderPrice(e.itemId, e.count, e.selectedTopping)
  })
  return total
}
function orderConfirmedView() {
  let html = ''
  html +=
    /*HTML*/
    `
        <div class="page"> 
        	${showHeader()}
        	<div class="checkout-page-align-grid">
        		<h3>Takk for din Bestilling!</h3>
        		<div class="light-grey-rectangle">
        			${showOrderItems(model.input.currentOrder)}
        			<div class="order-confirmed-display">
            		<span style="Border: top; ">Total:</span>
            		<span>${calculateTotalOrderPrice(model.input.currentOrder)}kr</span>
        			</div>
        		</div>
						${drawShowRegister()}
        	</div>
        </div>
    `
  return html
}

function drawShowRegister() {
	if (model.app.user) return ``

  return `
  	<div class="register-button-container">
  		<p class="muted-text">Raskere bestilling nestegang? Registrer deg som bruker hos oss!</p>
  		${makeRegisterNewUserButton()}
  	</div>
	`
}

function drawItemOrder(item, count, topping) {
  return `   
        <div class="order-confirmed-display">
            <li>${item.name} x${count}</li>
            <span>${calculateOrderPrice(item.id, count, topping)}kr</span>
        </div>
    `
}

function makeRegisterNewUserButton() {
  return `<button class="checkout-button" onclick="navigateToContactInfo()">Registrer bruker</button>`
}

function showOrderItems(id) {
  let html = `<ul>`
  let order = getOrder(id)

  order.products.forEach((e) => {
    let item = getItem(e.itemId)
    html += drawItemOrder(item, e.count, e.selectedTopping)
  })

  html += `</ul>`
  return html
}
