function soma(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

let parametro1 = parseFloat(prompt("insira o primeiro número a ser calculado."));
let parametro2 = parseFloat(prompt("Insira o segundo número a ser calculado."));

let operacao = prompt("Escolha a operação (digitar 1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão.");

if (operacao === "1") {
    alert(soma(parametro1,parametro2));
}else if(operacao === "2") {
    alert(subtrair(parametro1,parametro2));
}else if (operacao ==="3") {
    alert(multiplicar(parametro1,parametro2));
}else if(operacao === "4") {
    alert(dividir(parametro1,parametro2));
} else {
    alert("Operação digitada errada. Tente novamente.");
}
