var idade = parseInt(prompt("Digite sua idade"))

if ((idade >  0) && (idade < 12)) {
    alert("Você é criança")
}
else if ((idade > 13) && (idade < 17)) {
    alert ("Você é adolescente")
}
else if ((idade > 18) && (idade < 64)) {
    alert ("Você é adulto")
}
else if (idade > 65) {
    alert ("Você é idoso")
}
else {
    alert("Você digitou um número invalido")
}