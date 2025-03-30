alert("Neste programa você precisa digitar três números diferentes.")
let numero1 = parseFloat(prompt("Digite um número:"))
let numero2 = parseFloat(prompt("Digite um número:"))
let numero3 = parseFloat(prompt("Digite um número:"))

while (numero1 === numero2 && numero2 === numero3) {
    alert("Você deve digitar três números diferentes.")
    numero1 = parseFloat(prompt("Digite um número:"))
    numero2 = parseFloat(prompt("Digite um número:"))
    numero3 = parseFloat(prompt("Digite um número:"))
}

if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3)  {
    document.write(`Ordem crescente dos números: ${numero3}, ${numero2}, ${numero1}<br>`)
}
else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3) {
    document.write(`Ordem crescente dos números: ${numero3}, ${numero1}, ${numero2}<br>`)
}
else if (numero2 > numero1 && numero2 > numero3 && numero3 > numero1) {
    document.write(`Ordem crescente dos números: ${numero1}, ${numero3}, ${numero2}<br>`)
}
else if (numero3 > numero1 && numero3 > numero2 && numero1 > numero2) {
    document.write(`Ordem crescente dos números: ${numero2}, ${numero1}, ${numero3}<br>`)
}
else if (numero1 > numero2 && numero1 > numero3 && numero3 > numero2) {
    document.write(`Ordem crescente dos números: ${numero2}, ${numero3}, ${numero1}<br>`)
}
else if (numero3 > numero1 && numero3 > numero2 && numero2 > numero1) {
    document.write(`Ordem crescente dos números: ${numero1}, ${numero2}, ${numero3}<br>`)
}