// jsnack4: Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var array1 = [1, 2, 3, 4, 5];
var array2 = ['a', 'b', 'c', 'd', 'e'];
var arrayFinale = []

function fusion(array1,array2) {
  for (var i = 0; i < array1.length && array2.length; i++) {
    arrayFinale.push(array1[i]);
    arrayFinale.push(array2[i]);
  };
  return arrayFinale;
};

console.log(fusion(array1,array2));
