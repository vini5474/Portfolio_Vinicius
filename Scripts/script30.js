let lista_nome = []

for (let contador = 0; contador < 3; contador++) {
    let nome = prompt("Digite seu nome:").toLowerCase()
    lista_nome.push(nome)
}

let procurarNome = prompt("Digite um nome para pesquisa:").toLowerCase()
if (lista_nome.find(nome => nome === procurarNome)) {
    document.write(`O nome ${procurarNome} está dentro da lista.<br>`)
}
else {
    document.write(`O nome ${procurarNome} não está dentro da lista.<br>`)
}