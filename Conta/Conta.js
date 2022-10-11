// CLASSE ABSTRATA (seus dados apenas podem ser herdados) \\

export class Conta {

    constructor(saldoInicial, cliente, agencia) {

        if(this.constructor == Conta) {
            throw new Error('#VOCÊ NÃO DEVE INSTANCIAR UM OBJETO DO TIPO *CONTA* DIRETAMENTE (CLASSE ABSTRATA)#')
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;   
    }

    // ACESSORES \\

    static numeroDeContas = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // OPERAÇÕES \\

    sacar(valor){ // METODO ABSTRATO \\
        throw new Error('O METODO SACAR É *ABSTRATO*')
    }    

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;

        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;

        } else {
            console.log('SALDO INSUFICIENTE')
        }
    }

    depositar(valor) {
        if(valor <= 0) return; //EARLY RETURN

        this._saldo += valor;
        return valor;
    }

    tranferir(valor, conta) {

        let valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }
}