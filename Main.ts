import { Matematica, Numeros } from './Matematica';


var num: number;
var numeros: Numeros;
numeros.num1 = 1;
numeros.num2 = 2;
num = new Matematica().soma(numeros);
console.log(num);


var numeros: Numeros;
numeros.num1 = 2;
numeros.num2 = 1;
num = new Matematica().subtrai(numeros);
console.log(num);
