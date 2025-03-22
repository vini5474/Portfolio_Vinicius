let idade = parseInt(prompt("Digite sua idade:"))
while (idade < 0) {
    alert("Idade inválida. Digite a idade correta")
    idade = parseInt(prompt("Digite sua idade:"))
}
if (idade >= 18) {
    document.write("Você tem idade suficiente para tirar a carteira de motorista")
}
else {
    document.write("Você não tem idade suficiente para tirar a carteira de motorista")
}