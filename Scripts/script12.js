let numero = Number(prompt("Digite um número:"))
let contador = 1
let x = 2
while (x <= numero) {
    contador *= x
    x++
}
document.write(`fatorial de ${numero} é ${contador}`)