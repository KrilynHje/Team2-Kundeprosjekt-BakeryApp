

function orderConfirmedView() {
    let html = ""
    html += /*HTML*/
        `
        <div class="page"> 
        ${showHeader()}
        <div class="checkout-page-align-grid">
        <h3>Takk for din Bestilling!</h3>
        <div class="light-grey-rectangle"></div>
        </div>
        <div class="register-button-container">
        <p class="muted-text">Raskere bestilling nestegang? Registrer deg som bruker hos oss!</p>

        ${makeRegisterNewUserButton()}
       
        </div>
        </div>
    `
    return html
}



function makeRegisterNewUserButton() {

        return `<button class="checkout-button" onclick="navigateToContactInfo()">Registrer bruker</button>`
   
}
