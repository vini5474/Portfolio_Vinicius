let numero = parseInt(prompt("Digite um número:"))
let fatorial = 1
let contador = 2
while (contador <= numero) {
    fatorial *= contador
    contador++
}
document.write(`O fatorial de ${numero} é ${fatorial}.<br>`)