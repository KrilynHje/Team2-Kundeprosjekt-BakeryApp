


function orderConfirmedView() {
    let html = ""
    html += /*HTML*/
        `
        <div class="page"> 
        ${showHeader()}
        <div class="checkout-page-align-grid "> 
        <h3>Takk for din Bestilling!</h3>
        
        <div class="order-containder"> 
        <div class="light-grey-rectangle"></div>
        </div>
        </div>
        
        ${makeRegisterNewUserButton()}
        </div>
    `
    return html
}




function makeRegisterNewUserButton() {
        return `<button class="checkout-button">Registrer</button>`
   
}