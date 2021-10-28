// JSnack 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

const numeri_interi = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let somma = 0;

for (let i = 0; i < numeri_interi.length; i++) {
    if (i % 2 !== 0) {
        somma = somma + numeri_interi[i];
    }
}
console.log(somma);










