console.log("Calculator");
let i = 0;
alert("Welcome to primitive calculator");
const cycle = prompt("Input the number of cycles. Only number, please.");
for (let i = 0; i < cycle; i++) {
    console.log("cycle - " + i);
    const firstoper = prompt("Input first operand. Only number, please.");
    console.log("Is first operator Number? - " + !isNaN(firstoper));
    if (Number(firstoper)) {
        alert("ok");
    }
    else {
        alert("Only number, please.");
    }
    const operator = prompt("Input one of operators + - * /");
    const secondoper = prompt("Input second operand. Only number, please.");
    console.log("Is second  operator Number? - " + !isNaN(secondoper));
    if (Number(secondoper)) {
        alert("ok");
    }
    else {
        alert("Only number, please.");
    }
    let num1 = Number(firstoper);
    let num2 = Number(secondoper);
    switch (operator) {
        case "+": result = (num1 + num2); break;
        case "-": result = (num1 - num2); break;
        case "*": result = (num1 * num2); break;
        case "/": result = (num1 / num2); break;
        default: alert("Input only operators + - * /");
    }
    console.log(num1 + operator + num2 + "=" + result);
    if (Number(result)) {
        console.log("Good");
    }
    else {
        console.log("Я предупреждал :Р");
    }
}