const inss = (salario) => {
    if (salario <= 1580) {
        const insscalculado = salario * 0.075;
        return `Cálculo INSS: R$ ${insscalculado.toFixed(2)}.<br>`
    }
    else if (salario <= 2793.88) {
        const insscalculado = salario * 0.09 - 22.77;
        return `Cálculo INSS: R$ ${insscalculado.toFixed(2)}.<br>`
    }
    else if (salario <= 4190.84) {
        const insscalculado = salario * 0.12 - 106.59;
        return `Cálculo INSS: R$ ${insscalculado.toFixed(2)}.<br>`
    }
    else if (salario <= 8157.41) {
        const insscalculado = salario * 0.14 - 190.40;
        return `Cálculo INSS: R$ ${insscalculado.toFixed(2)}.<br>`
    }
    else {
        const insscalculado = 8157.41 * 0.14 - 190.40;
        return `Cálculo INSS (teto): R$ ${insscalculado.toFixed(2)}.<br>`
    }
}

const salario = parseFloat(prompt("Digite o seu salário:"))
const resultado = inss(salario) 
document.write(resultado)