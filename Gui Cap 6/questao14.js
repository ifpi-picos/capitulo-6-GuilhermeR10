function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function classificarIMC(imc) {
    if (imc < 18.5){
        return "Você está abaixo do peso."
    }else if (imc >= 18.5 && imc < 24.9){
        return "Você está no peso normal."
    }else if (imc >= 25 && imc < 29.9){
        return "Você está com sobrepeso."
    }else{
        return "Você está obeso."
    }
}
function exibirResultado(imc, classificacao) {
    console.log (`Seu IMC é: ${imc}`)
    console.log (classificacao)
}
function calcularEExibirIMC() {
    const peso = parseFloat(prompt("Digite seu peso em kg:"))
    const altura = parseFloat(prompt("Digite sua altura em metros:"))
    if (isNaN(peso) || isNaN(altura)|| peso <= 0 || altura <= 0){
        console.log("Por favor, insira valores válidos para peso e altura.")
        return;
    }
    const imc = calcularIMC(peso, altura)
    const classificacao = classificarIMC(imc)
    exibirResultado(imc, classificacao)
}
calcularEExibirIMC()