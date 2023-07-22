/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let masUno = array.map((num) => {return num + 1});
   return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0
   for (i= 0; i < arrayOfNums.length; i++){
      suma += arrayOfNums[i];
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0
   for (i= 0; i < resultadosTest.length; i++){
      suma += resultadosTest[i];   
   }
   suma = suma / resultadosTest.length;
   return suma;
} 

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var valor = arrayOfNums[0];
   for (i = 0; i < arrayOfNums.length - 1; i++){
      if (valor <  arrayOfNums[i+1] ){
         valor = arrayOfNums[i+1];
      }
      
   }
   
   return valor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var valor = 1;
   if(arguments.length > 1){
      for (i = 0; i < arguments.length; i++){
         valor *= arguments[i];
      }
      return valor;
   }else if (arguments.length == 1){
      return arguments[0];
   }else{
      return 0;
   }
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var valor = 0;
   for (i = 0; i < array.length; i++){
      if (18 <  array[i] ){
         valor += 1;
      }
   }
   return valor;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia){
      case 1:
         return "Es fin de semana";
         
      case 2:
         return "Es dia laboral";
         
      case 3:
         return "Es dia laboral";
         
      case 4:
         return "Es dia laboral";
         
      case 5:
         return "Es dia laboral";

      case 6:
         return "Es fin de semana";

      case 7:
         return "Es fin de semana";

      default:
         return "Dia incorrecto";

   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let palabra = num.toString();
   let isNine = (palabra[0] == 9 ) ? true : false;

   return isNine
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var sonIguales = true;
   for (i = 0; i < array.length - 1 ; i++){
      if (array[i] != array[i+1]){
         sonIguales= false;
         return sonIguales;
      }
   }
   return sonIguales;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const newArray = [];
   var enero = array.indexOf("Enero",0);
   var marzo = array.indexOf("Marzo", 0);
   var noviembre = array.indexOf("Noviembre", 0);
   if (marzo != -1) newArray.push("Marzo");
   if (noviembre != -1) newArray.push("Noviembre");
   if (enero != -1) newArray.push("Enero");

   if (marzo == -1 || enero == -1 ||  noviembre == -1){
      return "No se encontraron los meses pedidos"
   }else{
      return newArray
   }


}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array = [];
   var resultado = 0;
   var i= 0;
   while(resultado < 60){
      resultado = 6 * i;
      array.push(resultado);
      i+= 1;
   }
   return array;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   arr = []
   array.forEach(element => {
      if (element > 100 ){
         arr.push(element);
      }
   });
   return arr;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var i = 1; 
   var resultado = 0;
   const arr = [];
   var status = false
   while(i < 11){
      resultado = num + i * 2;
      if (i != resultado) {
         arr.push(resultado);
         i+=1;
      }else{
         status = true;
         break;
      }
   }
   if (status) {
      return "Se interrumpió la ejecución";
   }else{
      return arr;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var i = 0, iter = 0; 
   var resultado = 0;
   const arr = [];
   while(i < 10-iter){      
      i+=1;
      if (i == 5 || resultado == 5) {
         iter+=1;
      }
      resultado = num + i * 2;
      arr.push(resultado);
   }
   return arr;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
