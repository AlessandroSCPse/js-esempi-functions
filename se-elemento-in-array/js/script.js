// Il software chiede 3 numeri diversi 
// all'utente e li mette in un array 
// (l'array finale non dovrà avere duplicati.).
// Utilizzare una funzione per capire se 
// un elemento è già presente nell'array.

// Array vuoto 
const userNumbersArray = [];
// // While finche la lunghezza dell'array è inferiore a 3
while(userNumbersArray.length < 3) {
    // Chiediamo il numero all'utente
    const userNumber = parseInt(prompt('dimmi un numero'));
    // Se il numero non è già presente nell'array lo push nell'array
    // const isNumberInArray = isElementInArray(userNumber, userNumbersArray);
    // if(!isNumberInArray) {
    //     userNumbersArray.push(userNumber);
    // }
    if(!userNumbersArray.includes(userNumber)) {
        userNumbersArray.push(userNumber);
    }
}

console.log(userNumbersArray);
    

// Funzione che valuta se un elemento è presente in un array oppure no
// elementToCheck -> stringa o numero da cercare in arrayToCheck
// arrayToCheck -> array in cui verrà cercato l'elemento elementToCheck
// return: booleano, true se l'elemento è nell'array, oppure false
function isElementInArray(elementToCheck, arrayToCheck) {
    let elementFound = false;
    // Scorriamo l'array
    for(let i = 0; i < arrayToCheck.length; i++) {
        const thisElement = arrayToCheck[i];
        
        // Se trovo l'elemento da cercare nell'array elementFound diventa vera
        if(thisElement === elementToCheck) {
            elementFound = true;
        }
    }

    return elementFound;
}
