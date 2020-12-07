"use strict";
exports.__esModule = true;
exports.Matematica = void 0;
var Matematica = /** @class */ (function () {
    function Matematica() {
        this.pi = 3.14;
    }
    Matematica.prototype.soma = function (numeros) {
        return numeros.num1 + numeros.num2;
    };
    Matematica.prototype.subtrai = function (numeros) {
        return numeros.num1 - numeros.num2;
    };
    Matematica.prototype.imprimirPi = function () {
        console.log(this.pi);
    };
    return Matematica;
}());
exports.Matematica = Matematica;
