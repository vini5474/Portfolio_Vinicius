let capital = parseFloat(prompt("Digite o capital inicial:"))
let taxa = parseFloat(prompt("Digite o valor da taxa em decimal:"))
let tempo = parseInt(prompt("Digite o tempo de duração:"))
let juros = capital * (1 + taxa) ** tempo
document.write(`Juros composto: R$ ${juros.toFixed(2)}`)