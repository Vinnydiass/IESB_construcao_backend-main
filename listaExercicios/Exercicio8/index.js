/*8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura*/

const prompt = require('prompt-sync')();




const raio = Number(prompt('Raio? '));
const altura = Number(prompt('Altura? '));


const calculo = 3.14 * raio *  raio * altura;

console.log(`Caixa cilíndrica é: ${calculo}`)