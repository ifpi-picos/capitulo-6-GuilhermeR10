function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}
function verificarPalpite(palpite, numemoroSecreto) {
    if (palpite < numemoroSecreto){
        return "O númro secreto é maior!";
    }else if (palpite > numemoroSecreto){
        return "O numero secreto é menor!";
    }else{
        return "Correto! Você acertou!";
    }
}
function jogarjogoDeAdivinhacao() {
    const numemoroSecreto = gerarNumeroAleatorio();
    let tentativasRestantes = 10;

    console.log("Bem-vindo ao jogo de advinhação!");
    console.log("Tente advinhar o número secreto entre 1 e 100.");
    console.log(`Você tem ${tentativasRestantes} tentativas.`);

    while (tentativasRestantes > 0) {
        const palpite = parseInt(prompt("Digite o seu palpite:"));

        if (isNaN(palpite) || palpite < 1 || palpite > 100){
            console.log("Por favor, insira um número válido entre 1 e 100.");
            continue;
        }
        const resultado = verificarPalpite(palpite, numemoroSecreto)
        console.log(resultado)
        if (resultado === "Correto! Você acertou!"){
            break;
        }
        tentativasRestantes--;
        if (tentativasRestantes > 0){
            console.log(`Você ainda tem ${tentativasRestantes} tentativa(s)`);
        }else{
            console.log(`Fim de jogo! O número secreto era ${numemoroSecreto}.`);
        }
    }
}
jogarjogoDeAdivinhacao()