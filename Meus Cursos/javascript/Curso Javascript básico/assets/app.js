/****** Variaveis***********/
/* var rawston = 'Rawston Marinho';
console.log(rawston);
//mudando de valor!!
rawston = true;
console.log(rawston);

rawston = 3.14;
console.log(rawston);

rawston = 1975;
console.log(rawston); */

/***********Concatenação!!************/

//var name = 'Rawston';
/* var name = prompt("O seu nome?");
var age = prompt("Qual su idade?"); */

//var age = 47;
/* var ageTwo = 90;

console.log('o ' + name + ' tem: ' + age + ' de idade.');
console.log(age + ' ' + ageTwo);
console.log(name + ' ' + age); */

/************* Operadores Aritméticos JavaScript *********/

var n1 = 12;
var n2 = 4;
// console.log(n1 + n2 + 4);
// console.log(n1 - n2 - 4);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(4 ** 3);

/* Ordem de Prioridade Operadores Aritméticos JavaScript
 */
// console.log((4 - 3 + 2) * 2);
// console.log((4 - 2 + 2) / 2);
// console.log(((4 - 2 + 2) / 2 + 2) * 3);

/* Decremento */
// console.log(n1++);
// console.log(n1);
/* Pré Incremeto */
// console.log(++n1);

/* pós Decremento */
// console.log(n1--);
// console.log(n1);
// console.log(--n1);

/* Lógicos */
var n1 = 12;
// console.log(typeof n1 == "number" && n1 == 123);
// console.log(typeof n1 == "number" && n1 == 123);

/* Operações Condicionais */

/* // var number = true;
var number = false;

if (number)
    console.log("É verdadeiro");

if (2 == 2 && 3 === "3") {
    console.log("**************");
    console.log("2 é igual a 2");
    console.log("**************");

}
// if (4 === 4)

if (4 === 5)
    console.log("É igual");
else
    console.log("É diferente"); */


/* Operações Condicionais ternário */

// var age = 18;
// var text = '';

// if (age >= 18)
//     text = 'É maior de idade';
// else
//     text = 'É menor de idade';

/* text = (age >= 18) ? 'É maior de idade' : 'É menor de idade';

console.log(text); */

/* Switch: */

var number = 3;
var result = '';

// if (number == 1) {
//     result = 'UM';
// } else if (number == 2) {
//     result = 'Dois';
// } else if (number == 3) {
//     result = 'Três';
// } else if (number == 4) {
//     result = 'Quatro';
// } else if (number == 5) {
//     result = 'Cinco'
// } else {
//     result = 'Opção não encontrada!'
// }

/* switch (number) {
    case 1:
        result = 'UM';
        break;
    case 2:
        result = 'Dois';
        break;
    case 3:
        result = 'Três';
        break;
    case 4:
        result = 'Quatro';
        break;
    case 5:
        result = 'Cinco';
        break;

    default:
        result = 'Opção não encontrada!';
        break;
}

console.log(result); */

/* Funções */

/* function showLog() {
    console.log('******************');
    console.log('*******Algo*******');
    console.log('******************');

}
showLog();
showLog(); */

/* var n1 = 2;
var n2 = 4;
// var result = ((n1 + n2) * 6) / 2;
// console.log(result);
function calc(num1, num2) {
    return ((num1 + num2) * 6) / 2;
}
console.log(calc(n1, n2));
console.log(calc(4, 6)); */

/* function calc(n1, n2, n3) {
    // if (n3 == undefined) n3 = 2;
    n3 = (n3 == undefined) ? 2 : n3;

    return ((n1 + n2) * 6) / 2;
}
console.log(calc(2, 4)); */


/* AULA: 01 - INTRODUÇÃO A ARRAYS NO JAVASCRIPT */

// Definir Arrays:
// var nomes = ['Carlos', 'Marinho', 'Rawston', 'Curso'];
// console.log(nomes.length)
// var nomes = new Array('Carlos', 'Marinho', 'Rawston', 'Curso');
// console.log(nomes[1])

/* AULA: 02 - ARRAYS JAVASCRIPT (PUSH, UNSHIFT, POP, SHIFT) */

/* var nomes = [
    "Carlos",
    "Marinho", [1, 2, 3],
]; */
// console.log(nomes[0]);
// nomes[0] = "Rawston Maarinho" // Alterando Array
// console.log(nomes[0]);
// console.log(nomes[2]);
// console.log(nomes);
// nomes.push("Cursos"); //Adicionar itens no final
// console.log(nomes);
// nomes.unshift("Eti") //Adicionar itens no final
// console.log(nomes);
// nomes.pop() //Remover itens do final
// console.log(nomes);
// nomes.shift() //Remover itens do Início
// console.log(nomes);

/* Funções de array */
/* var names = [
    "Carlos",
    "Marinho",
];
var numbers = [3, 5, 4, 1, 2]; */
// console.log(typeof names.join(' - ')); // saber o tipo
// console.log(names.join(' - '));
// console.log(numbers);
//console.log(numbers.reverse()); // forma invertida
// console.log(numbers.sort()); // forma ordenada

// console.log(numbers.sort(function(val1, val2) {
//     return val1 > val2;
// })); // forma Crescente

// console.log(numbers.sort(function(val1, val2) {
//     return val1 < val2;
// })); // forma decrescente
// console.log(names.indexOf("Carlos")); // pasição do índice
// console.log(numbers.lastIndexOf(4)); // encontra última ocorrência

/* var n = 5;
var result = numbers.findIndex(function(item) {
    return item == n;
});
console.log(result); */

/* Concatenação */
//console.log(names.concat(numbers));
/* numbers.sort();
console.log(numbers);
console.log(numbers.sort().slice(1, 3));
console.log(numbers.sort().slice(1, numbers.length));
console.log(numbers.toString()); // transformar em string */

/* console.log(names);
var result = names.map(function(item) {
    return item.toUpperCase();
})
console.log(result);

console.log(numbers);
result = numbers.map(function(value) {
    return value * 2;
});
console.log(result);

console.log(names);
var result = numbers.filter(function(item) {
    return item > 3 || item == 3 || item == 1;
})
console.log(result); */

// ARRAYS!!
/* var names = [
    "Carlos",
    "Marinho",
];
var numbers = [3, 5, 4, 1, 2];

var result = numbers.every(function(value) {
    return value >= 1 && value <= 5;
})

console.log(result);

var result = numbers.some(function(value) {
    return value <= 5;
})

console.log(result);

var result = numbers.reduce(function(previousValue, currentValue, currentIndex, itens) {
    return previousValue + currentValue;
})

console.log(result);

result = numbers.reduceRight(function(previousValue, currentValue, currentIndex, itens) {
    return previousValue + currentValue;
})

console.log(result); */

// Object
var name = 'Rawston';
var Rawston = {
    name: name,
    lastName: 'Marinho',

    fullName: function() {
        return this.name + ' ' + this.lastName;
    },

    fullNameTwo: function(separator) {
        return this.name + separator + this.lastName;
    },
};

// console.log(Rawston.fullName());

// Rawston.name = 'Other';
// console.log(Rawston.fullName());

// console.log(Rawston.fullNameTwo(' - '));

// Outra maneira

var person = new Object();
person.name = 'Rawston';
person.lastName = 'Marinho';
person.fullName = person.name + ' ' + person.lastName;
console.log(person['fullName']);