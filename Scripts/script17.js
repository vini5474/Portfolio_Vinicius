let numero1 = parseFloat(prompt("Digite um número:"))
let numero2 = parseFloat(prompt("Digite um número:"))
let numero3 = parseFloat(prompt("Digite um número:"))
if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3)  {
    document.write(`Ordem crescente: ${numero3}, ${numero2}, ${numero1}`);
}
else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3) {
    document.write(`Ordem crescente: ${numero3}, ${numero1}, ${numero2}`)
}
else if (numero2 > numero1 && numero2 > numero3 && numero3 > numero1) {
    document.write(`Ordem crescente: ${numero1}, ${numero3}, ${numero2}`);
}
else if (numero3 > numero1 && numero3 > numero2 && numero1 > numero2) {
    document.write(`Ordem crescente: ${numero2}, ${numero1}, ${numero3}`);
}
else if (numero1 > numero2 && numero1 > numero3 && numero3 > numero2) {
    document.write(`Ordem crescente: ${numero2}, ${numero3}, ${numero1}`);
}
else if (numero3 > numero1 && numero3 > numero2 && numero2 > numero1) {
    document.write(`Ordem crescente: ${numero1}, ${numero2}, ${numero3}`);
}
else {
    document.write("Digite três números diferentes");
}