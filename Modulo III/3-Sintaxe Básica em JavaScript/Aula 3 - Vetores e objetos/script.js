/*
// Declarando um array
// deve ser declarado entre colchetes "[]";

let array = ['string', 1, true];
console.log(array);
*/

/*
// Declarando um array para guardar difentes valores inclusive outros arrays

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[0]);
*/


// manipulando um array

/*
//forEach - realiza uma função para cada item do array
array.forEach(
    function(item, index) {
        console.log(item, index);
    }
);
*/

/* 
// push - adiciona o item no final do array
array.push('novo item');
console.log(array);
 */

/* 
//pop - remove o último item do array
array.pop();
console.log(array);
 */

/* 
//shift - remove o primeiro item do array
array.shift();
console.log(array);
 */

/* 
//unshift - adiciona o item no início do array
array.unshift('novo item');
console.log(array);
 */

/* 
//indexOf - retorna o índice de um item do array
console.log(array.indexOf(true));
 */

/* 
//splice - remove ou substitui item por índice
array.splice(0, 3);
console.log(array);
 */

/* 
//slice - retorna uma parte de um array
let novoArray = array.slice(0, 3);
console.log(novoArray);
 */

/*
// declarando um objeto
// deve ser declarado entre chaves "{}";
let object = { propriedade1: 'valor1', propriedade2: 'valor2' }
console.log(object);
*/

/*
// As propriedades de objetos podem guardar qualquer valor
let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };
*/

/*
// Para acessar propriedades de objetos usa-se ponto "."
console.log(object.objectInterno);
*/

/*
// manipulando objeto
// desestruturando objeto
let string = object.string;
let number = object.number;
let boolean = object.boolean;
console.log(string, number, boolean);
*/

/*
// desestruturando usando chaves
let {string, number, boolean} = object;
console.log(string, number, boolean);
*/