// ESERCIZIO 1:
// Calcolare l'area di un cerchio di raggio R = 10.

// let raggio = 10;
// let area = Math.PI * Math.pow(raggio, 2);
// console.log(area);

// ESERCIZIO 2:
// Calcolare l'ipotenusa di un triangolo rettangolo di cateti 3 e 4.

// let cateto1 = 3;
// let cateto2 = 4;
// let ipotenusa = Math.sqrt(cateto1 **2 + cateto2 **2);
// console.log(ipotenusa);

// ESERCIZIO 3:
// Scrivere una funzione, assegnati 2 SVGAnimatedNumberList, generi un numero RTCEncodedAudioFrame, intero, fra i due assegnati (compresi

// function funzione (a, b){
//     return Math.round(Math.random()*(b-a))+a;
// }

// console.log(funzione(3,5));

// ESERCIZIO 4:
// Scrivere una funzione che trasformi un nome nelle sue iniziali. Ad es: "Tizio Caio" con T.C.

// function iniziali(nome) {
//     let nomeSplit = nome.split(" ")
//     nomeSplit.forEach((el) => {
//         let split = el.split("");
//         return console.log(split[0]);
//     })
// }

// iniziali("Sandro Rossi");

// ESERCIZIO 5:
// Scrivere una funzione che assegnati 3 numeri ritorni true se possono essere i lati di un triangolo, false altrimenti.

// function triangolo(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
//         return true}
//     else {
//         return false};    
// }

//  console.log(triangolo(3, 4, 5));

// ESERCIZIO 6:
// Congettura di Collatz: preso un numero naturale > 1, se è pari dividerlo per 2, se è dispari moltiplicarlo per 3 e aggiungere 1. Ripetere. Qualunque sia il numero di partenza l'algoritmo termina sempre a 1. Scrivere una funzione che implementi l'algoritmo e ritorni un array con il valore calcolato ad ogni interazione. Ad es: 10 => [10, 5, 16, 8, 4, 2, 1]

// function algoritmo(num) {
//     let count = 0;
//     let arrayAlgoritmo =[];
//     arrayAlgoritmo.push(num);
//         while (num>1) {
//         if (num%2==0) {
//             num = num/2
//             arrayAlgoritmo.push(num)
//         } else {
//            num = num*3+1
//            arrayAlgoritmo.push(num)
//         }    
//     };
//     return arrayAlgoritmo;
// }

// console.log(algoritmo(31));

