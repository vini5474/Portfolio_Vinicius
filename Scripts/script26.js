let lista_numeros = []
let contador = 5
let numero = 0

while (contador > 0) {
    numero = parseInt(prompt("Digite um número:"))
    lista_numeros.push(numero)
    contador -= 1
}
let dobro = lista_numeros.map(n => n * 2)

document.write(`Números digitados: `)
document.write(`${lista_numeros} <br>`)
document.write(`Dobros dos números: `)
document.write(dobro)