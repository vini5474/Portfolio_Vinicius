let peso = Number(prompt("Digite seu peso:"))
let altura = Number(prompt("Digite sua altura: "))
let imc = peso / (altura ** 2)
document.write(`Seu IMC é ${imc.toFixed(2)}`)