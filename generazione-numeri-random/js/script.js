// generare 10 numeri random attraverso una 
// funzione e stamparli a schermo

// Generare 10 numeri random con un ciclo for
for(let i = 0; i < 10; i++) {
    const random = getRndInteger(1, 300);
    console.log(random);
}

// Funzione che genera un numero random
// min -> numero, che indica il valore minimo da generare
// max -> numero, che indica il valore massimo da generare
// return: numero random compreso tra min e max
// function generateRandomNumber(min, max) {
//     const randomNumber = Math.floor(Math.random() * max) + min;
//     return randomNumber;
// }
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

