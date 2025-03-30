let ano = parseInt(prompt("Digite o ano:"))
if (ano % 4 == 0) {
    document.write(`O ano de ${ano} é bissexto.`)
}
else {
    document.write(`O ano de ${ano} não é bissexto.`)
}