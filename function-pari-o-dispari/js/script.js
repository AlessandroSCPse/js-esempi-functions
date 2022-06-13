// scrivere una funzione per verificare se un numero è pari 
// o dispari, quindi chiedere un numero all'utente e 
// comunicargli se è pari o dispari
const userNumber = parseInt(prompt('Dimmi un numero'));
const userNumberEvenOrOdd = isEvenOrOdd(userNumber);

if(userNumberEvenOrOdd === 'even') {
    alert('Numero pari');
} else {
    alert('Numero dispari');
}

// Funzione che verifica se un numero è pari o dispari
// number -> numero da valutare
// return: stringa, 'even' se è pari altrimenti 'odd'
function isEvenOrOdd(number) {
    let evenOrOdd;
    // se il number % 2 da resto 0 -> evenOrOdd = 'even'
    // altrimenti evenOrOdd = 'odd'
    if(number % 2 === 0) {
        evenOrOdd = 'even'
    } else {
        evenOrOdd = 'odd';
    }

    return evenOrOdd;
}
