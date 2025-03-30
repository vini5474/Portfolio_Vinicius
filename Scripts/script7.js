let peso = parseFloat(prompt("Digite seu peso:"))
let altura = parseFloat(prompt("Digite sua altura: "))
let imc = peso / (altura ** 2)
document.write(`Seu IMC é ${imc.toFixed(2)}.<br>`)