let conjunto_numeros = []
let contador = 8
let numero = 0
let total = 0

while (contador > 0) {
    numero = parseInt(prompt("Digite um número:"))
    conjunto_numeros.push(numero)
    contador -= 1
}

for (let i = 0; i < conjunto_numeros.length; i++) {
    total += conjunto_numeros[i]
}
let media = total / conjunto_numeros.length
document.write(`Média aritmédica do conjunto: ${media}.`)