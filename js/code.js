function clearScreen() {
    document.getElementById("result").value = "";
    allowDecimal = true;
}

function display(value) {
    document.getElementById("result").value += value;
}

function displayOperator(value) {
    document.getElementById("result").value += value;
    allowDecimal = true;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    if (document.getElementById("result").value.includes('.')) {
        allowDecimal = false;
    } else {
        allowDecimal = true;
    }
}

let allowDecimal = true;

function displayDecimal(value) {
    if (allowDecimal) {
        document.getElementById("result").value += value;
        allowDecimal = false;    
    }
}

