function contarPalavraEspecifica(palavras, palavraEspecifica) {
    let contagem = 0;
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === palavraEspecifica) {
            contagem++;
        }
    }
    return contagem;
}

function main() {
    const quantidade = parseInt(prompt("Quantas palavras você deseja informar? "));
    const palavras = [];

    for (let i = 0; i < quantidade; i++) {
        const palavra = prompt("Digite uma palavra: ");
        palavras.push(palavra);
    }

    const palavraEspecifica = prompt("Digite a palavra específica que deseja contar: ");
    const contagem = contarPalavraEspecifica(palavras, palavraEspecifica);

    alert(`A palavra "${palavraEspecifica}" aparece ${contagem} vezes no vetor.`);
}

main();
