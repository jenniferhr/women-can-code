function nomeDaMinhaFuncao(){
    console.log("Minha primeira função rodou!")
}

nomeDaMinhaFuncao();

function funcaoComParametro(meuParametro, meuSegundoParametro) {
    console.log(meuParametro, meuSegundoParametro)
}

funcaoComParametro('oi', 'mundo')

function subtracao(primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
}


function retornaVariavel(valorDaVariavel) {
    const minhaVariavel = valorDaVariavel * 2;
    return minhaVariavel;
}

function retornoCondicional(valor) {
    if (valor > 200) {
        return "Valor maior que 200"
    } else {
        return "Valor menor ou igual a 200"
    }
}

function retornoCondicionalTernario(valor) {
    return valor > 200 ? "Valor maior do que 200" : "Valor menor ou igual a 200";
}

console.log(retornoCondicionalTernario(500))
const resultadoCondicional = retornoCondicionalTernario(500);
console.log(resultadoCondicional)

const nomeDaMinhaFuncaoArrow = () => {
    console.log("minha primeira arrow function")
}

const dobro = (x) => x * 2;
console.log(dobro(6))

const retornoCondicionalTernario2 = (valor) => valor > 200 ? "Valor maior do que 200" : "Valor menor ou igual a 200";
console.log(retornoCondicionalTernario2(30)) 

 for(let contador = 1; contador <= 5; contador++) {
    console.log(contador);
    if (contador === 4) {
        break
    }
}

const meuArray = [1, 2, 3, 4, 5]
for(let indice = 0; indice < meuArray.length; indice++) {
    console.log(meuArray[indice]);
} 

const meuNome = "jennifer"

for(let letra = 0; letra < meuNome.length; letra++) {
    console.log(`A ${letra+1}ª letra do meu nome é ${meuNome[letra]}`)
}

 let contador = 6;
 while(contador <= 5) {
    console.log("Eu imprimi o número " + contador)
    contador++
} 

do {
    console.log("Eu imprimi o número " + contador)
    contador++
} while (contador <= 5); 

const novoArray = ["Meu", "nome", "é", "Jennifer"]

novoArray.forEach(function(item) {
    console.log(item)
})

const meuArray = [1,2, 3, 4, 5, 6, 7]
const arrayAtualizado = meuArray.map(function(value) {
    return `Meu valor é ${value}`
})

console.log(arrayAtualizado)