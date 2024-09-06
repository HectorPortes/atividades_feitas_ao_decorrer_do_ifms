//EXEMPLOS
const zeus = {
    nome: 'Zeus',
    raca: 'Vira-Lata',
    idade: 7,
    latir: function () {
        console.log('Late Muito!');
    }
}
zeus.latir();

//MAPA()
//Este métodos cria um novo array e executa uma função sobre cada um dos itens do array fonte
const mapa = {
    a: [2, 4, 6, 8],
    newCheese: function() {
        console.log(this.a.map(num => num * 2));
    }
}
mapa.newCheese();

//REDUZIR()
//Este método cria um acumulador ou reduz o array e um valor unico utilizando uma função que cria um valor unico
const reduzir = {
    ar: [2, 4, 6, 8],
    soma: function() {
        console.log(this.ar.reduce((total, valor) => total + valor, 0));
    }
}
reduzir.soma();

//FILTRO() 
//Este método filter cria um novo array como os elementos que passaram na condição da função que foi dado como parâmetro para o método
const filtro = {
    arr: [2, 4, 6, 8],
    novo: function() {
        console.log(this.arr.filter(num => num > 5));
    }
}
filtro.novo();

//CADA()
//Este método testa se todos os elementos do array atendem à condição passada, se for verdade devolve true e se for falso devolve false
const cada = {
    arra: [2, 4, 6, 8],
    mairQue: function() {
        console.log(this.arra.every(num => num > 4));
    }
}
cada.mairQue();

//CLASSIFICAR()
//Este método é utilazado para organizar ou ordenar os itens de um array de maneira ascendente ou descendente
const classificar = {
    array: [2, 4, 6, 8],
    alfa: ['d', 'c', 'b', 'a'],
    descendente: function() {
        console.log(this.array.sort((a, b) => a > b ? -1 : 1));
    },
    ascendente: function() {
        console.log(this.alfa.sort((a, b) => a > b ? 1 : -1));
    }
}
classificar.descendente();
classificar.ascendente();


//Atividade 3
console.log("Atividade 3 começa apartir daqui pra baixo");

console.log("indexOf()")
//indexOf()
console.log('ola mundo'.indexOf(''));
console.log('ola mundo'.indexOf('', 0));
console.log('ola mundo'.indexOf('', 3));
console.log('ola mundo'.indexOf('', 8));

console.log("includes()")
//includes()
var str = 'Ser, ou nao ser, eis a questão.';
console.log(str.includes('Ser'));
console.log(str.includes('questão'));
console.log(str.includes('não existe'));
console.log(str.includes('ser', 1));
console.log(str.includes('SER'));

console.log("starsWith() e endsWith()")
//starsWith() e endsWith()
const nome = "Cafelunatico"
console.log(nome.startsWith('Cafe'));
console.log(nome.startsWith('cafe'));
console.log(nome.startsWith('lunatico', 4));
console.log(nome.startsWith('tico', 8));
//Exemplos de endsWith() daqui pra baixo
console.log("endsWith()")
console.log(nome.endsWith('lunatico'))
console.log(nome.endsWith('luna', 8))
console.log(nome.endsWith('cafe'))
console.log(nome.endsWith('tico', 12))

console.log("slice()")
//slice()
const str1 = "Cafelunatico";
const str2 = str1.slice(1);
const str3 = str1.slice(1,5);
const str4 = str1.slice(5);
const str5 = str1.slice(10);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);