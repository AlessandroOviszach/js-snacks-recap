// JSnack 2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

let numero = parseInt( prompt('inserisci un numero') )
if (numero % 2 === 0) {
    console.log(`il numero ${numero} è pari`)
} else {
    const numero_modificato = numero + 1
    console.log(`il numero ${numero} è dispari vinene aggiunta una unità : ${numero_modificato}`)
}
