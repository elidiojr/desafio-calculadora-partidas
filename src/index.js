let numVitorias = 10
let numDerrotas = 4

let saldoVitorias = fcnSaldoVitorias(numVitorias, numDerrotas)

console.log (saldoVitorias)

function fcnSaldoVitorias(vitorias, derrotas) {
   let saldo = vitorias - derrotas
   return saldo
}

