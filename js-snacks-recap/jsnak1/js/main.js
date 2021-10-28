// JSNACK 1
// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.


const btn = document.querySelector('.richiesta_cifre');
let numero
btn.addEventListener('click', function(){
    numero = prompt('inserisci un numero di 4 cifre');
    let somma
    let media

    if (numero.length == 4) {
        const n_1 = numero[0];
        const n_2 = numero[1];
        const n_3 = numero[2];
        const n_4 = numero[3];

        parseInt(n_1, n_2, n_3, n_4);

        somma = n_1 + n_2 + n_3 + n_4;
        media = somma / numero.length
        console.log(somma)
    } else {
        
    }
})