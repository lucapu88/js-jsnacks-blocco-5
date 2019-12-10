// jsnack3: Crea 10 oggetti che rappresentano una zucchina.
var zucchineOltre15 = []; //contenitore di zucchine più lunghe di 15cm
var zucchineSotto15 = []; //contenitore di zucchine meno lunghe di 15cm
for (var i = 0; i < 10; i++) { //per creare 10 oggetti
 var peso = generaRandom(10,50); //genero 10 pesi random
 var misura = generaRandom(10,50); //genero 10 misure random
 var tipologia = generaRandom(0,999); //genero 10 tipologie random
 var oggetto = { //con i generaRandom creati sopra, creo un oggetto ovvero la zucchina con le sue proprietà
   'tipologia' : 'zucchina' + tipologia,
   'peso' : peso,
   'misura' : misura
 };
 // Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 if (oggetto.misura > 15) { //se la zucchina è più lunga di 15cm va dentro l'array zucchineOltre15
   zucchineOltre15.push(oggetto);
 } else {  //altrimenti se la zucchina è più corta di 15cm andrà dentro l'array zucchineSotto15
   zucchineSotto15.push(oggetto);
 };
};
console.log('ZUCCHINE SOPRA I 15CM:');
console.log(zucchineOltre15);
console.log('ZUCCHINE SOTTO I 15CM:');
console.log(zucchineSotto15);

//Infine stampa separatamente quanto pesano i due gruppi di zucchine
var somma = 0
for (var i = 0; i < zucchineOltre15.length; i++) { //calcolo il peso delle zucchine oltre i 15cm
  var peso = zucchineOltre15[i].peso;

  somma = somma + peso;
};
console.log('il peso di tutte le zucchine SOPRA i 15cm è: ' + somma);

var somma2 = 0
for (var i = 0; i < zucchineSotto15.length; i++) { //calcolo il peso delle zucchine sotto i 15cm
  var peso2 = zucchineSotto15[i].peso;

  somma2 = somma2 + peso2;
};
console.log('il peso di tutte le zucchine SOTTO i 15cm è: ' + somma2);


//funzione per generare un numero random
function generaRandom(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}
