import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0

    constructor(cliente, agencia) {
        super(0, cliente,agencia);    
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) { //sobrescreve o comportamento de _sacar
        let taxa = valor * 1.1;
        return super._sacar(valor, taxa);
    }
}