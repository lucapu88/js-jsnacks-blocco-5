// jsnack5: Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

var arrayIniziale = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm'] // creo un array con degli elementi.

var a = generaRandom( 1, + arrayIniziale.length -1); // creo una var che genera un numero random che va da 1 fino alla lunghezza dell'array meno 1 (perchè a deve essere più piccolo di b). Il numero equivale alla posizione della lettera dentro l'array.
console.log('a= ' + a);
var b = generaRandom( a + 1, arrayIniziale.length); // creo una var che genera un num random che va da a più 1 (perchè b deve essere più grande di a) fino alla lunghezza totale dell'array. Il numero equivale alla posizione della lettera dentro l'array.
console.log('b= ' + b);

var totale = prendiArray(arrayIniziale, a, b); // chiamo, nella mia funzione creata, l'array e i 2 numeri.

console.log(totale); // stampo il risultato finale che sarebbe un array contenente:
//a= che va dall'inizio dell'array fino ad una lettera prima della lunghezza finale.
//b= che va da una posizione in più di a fino alla lunghezza finale dell'array.

function prendiArray(array, x, y) { //creo una funzione che prende 3 argomenti.
  var arrayFinale = []; // creo un ultimo array che conterrà le posizioni generate dal ciclo for.
  for (var i = x - 1; i < y; i++) { // creo un ciclo for che prende x -1 (perchè in un array la posizione 1 equivale a 0) e incrementerà x fin quando sarà minore di y.
    arrayFinale.push(array[i]); // vado ad inserire nell'arrayFinale gli elementi singoli dell'array.
  }
  return arrayFinale // la funzione mi darà l'array finale contenente i valori che darò a x e y che equivarranno alle posizioni nell'array.
}


//funzione per generare un numero random
function generaRandom(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}
