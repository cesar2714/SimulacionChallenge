/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true
  // Tu código
  var numOriginal= num.toString();
  var numReversible= numOriginal.split('').reverse().join('');
  if(numOriginal === numReversible){
    return true;
  } else{
    return false;
  }
 
}
  

  /*var numeroS = num.reverse(x=> x.num)
   if(x.num === num){
    return numeroS;
   } */


// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico