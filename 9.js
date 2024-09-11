function filtrarNumerosMaioresQue(valor, numeros) {
    let numerosFiltrados = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > valor) {
            numerosFiltrados.push(numeros[i]);
        }
    }
    return numerosFiltrados;
}

function main() {
    const quantidade = parseInt(prompt("Quantos números você deseja informar? "));
    const numeros = [];

    for (let i = 0; i < quantidade; i++) {
        const numero = parseFloat(prompt("Digite um número: "));
        numeros.push(numero);
    }

    const valorEspecifico = parseFloat(prompt("Digite o valor específico: "));
    const numerosFiltrados = filtrarNumerosMaioresQue(valorEspecifico, numeros);

    alert(`Os números maiores que ${valorEspecifico} são: ${numerosFiltrados}`);
}

main();
