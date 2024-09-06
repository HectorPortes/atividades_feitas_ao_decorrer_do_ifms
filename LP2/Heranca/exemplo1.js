class  Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
}

class ContaCorrente extends Conta {
    constructor(saldo, nome) {
        super(saldo);
        this.nome = nome;
    }

    consultarSaldo() {
        console.log(`${this.nome} possui R$${this.saldo}`);
    }
}

let naldo = new ContaCorrente(1000, "Naldo");
naldo.consultarSaldo();