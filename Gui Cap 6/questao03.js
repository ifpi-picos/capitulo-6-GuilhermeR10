let num1 = parseFloat(prompt("Digite o primeiro número"))
let num2 = parseFloat(prompt("Digite o segundo número"))
let num3 = parseFloat(prompt("Digite o terceiro número"))

function calcularSoma(a, b, c) {
    return a + b + c
}
function calcularMedia(soma, totalNumeros) {
    return soma / totalNumeros
}
function formatarResultado(valor) {
    return valor
}
let soma = calcularSoma(num1, num2, num3)
let media = calcularMedia(soma, 3)
let resultadoFormatado = formatarResultado(media)

console.log(`A média dos números é ${resultadoFormatado}`)