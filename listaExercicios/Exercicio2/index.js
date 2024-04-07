// 2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao total de eleitores.


const prompt = require('prompt-sync')();



const vBrancos = Number(prompt('Votos brancos? '));
const vNulos = Number(prompt('Votos nulos? '));
const vValidos = Number(prompt('Votos validos? '));

let totalEleitores = vBrancos + vNulos + vValidos;

let porcBrancos = (vBrancos / totalEleitores) * 100;
let porcNulos = (vNulos/ totalEleitores) * 100;
let porcValidos = (vValidos / totalEleitores) * 100;

console.log(`Total de eleitores: ${totalEleitores}`)
console.log(`Percentual em relação ao total de eleitores; 
Votos brancos: ${porcBrancos}%
Votos nulos: ${porcNulos}%
Votos validos: ${porcValidos}%
`)
