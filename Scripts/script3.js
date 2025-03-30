let nota1 = parseFloat(prompt("Digite sua nota:"))
let nota2 = parseFloat(prompt("Digite sua nota:"))
if (nota1 % nota2 == 0) {
    document.write("A primeira nota é múltipla da segunda nota.")
}
else {
    document.write("A primeira nota não múltipla da segunda nota.")
}