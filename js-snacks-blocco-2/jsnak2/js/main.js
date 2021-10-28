// JSnack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// dichiarazione degli array
const nomi = ['nome1', 'nome2', 'nome3'];
const cognomi = ['cognome1', 'cognome2', 'cognome3'];

let nome_random
let cognome_random

let numero_nome_random = Math.floor( Math.random() * (nomi.length) );
nome_random = nomi[numero_nome_random]

let numero_cognome_random = Math.floor( Math.random() * (cognomi.length) );
cognome_random = cognomi[numero_cognome_random]

console.log(nome_random, cognome_random)


