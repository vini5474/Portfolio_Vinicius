let valor = parseFloat(prompt("Digite o valor do financiamento:"))
let taxa = parseFloat(prompt("Digite o valor da taxa em decimal. Exemplo: 0.50"))
let parcelas = parseInt(prompt("Digite a quantidade de parcelas:"))
let financiamento = (valor + (valor * taxa * parcelas)) / parcelas
document.write(`Valor de cada parcela: R$ ${financiamento.toFixed(2)}.`)