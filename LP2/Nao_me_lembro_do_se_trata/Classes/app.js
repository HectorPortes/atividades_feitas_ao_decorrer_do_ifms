class Cliente {
    constructor(nome, email, cpf) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }

    relatorio() {
        return `A pessoa ${this.nome} com o CPF ${this.cpf} tem o e-mail ${this.email}`
    }
}

class ClienteBanco extends Cliente {
    constructor(nome, email, cpf, saldo) {
        super(nome, email, cpf);
        this.saldo = saldo;
    }

    sacar(valorSaque) {
        if(valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
        } else {
            return `Valor é maior que o saldo. Pobre fudido!!)`;
        }
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito;
        return `${this.saldo}`
    }

    //Sobrescrita:
    relatorio() {
        return `A pessoa ${this.nome} com o CPF ${this.cpf} tem o e-mail ${this.email} e o saldo de R$${this.saldo} reais.`;
    }
}

var PaulaTejano = new Cliente("Paula Tejano", "cimasturbo@gmail.com", "01534398300");
PaulaTejano = new ClienteBanco("Paula Tejando","cimasturbo@gmail.com", "01534398300", 5000)
console.log(PaulaTejano);
console.log(PaulaTejano.relatorio());
console.log(PaulaTejano.sacar(6000));
console.log(PaulaTejano.depositar(6000))