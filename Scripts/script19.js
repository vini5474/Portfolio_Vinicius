const cedulas = [200, 100, 50, 20, 10, 5, 1]
const quantidadeCedulas = {}

let valor = parseInt(prompt("Digite um valor:"))
document.write(`Quantidade de cédulas necessárias para formar ${valor}:<br>`)

for (let i = 0; i < cedulas.length; i++) {
    const cedula = cedulas[i]
    const quantidade = Math.floor(valor / cedula)
    
    if (quantidade > 0) {
        quantidadeCedulas[cedula] = quantidade
        valor = valor - (quantidade * cedula)
    }
}

for (const cedula in quantidadeCedulas) {
    document.write(`R$${cedula}: ${quantidadeCedulas[cedula]} cédulas<br>`)
}