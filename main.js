let num1 = "";
let num2 = "";
let operator = "";

const digitBtn = document.querySelectorAll(".digits button");
const operatorBtn = document.querySelectorAll(".operators button");
const clearBtn = document.getElementById("clearBtn");
const display = document.querySelector(".display");

digitBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const digit = event.target.textContent;

        if (operator){
            num2 += digit;
            display.textContent = num2;
        }
        else {
            num1 += digit;
            display.textContent = num1;
        }
    });
});

operatorBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (num1 && num2){
            if (num2 === "0" && operator === "/") {
                display.textContent = "DBZERR";
                num1 = "";
                num2 = "";
                operator = "";
                return;
            }
            const result = operate(parseFloat(num1), parseFloat(num2), operator);
            display.textContent = result;
            num1 = String(result);
            num2 = "";
            operator = event.target.textContent;
        }
        else if (num1){
            operator = event.target.textContent;
        }

    });
});

clearBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    display.textContent = "000";
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return Math.round((num1 / num2) * 100) / 100;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return  divide(num1, num2);
        default:
            break;
    }
}