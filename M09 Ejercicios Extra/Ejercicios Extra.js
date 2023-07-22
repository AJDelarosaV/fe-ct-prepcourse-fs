/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   nvoArray= [];

   for (element in objeto){
      aux = [];
      aux.push(element);
      aux.push(objeto[element]);
      nvoArray.push(aux);
   }
   
   return nvoArray;
};

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var obj = {};
  
  for (var i = 0; i< string.length; i++){
   var count = 0;

   for (let j=0; j< string.length; j++){

      if(string[i]===string[j]){
         count+= 1;
        
      };

   };
   obj[string[i]] = count;
  }

  return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayString = ''
   var minString = ''
   for (let j=0; j < string.length; j++){

      if(string[j].toUpperCase()===string[j]){
         mayString += string[j].toUpperCase();
      }else{
         minString += string[j];

      };

   };
   return mayString + minString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var nvoString= '';
   var arr= [];
   for(let i = frase.length-1; i >= 0; i--){
      
      if (i == 0){
         nvoString += frase[i];
         arr.push(nvoString);
      }else if (frase[i] == ' '){
         arr.push(nvoString);
         nvoString= '';
         continue;
      }else nvoString += frase[i]; 
   };

   nvoString= '';
   for (let i = arr.length-1; i >= 0; i--){
      if(i != 0){
         nvoString += arr[i] + ' ' 
      }else{
         nvoString += arr[i]
      }
   };
   
   return nvoString;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código: 
   var str = '';
   
   var numStr = numero.toString();
   for(let i = numStr.length-1; i >= 0; i--){
      str += numStr[i];
   }

   return numero == str ? "Es capicua" : 'No es capicua'; 
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var str = '';
   for (let j=0; j < string.length; j++){
      if((string[j] == 'a') || (string[j] == 'b') || (string[j] == 'c')){
         continue;
      }else{
         str += string[j];
      };
   };
   
   return str
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var aux = '';
   var order = false;
   var rond = 1;
   while (order != true){
      order= true;
      
      for (var i = 0; i < (arrayOfStrings.length - rond); i++){
         if (arrayOfStrings[i].length > arrayOfStrings[i+1].length){
   
            aux = arrayOfStrings[i+1];
            arrayOfStrings[i+1] = arrayOfStrings[i];
            arrayOfStrings[i] = aux;
            order = false;
           
         }
         
         
      }
      rond += 1;
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nvaArray = [];
   for(var i=0; i < array1.length; i++) {
      
      for(let j=0; j < array2.length; j++) {
         if (array1[i]===array2[j]){
            nvaArray.push(array1[i])
            break;
         };
      };
   };

   return nvaArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
