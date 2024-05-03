function inputDate(input) {
    model.input.checkout.date = input
    console.log(input)
    validateDateInput(input)
}

function inputTime(input) {

    model.input.checkout.time = input
    validateTimeInput(input)
    updateView()
    console.log(input)
}
function validateTimeInput(time) {
    var minTime = "08:00";
    var maxTime = "15:00";
    if (time < minTime || time > maxTime) {
        alert("Vennligst velg et tidsrom innenfor åpningstiden: 08:00 - 16:00. \n (Siste utleveringsperiode er 1 time før stengetid)")

        model.input.checkout.time = null;
    }
}

function daysToSeconds(days) {
    return days * 60 * 60 * 24
}

function validateDateInput(date) {
    let inputDate = new Date(date);

    if (isNaN(inputDate)) {
        alert("Vennligst velg en dato for levering.");
        model.input.checkout.date = null;
        return false;
    }

    if (inputDate.getDay() == 0) {
        alert("Stengt på søndager.");
        model.input.checkout.date = null;
        return false;
    }

    return true;
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

var today = new Date().toISOString().split('T')[0];

