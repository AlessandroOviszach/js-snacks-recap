// JSnack 5
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const array_uno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array_due = [1, 2, 3, 4, 5]

while(array_uno.length != array_due.length) {
    if (array_uno.length < array_due.length) {
        array_uno.push(1);

    } else {
        array_due.push(1);
    }
}

console.log(array_uno);
console.log(array_due);










