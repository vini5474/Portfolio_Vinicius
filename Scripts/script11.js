let jogador1 = prompt("Jogador 1. Digite pedra, papel ou tesoura:")
let jogador2 = prompt("Jogador 2. Digite pedra, papel ou tesoura:")

if (jogador1 == "pedra" && jogador2 == "tesoura") {
    document.write(`Jogador 1 escolheu: ${jogador1}. <br> Jogador 2 escolheu: ${jogador2}. <br>`)
    document.write(`Jogador 1 venceu.<br>`)
}
else if (jogador2 == "pedra" && jogador1 == "tesoura") {
    document.write(`Jogador 1 escolheu: ${jogador1}. <br> Jogador 2 escolheu: ${jogador2}. <br>`)
    document.write(`Jogador 2 venceu.<br>`)
}
else if (jogador1 == "papel" && jogador2 == "tesoura") {
    document.write(`Jogador 1 escolheu: ${jogador1}. <br> Jogador 2 escolheu: ${jogador2}. <br>`)
    document.write(`Jogador 2 venceu.<br>`)
}
else if (jogador2 == "papel" && jogador1 == "tesoura") {
    document.write(`Jogador 1 escolheu: ${jogador1}. <br> Jogador 2 escolheu: ${jogador2}. <br>`)
    document.write(`Jogador 1 venceu.<br>`)
}
else if (jogador1 == "papel" && jogador2 == "papel") {
    document.write(`Jogador 1 escolheu: ${jogador1}. <br> Jogador 2 escolheu: ${jogador2}. <br>`)
    document.write(`Houve um empate.<br>`)
}
else if (jogador1 == "tesoura" && jogador2 == "tesoura") {
    document.write(`Jogador 1 escolheu: ${jogador1}. <br> Jogador 2 escolheu: ${jogador2}. <br>`)
    document.write(`Houve um empate.<br>`)
}
else if (jogador1 == "pedra" && jogador2 == "pedra") {
    document.write(`Jogador 1 escolheu: ${jogador1}. <br> Jogador 2 escolheu: ${jogador2}. <br>`)
    document.write(`Houve um empate.<br>`)
}
else if (jogador1 == "papel" && jogador2 == "pedra") {
    document.write(`Jogador 1 escolheu: ${jogador1}. <br> Jogador 2 escolheu: ${jogador2}. <br>`)
    document.write(`Jogador 1 venceu.<br>`)
}
else if (jogador1 == "pedra" && jogador2 == "papel") {
    document.write(`Jogador 1 escolheu: ${jogador1} <br> Jogador 2 escolheu: ${jogador2} <br>`)
    document.write(`Jogador 2 venceu.<br>`)
}