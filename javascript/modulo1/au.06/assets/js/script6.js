/* Condicional Ternário #19
 */
let isMember = false;

let shipping = isMember ? 2 : 10;
console.log(isMember ? 'Você é membro' : 'Você não é membro');
console.log("Frete: " + shipping);

//Outro exemplo
let age = 14;

let isAdult = ((age >= 18) ? 'Sim' : 'Não');
console.log(isAdult);