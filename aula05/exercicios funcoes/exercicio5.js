function validaMaiorIdade(anoNascimento) {
    if (anoNascimento < 2003) {
        return "Liberação autorizada"
    } else if (anoNascimento = 2003) {
        return "Validar documento de identidade"
    } else {
        return "ATENÇÂO: Liberação NÃO autorizada"
    }
}

const resultado = validaMaiorIdade(2001);
console.log(resultado)