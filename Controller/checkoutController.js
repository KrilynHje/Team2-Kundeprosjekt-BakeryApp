function inputDate(input) {
    model.input.checkout.date = input
    console.log(input)
}

function inputTime(input) {
    model.input.checkout.time = input
    updateView()
    console.log(input)
}

function checkIfTakeout(isTakeout) {
    model.input.checkout.takeout = isTakeout
    updateView()
}

function nameInput(input) {
    model.input.checkout.name = input

    updateView()
}
function numberInput(input) {
    model.input.checkout.number = input
    updateView()
}