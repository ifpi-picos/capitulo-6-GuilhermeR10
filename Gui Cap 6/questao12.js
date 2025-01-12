function adicao(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b !== 0){
        return a / b;
    }else{
        return "Erro: Divisão por zero!"
    }
}
function exibirResultado(resultado) {
    console.log("O resultado é", resultado)
}
function calculadora() {
    const operacao = prompt("Escolha a operação: +, -, *, /")
    const numero1 = parseFloat(prompt("Digite o primeiro número:"))
    const numero2 = parseFloat(prompt("Digite o segundo número:"))

    let resultado;

    switch (operacao) {
        case "+":
            resultado = adicao(numero1, numero2);
            break;
        case "-":
            resultado = subtrair(numero1, numero2);
            break;
        case "*":
            resultado = multiplicar(numero1,numero2);
            break;
        case "/":
            resultado = dividir(numero1, numero2);
            break;
        default:
            console.log("Operação inválida!");
            return;
    }
    exibirResultado(resultado);
}
calculadora()