let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
input.addEventListener("keyup", () => {
    if (input && input.value) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }
});
var submit = document.getElementById("submit");
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
];

submit.onclick = function () {
    var num = parseInt(document.getElementById("int").value);
    let a = "";
    for (let i = 0; num; i++)
        while (num >= val[i]) (a += rom[i]), (num -= val[i]);
    document.getElementById("demo").innerHTML = a;
};

var change = document.getElementById("change");

change.onclick = function () {
    var lama = document.getElementById("roman").value;
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let result = 0;
    for (let i = 0; i < lama.length; i++) {
        roman[lama[i]] < roman[lama[i + 1]]
            ? (result -= roman[lama[i]])
            : (result += roman[lama[i]]);
    }
    document.getElementById("demo2").innerHTML = result;
};
