let nota1 = parseFloat(prompt("Digite a primeira nota:"))
let nota2 = parseFloat(prompt("Digite a segunda nota:"))
let media = (nota1 + nota2) / 2
if (media >= 8) {
    document.write(`Você está acima da média. <br>`)
    if (media % 2 == 0) {
        document.write(`A média é par.<br>`)
    }
    else {
        document.write("A média é ímpar.<br>")
    }
} 
else {
    document.write(`Você não está acima da média. <br>`)
    if (media % 2 == 0) {
        document.write(`A média é par.<br>`)
    }
    else {
        document.write("A média é ímpar.<br>")
    }
}