// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti con for
// e opzionalmente con while

let somma = 0

// // for loop
// for (let i = 0; i < 5; i++) {
//     let numero_ciclo_for = parseInt( prompt( `inserisci numero ${i}` ) );
//     somma += numero_ciclo_for;
// }

// while loop
let counter = 0;
let numero_ciclo_while
while (counter < 5) {
    numero_ciclo_while = parseInt( prompt( `inserisci numero ${counter}` ) );
    somma += numero_ciclo_while;
    counter++;
}


console.log(somma)