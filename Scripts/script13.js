let operacao = prompt("Escolha uma operação pelo símbolo: /, *, -, +")
if (operacao == "/") {
    let numero1 = parseFloat(prompt("Digite um número:"))
    let numero2 = parseFloat(prompt("Digite um número:"))
    const calculadora = (numero1, numero2) => {
        return numero1 / numero2
    }
    document.write(`Resultado da divisão: ${calculadora(numero1, numero2)}`) 
}
else if (operacao == "*") {
    let numero1 = parseFloat(prompt("Digite um número:"))
    let numero2 = parseFloat(prompt("Digite um número:"))
    const calculadora = (numero1, numero2) => {
        return numero1 * numero2
    }
    document.write(`Resultado da multplicação: ${calculadora(numero1, numero2)}`)
}
else if (operacao == "-") {
    let numero1 = parseFloat(prompt("Digite um número:"))
    let numero2 = parseFloat(prompt("Digite um número:"))
    const calculadora = (numero1, numero2) => {
        return numero1 - numero2
    }
    document.write(`Resultado da subtração: ${calculadora(numero1, numero2)}`)
}
else if (operacao == "+") {
    let numero1 = parseFloat(prompt("Digite um número:"))
    let numero2 = parseFloat(prompt("Digite um número:"))
    const calculadora = (numero1, numero2) => {
        return numero1 + numero2
    }
    document.write(`Resultado da soma: ${calculadora(numero1, numero2)}`)
}
else {
    document.write("Operação inválida. Reinicie a página")
}