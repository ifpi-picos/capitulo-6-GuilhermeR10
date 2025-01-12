//arrow function questao04
const exibirMensagem = () => ("olá pessoal!")
 console.log(exibirMensagem())

//arrow function questao03
let num1 = parseFloat(prompt("Digite o primeiro número"))
let num2 = parseFloat(prompt("Digite o segundo número"))
let num3 = parseFloat(prompt("Digite o terceiro número"))

const calcularSoma = (a, b, c) => a + b + c
    
const calcularMedia = (soma, totalNumeros) => soma / totalNumeros
    
const formatarResultado = (valor) => valor
   
let soma = calcularSoma(num1, num2, num3)
let media = calcularMedia(soma, 3)
let resultadoFormatado = formatarResultado(media)

console.log(`A média dos números é ${resultadoFormatado}`)

//arrow function questao06

const quadrado = (numero) => numero * numero
    
let resultado = quadrado(5)
console.log(`O quadrado do número informado é: ${resultado}`)