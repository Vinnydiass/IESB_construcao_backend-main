/* 5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
 Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor*/




const prompt = require('prompt-sync')();


const custoFabrica = Number(prompt('Qual o custo do carro de fabrica? '));
const porcDistribuidor = Number(prompt('Qual a porcentagem do distribuidor? '));
const porcImposto = Number(prompt('Qual o valor do imposto? '));


let porcentagemEm = porcDistribuidor + porcImposto
let porcentagemEmDivisão = porcentagemEm / 100


let custoBrutocarro = custoFabrica * porcentagemEmDivisão
let custoRealcarro = custoFabrica + custoBrutocarro


console.log(`O valor final do seu carro é: ${custoRealcarro}`)