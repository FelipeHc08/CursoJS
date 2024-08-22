const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3)

const removidos = nomes.splice(3, 2);
const adicionados = nomes.splice(4, 1, 'Luíz', 'Fernanda');
const simulaPop = nomes.splice(-1, 1);
const simulaShift = nomes.splice(0, 1);
const simulaPush = nomes.splice(nomes.length, 1, 'push');  // não é prático, mas fica o aprendizado
const simulaUnshift = nomes.splice (0, 0, 'unshift');

/* OBS: se passar o valor do índice negativo o array será lido de trás pra frente [0] = [-5]
[1] = [-4] ... [4] = [-1]

Number.MAX_VALUE = valor máximo permitido no JS

OBS2: no console.log não será exibido ['Luíz'], e sim [], pois a função splice retorna os 
valores REMOVIDOS e não foi removido nenhum valor
*/

console.log(nomes, removidos, adicionados);