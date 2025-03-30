let ano = parseInt(prompt("Digite o ano:"))
if (ano % 4 == 0) {
    document.write(`O ano de ${ano} é bissexto.<br>`)
}
else {
    document.write(`O ano de ${ano} não é bissexto.<br>`)
}