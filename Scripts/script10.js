let multiplicador = parseInt(prompt("Digite um número entre 1 e 9:"))
document.write(`Tabuada do número ${multiplicador}: <br>`)

for (let multiplicando = 0; multiplicando <= 10; multiplicando++) {
    let produto = multiplicador * multiplicando
    document.write(`${multiplicador} X ${multiplicando} = ${produto} <br>`)
}