let numVitorias = 106
let numDerrotas = 5

let saldoVitorias = fcnSaldoVitorias(numVitorias, numDerrotas)
let nivel = fcnNivel(saldoVitorias)

console.log (`O Herói tem de saldo de ** ${saldoVitorias} ** e está no nível de ** ${nivel}**`)

function fcnSaldoVitorias(vitorias, derrotas) {
   let saldo = vitorias - derrotas
   return saldo
}

function fcnNivel (saldoVitorias) {
    let nivel = ""
    if (saldoVitorias <= 10)
        nivel = "Ferro" 
    else if (saldoVitorias <= 20)
            nivel = "Bronze"
        else if (saldoVitorias <= 50)
                nivel = "Prata"
            else if (saldoVitorias <= 80)
                    nivel = "Ouro"
                else if (saldoVitorias <= 90)
                        nivel = "Diamante"
                    else if (saldoVitorias <= 100)
                        nivel = "Lendário"
                    else
                        nivel = "Imortal"  
    
    return nivel  
}

