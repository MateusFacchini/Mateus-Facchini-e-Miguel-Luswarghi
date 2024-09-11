function encontrarMedia(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length;
}

function main() {
    const quantidade = parseInt(prompt("Quantos números você deseja informar? "));
    const numeros = [];

    for (let i = 0; i < quantidade; i++) {
        const numero = parseFloat(prompt("Digite um número: "));
        numeros.push(numero);
    }

    const media = encontrarMedia(numeros);
    alert(`A média dos números informados é: ${media}`);
}

main();
