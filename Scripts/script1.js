let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))
let diferenca = numero1 - numero2
if (numero1 > numero2) {
    document.write(`A diferença entre ${numero1} e ${numero2} é igual a ${diferenca}`)
}
else {
    while (numero2 > numero1) {
        alert("O resultado será negativo. Digite o maior número primeiro")
        numero1 = Number(prompt("Digite o promeiro número:"))
        numero2 = Number(prompt("Digite o segundo número:"))
        diferenca = numero1 - numero2
    }
    document.write(`A diferença entre ${numero1} e ${numero2} é ${diferenca}`)
}