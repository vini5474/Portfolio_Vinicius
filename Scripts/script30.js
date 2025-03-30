let lista_nome = []

for (let contator = 0; contator < 3; contator++) {
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