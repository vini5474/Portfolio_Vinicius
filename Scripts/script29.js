let numeros_pares = []
let contador = 10

while (contador > 0) {
    let numero = parseInt(prompt("Digite um número:"))
    if (numero % 2 == 0) {
        numeros_pares.push(numero)
    }
    contador--
}
if (numeros_pares.length > 0) {
    document.write(`Números pares: ${numeros_pares}`)
}
else {
    document.write(`Todos os números são ímpares`)
}