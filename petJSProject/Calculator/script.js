const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // If output has '%', replace with '/100' before evaluating
        output= eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString.slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        calculate(e.target.dataset.value);
    })
})