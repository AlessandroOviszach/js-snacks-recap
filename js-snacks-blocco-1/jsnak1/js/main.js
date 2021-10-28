// JSnack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola_1 = prompt('inserimento parola 1'); 
const parola_2 = prompt('inserimento parola 2'); 

if (parola_1.length > parola_2.length) {
    console.log(parola_1);
} else if (parola_1.length < parola_2.length) {
    console.log(parola_2);
}