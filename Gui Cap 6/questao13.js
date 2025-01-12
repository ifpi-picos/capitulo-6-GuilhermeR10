function realParaDolar(real, cotacaoDoLar) {
    return real * cotacaoDoLar;
}
let valorReal = 7.00;
let cotacoa = 6.11;

let total = realParaDolar(valorReal, cotacoa)
alert(`O valor em real é R$: ${valorReal} o valor em dólar U$ é ${total}`);