const inss = (salario) => {
    if (salario <= 1580) {
        const insscalculado = (salario * 0.075) 
        return `Calculo INSS: R$ ${insscalculado.toFixed(2)}`
    }
    else if (salario <= 2793.88) {
        const insscalculado = (salario * 0.09) - 22.77  
        return `Calculo INSS: R$ ${insscalculado.toFixed(2)}`
    }
    else if (salario <= 4190.84) {
        const insscalculado = (salario * 0.12) - 106.59  
        return `Calculo INSS: R$ ${insscalculado.toFixed(2)}`
    }
    else if (salario <= 8157.41) {
        const insscalculado = (salario * 0.14) - 190.40  
        return `Calculo INSS: R$ ${insscalculado.toFixed(2)}`
    }
}

const salario = parseFloat(prompt("Digite o seu salário:"))
const resultado = inss(salario)  
document.write(resultado)
