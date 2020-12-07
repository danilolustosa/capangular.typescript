var variavel = 1;
let variavel2 = 100;
const constante = 400;

var nome: string = "Dan";
console.log(nome);

var qualquer: any = "Abc";
qualquer = 1;


var teste: number = 123;


////////// CLASSES /////////////////

class Saudacao {

    constructor(){
    }

    saudacao():void {
        console.log("Hello World!!!")
    }
}

var obj = new Saudacao();
obj.saudacao();


//Asserção de tipo no TypeScript
var str:string = '1';
var str2:number = <number> <any> str; //str is now of type number
console.log(typeof(str2));


//Loop for... in
var j:any;
var n:any = "a b c"
for(j in n) {
 console.log(n[j])
}
