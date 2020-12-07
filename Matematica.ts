import { Disciplina } from "./Disciplina";

export class Matematica {   

    pi:number = 3.14;

    soma(numeros:Numeros):number{
        return numeros.num1+numeros.num2;
    }

    subtrai(numeros:Numeros):number{
        return numeros.num1 - numeros.num2;
    }

    imprimirPi(): void {
        console.log(this.pi);
    }    
}

export interface Numeros{
    num1:number,
    num2:number
}