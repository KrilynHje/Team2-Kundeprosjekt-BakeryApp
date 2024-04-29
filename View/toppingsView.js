function toppingsView() {
    let html = ""
    html += /*HTML*/
        `
        <div class="page">
        ${showHeader()}


        <button onclick="addOrRemoveCount('-')">-</button>
        <button onclick="addOrRemoveCount('+')">+</button>
    
    </div>
    `
    return html
}

function addOrRemoveCount(operator){
    if(model.inputs.toppingsCount == 0) return
}