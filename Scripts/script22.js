const imposto = (salario) => {
    if (salario <= 2259.20) {
        return "Você está isento do imposto de renda.<br>"
    }
    else if (salario <= 2826.65) {
        const impostoCalculado = (salario * 0.075) - 158.40  
        return `O imposto a ser pago é R$ ${impostoCalculado.toFixed(2)}.<br>`
    }
    else if (salario <= 3751.05) {
        const impostoCalculado = (salario * 0.15) - 370.40  
        return `O imposto a ser pago é R$ ${impostoCalculado.toFixed(2)}.<br>`
    }
    else if (salario <= 4664.68) {
        const impostoCalculado = (salario * 0.225) - 651.73  
        return `O imposto a ser pago é R$ ${impostoCalculado.toFixed(2)}.<br>`
    }
    else if (salario > 4664.68) {
        const impostoCalculado = (salario * 0.275) - 884.96  
        return `O imposto a ser pago é R$ ${impostoCalculado.toFixed(2)}.<br>`
    }
    
}

const salario = parseFloat(prompt("Digite o seu salário:"))
const resultado = imposto(salario)  
document.write(resultado)
