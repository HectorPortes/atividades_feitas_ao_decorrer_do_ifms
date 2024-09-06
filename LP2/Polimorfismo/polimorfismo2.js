class Recepcao {
    constructor(nome, mensagem, cabelo) {
        this.nome = nome;
        this.mensagem = mensagem;
        this.cabelo = cabelo;
    }

    fala() {
        return `${this.nome} te diz: "${this.mensagem}"`;
    }
}

class Lojista extends Recepcao {
    constructor(nome, mensagem, cabelo, produto) {
        super(nome, mensagem, cabelo);
        this.produto = produto;
    }

    vender() {
        return `gostaria de dar uma olhada no nosso produto ${this.produto}`;
    }
}

class Cliente extends Recepcao {
    constructor(nome, mensagem, cabelo, resposta) {
        super(nome, mensagem, cabelo);
        this.resposta = resposta;
    }

    responder() {
        return `${this.resposta} gostaria de olhar o produto`;
    }
}

const interacao = [
    new Lojista("Steampunk", "Olá, seja bem vindo", "curto", "Limpaminador"),
    new Cliente("Terrarian", "Olá", "longo", "sim"),
]

for(const recepcao of interacao) {
    console.log(`O ${recepcao.nome} tem o cabelo ${recepcao.cabelo}`);
}

for(const recepcao of interacao) {
    console.log(recepcao.fala());
}

const lojista = interacao[0];
console.log(lojista.vender());

const cliente = interacao[1];
console.log(cliente.responder());