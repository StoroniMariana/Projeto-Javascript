//COMO DECLARAR UMA VARIÁVEL DO TIPO STRING
let string = "texto";

//CONCATENAR STRINGS
let msg1 = "Olá! ";
let msg2 = "Seja Bem Vindo(a)!";
let concatenar = msg1 + msg2;

let pessoa = "Mariana, ";
//let msg3 = pessoa + "Seja bem vindo(a)!";
let msg3 = `${pessoa} Olá! Seja bem vindo(a)!`; //método mais atualizado

//EXERCÍCIO
let usuario = prompt("Qual seu nome?");
alert (`${usuario}, seja bem vindo(a)!`);
