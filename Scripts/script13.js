const calculadora = (simbolo, num1, num2) => {
    if (simbolo === "/") {
        const divisao = num1 / num2 
        if (num2 === 0) {
            return `O divisor não pode ser 0`
        }
        return `Resultado da divisão: ${divisao.toFixed(2)}`
    }
    else if (simbolo === "*") {
        const multiplicacao = num1 * num2  
        return `Resultado da multiplicação: ${multiplicacao.toFixed(2)}`
    }
    else if (simbolo === "-") {
        const subtracao = num1 - num2  
        return `Resultado de subtração: ${subtracao.toFixed(2)}`
    }
    else if (simbolo === "+") {
        const adicao = num1 + num2  
        return `Resultado da adição: ${adicao.toFixed(2)}`
    }
    else {
        return `Símbolo inválido`
    }
}

const simbolo = prompt("Digite o símbolo para a operação: /, *, -, +")
const num1 = parseFloat(prompt("Digite um número:"))
const num2 = parseFloat(prompt("Digite um número:"))
const resultado = calculadora(simbolo, num1, num2)  
document.write(resultado)