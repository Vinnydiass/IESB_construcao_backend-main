// 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno.
// Considerar que a média é ponderada e que o peso das notas é 4 e 6.


const prompt = require('prompt-sync')();






const notaUm = Number(prompt('Qual sua nota 1? '));
const notaDois = Number(prompt('Qual sua nota 2? '));


let calculo1 = notaUm * 0.4;
let calculo2 = notaDois * 0.6;


let mediaFinal = calculo1 + calculo2


console.log(`Sua media final é: ${mediaFinal}`)