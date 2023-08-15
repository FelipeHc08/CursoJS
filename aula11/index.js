let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

console.log(varA, varB, varC);
/*
let varN = null;
varN = varA;
varA = varB; //A = B
varB = varC; // B = C
varC = varN;
console.log(varA, varB, varC);
*/

//FORMA DA CORREÇÃO:
/*const varATemp = varA;
varA = varB; //A = B
varB = varC; // B = C
varC = varATemp;// C = A

console.log(varA, varB, varC);
*/
//FORMA MAIS MODERNA
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)

