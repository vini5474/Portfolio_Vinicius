let idades_acima_media = []
let contador = 20
let idade_acima_media = 76 

while (contador > 0) {
    let idade = parseInt(prompt("Digite sua idade:"))
    if (idade >= idade_acima_media) {
        idades_acima_media.push(idade)
    }
    contador--
}
document.write(`Idades acima da média: ${idades_acima_media}.`)