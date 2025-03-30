let cambio = parseFloat(prompt("Digite o câmbio:"))
let dolar = parseFloat(prompt("Digite a quantidade de dólar para a conversão:"))
let conversao = cambio * dolar
document.write(`Seu dólar em real é R$${conversao}.<br>`)