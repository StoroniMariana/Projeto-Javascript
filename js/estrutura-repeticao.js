//for (inicializador; condição-saída; expressão-final){
    //executar o nosso código
//}

//Exercício

let notas = [2,5,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,50,20,10,5,7];
let total = 0;

for (let repeticoes = 0; repeticoes < notas.length; repeticoes++ ){
    total += notas[repeticoes];
}

console.log(`O total do seu dinheiro é ${total}`);