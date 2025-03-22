let valor = parseFloat(prompt("Digite o valor do financiamento:"))
let taxa = parseFloat(prompt("Digite o valor da taxa em decimal:"))
let parcelas = parseInt(prompt("Digite a qauntidade de parcelas:"))
let financiamento = (valor + (valor * taxa * parcelas)) / parcelas
document.write(`Valor de cada parcela: R$ ${financiamento.toFixed(2)}`)