/* const meuCarro = {
    modelo: "Uno",
    cor: "preto",
    ano: 2020,
    novo: true
};

console.log(meuCarro.modelo)
console.log("Meu carro é novo?", meuCarro.novo)
console.log(meuCarro["cor"])
console.log(meuCarro.temSeguro)

const modeloCarro = "modelo"
console.log(meuCarro[modeloCarro])

meuCarro.temSeguro = true

meuCarro.ano = 2021


delete meuCarro.cor

console.log(meuCarro) */

const meuArrayObjetos = [
    {nome: 'Jennifer',
    idade: 20},
    {profissao: 'estudante', faculdade: 'IFBA'},
    {}
]

meuArrayVariosTipos = ["Abacaxi", 700, true, {eletronico: 'notebook'}]
console.log(meuArrayVariosTipos[meuArrayVariosTipos.length-1])

const meuNovoArray = [1, 2, 3, 4]
meuNovoArray.push(5, 6)
meuNovoArray.unshift(0)
meuNovoArray[3] = "três"
meuNovoArray.pop();
meuNovoArray.shift();
meuNovoArray.splice(2,1)
meuNovoArray.splice(4, 0, "seis")

console.log(meuNovoArray);

console.log(meuNovoArray.indexOf("três"))
