let numero = Number(prompt("Digite um número entre 1 e 9"))
document.write(`Tabuada do número ${numero}: <br>`)
for (let x = 0; x <= 10; x++) {
    let multiplicacao = numero * x
    document.write(`${numero} X ${x} = ${multiplicacao} <br>`)
}