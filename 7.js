
let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Insira um número inteiro:"));
    numeros.push(numero);
}

let maiorNumero = Math.max(...numeros);
let menorNumero = Math.min(...numeros);

alert(`O maior número inserido é: ${maiorNumero}`);
alert(`O menor número inserido é: ${menorNumero}`);
