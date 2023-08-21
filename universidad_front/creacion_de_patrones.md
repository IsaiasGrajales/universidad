# Expresiones Regulares

Las expresiones regulares comunmente abreviadas como RegExp son patrones que permiten buscar coincidencias
con combinaciones de caracteres dentro de cadenas de texto para validar, extraer o reemplazar dicha combinacion en la cadena de texto.

En JavaScript, las expresiones regulares son tambien objetos. Asi pues, mediante las expresiones regulares
podremos:

- Comprobar el formato de una cadena
- Reemplazar o extraer fragmentos de texto

En JavaScript, las expresiones regulares tambien son objetos y se pueden utilizar con los siguientes metodos:

* Objeto RegExp. Metodos exec() y test()
* Objeto String. Métodos match(), replace(), search() y split()

# Creacion de patrones

Las expresiones regulares pueden construirse de dos maneras distintas.

- La primera de ellas es mediante una expresion literal contenida entre caracteres barra (/).

expresion = /patrón/

- La segunda es creando un objeto.

expresion = new RegExp("patrón")

Veamos un ejemplo:

let txt = " Agua que no has de beber, déjala correr";
console.log(txt.match(/agua/)); //null
console.log(txt.match(/Agua/)); //Agua

En el ejemplo anterior, el script devolvera el valor null en la primera verificacion, ya que JavaScript 
diferencia entre mayúsculas y minúsculas. En la segunda comprobación, responderá con Agua que, esa cadena si se encuentra en el string evaluado.

# Marcadores de inicio y final de cadena

* ^ -Verifica el comienzo de una cadena. Si se usa dentro de un corchete indica negación.

ejemplo: let txt = "Antonio tiene un antojo";
console.log(txt.match(/^Anto/g)); //Anto

* $ -Se utiliza para localizar el final de una cadena.

ejemplo: let txt = "Antonio tiene un antojo";
console.log(txt.match(/Anto$/g)); //null
console.log(txt.match(/tojo$/g)); //tojo

# Metacaracteres predefinidos

* . -Se utiliza para encontrar un unico caracter a excepcion del retorno de línea \n, \r, \u208 o \u2029.

ejemplo: let txt = "Antonio tiene un antojo";
console.log(txt.match(/A.t/g)); //Ant

* \w -Verifica que sea un carácter alfanumerico (letra mayúscula, minúscula o un digito).

ejemplo: let txt = "Antonio mide 182 cm";
console.log(txt.match(/\w/g)); //A,n,t,o,n,i,o,m,i,d,e,1,8,2,c,m

* \W -Se utiliza para encontrar un carácter que no sea una palabra.

ejemplo: let txt = "Antonio mide 182 cm";
console.log(txt.match(/\W/g)); //Devolvera 3 espacios en blanco

* \d -Busca cualquier dígito numérico.

ejemplo: let txt = "Antonio mide 182 cm";
console.log(txt.match(/\d/g)); //1,8,2

* \D -Busca cualquier caracter que no sea un digito numerico

ejemplo: let txt = "Antonio pesa 80kg";
console.log(txt.match(/\D/g)); //A,n,t,o,n,i,o, ,p,e,s,a, ,k,g

* \s -Busca un solo caracter de espacio en blanco

ejemplo: let txt = "Antonio mide 80kg";
console.log(txt.match(/\s/g)); //A,n,t,o,n,i,o, ,p,e,s,a, ,8,0,k,g

* \S -Busca un solo caracter que no sea un espacio en blanco

ejemplo: let txt = "Antonio mide 80kg";
console.log(txt.match(/\S/g)); //" ", " "

* \t -Se utiliza para localizar un caracter de tabulacion

ejemplo: let txt = "Antonio esta delgado. \tPesa 60kg";
console.log(txt.match(/\t/g)); //  \t

* \r -Se utiliza para encontrar un carácter de retorno de carro

ejemplo: let txt = "Antonio esta delgado. \rPesa 60kg";
console.log(txt.match(/\r/g)); //  \r

* \n -Busca un salto de linea

ejemplo: let txt = "Antonio esta delgado. \nPesa 60kg";
console.log(txt.match(/\n/g)); //  \n
console.log(txt.search(/\n/g)); //  19 posición del salto de linea

# Corchetes

* [abc] -Se usa para encontrar cualquier caracter entre los que estan entre corchetes

ejemplo: let txt = "Antonio mide 182 cm";
console.log(txt.match(/[aeiou]/g)); // 0, i, 0, i, e

* [^abc] -Se usa para encontrar cualquier caracter excepto los que estan entre corchetes [^sirve como negación].

ejemplo: let txt = "Antonio mide 182 cm";
console.log(txt.match(/[^aeiou]\w/g)); // An, to, ni, m, de, 1, 82, c

* [az] o [0-9] -El guion dentro del corchete identifica un rango de caracteres.

ejemplo: let txt = "0123456789";
console.log(txt.match(/[2-6]/g)); // 2, 3, 4, 5, 6

# Entre parentesis

* (a | b) -El simbolo | identifica una alternancia "a" o "b" dentro del grupo.

ejemplo: let txt = "alto, bajo, feo, guapo";
console.log(txt.match(/(bajo|feo)/g)); // bajo, feo

# Cuantificadores

* n{x} -Numero de veces exacta que la condición de X se repite para el identificador n.

ejemplo: let txt = "123456 2468 1357 24 68 135";
console.log(txt.match(/\d{3}/g)); 123, 456, 246, 135, 135

* n{x,} -Numero de veces que por lo menos la condicion de X se repite para el identificador n.

ejemplo: let txt = "123456 2468 1357 24 68 135";
console.log(txt.match(/\d{3,}/g)); 123456, 2468, 1357, 135

* {x, y} -El caracter anterior se repetira x veces, pero no mas de y.

ejemplo: let txt = "123456 2468 1357 24 68 135";
console.log(txt.match(/\d{4,6}/g)); 123456, 2468, 1357

* ? -Identifica cualquier cadena que tenga cero o una aparición del caracter anterior.

ejemplo: let txt = "10 20 30 10 20 30";
console.log(txt.match(/20?/g)); 20, 20

* * -Encuentra cero o más veces el elemento anterior.

ejemplo: let txt = "La azafata Ana";
console.log(txt.match(/a*/g)); ,a, ,a, ,a, ,a, ,a, , , ,a

* + -Encuentra una o más veces el elemento anterior

ejemplo: let txt = "La azafata Ana";
console.log(txt.match(/a+/g)); a,a,a,a,a,a

# Flags

Veamos a continuación los flags disponibles y su significado:

* g -Explora la cadena completa. Busca todas las coincidencias de la cadena en vez de detenerse despues de la primera coincidencia.

* i -Busca en la cadena cualquier caracter sin distinguir entre mayúsculas o minúsculas.

* m -Permite usar varios ^ y $ en la definición del patrón. El modificador trata los caracteres iniciales y finales para que coincidan con el principio o el final de cada linea de una cadena en vez de solo el principio o el final de la cadena.

Mostramos a continuacion algunos ejemplos mas de expresiones regulares:

ejemplo 1: h.1 -Una "h" seguida de cualquier caracter.

ejemplo 2: ^c -Una "c" al principio de la cadena. "carlos", "celeste".

ejemplo 3: ón$ -Una cadena vacia.

ejemplo 4: [abc] -Una "a" o una "b" o una "c".

ejemplo 5: [^abc] -Cualquier caracter que no sea "a", "b" o "c".

ejemplo 6: [a-z] -Cualquier letra entre la "a" y la "z".

ejemplo 7: [a-z]+ -Una secuencia no vacia de letras minusculas.

ejemplo 8: ^[ \t]*$ -Línea en blanco, combinación de espacios y tabuladores.

ejemplo 9: ( (\d{1,2})\/(\d{1,2})\/(\d{2,4}) ) -Formato fecha o numero tipo 28/04/2000, 01/01/01 ó 11/11/1111.

ejemplo 10: Sonia|Lydia -Coincidencias con "Sonia" o "Lydia".

Veamos a continuacion dos ejempos de expresiones regulares con un poco mas elaboradas con fines concretos y habituales.

* Patron que verifica si la direccion de correo es un mail correcto.

(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/)

let txt = "carlos@gmail.com";
let txt1 = "carlosgmail.com";

console.log(txt.match(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/)); // carlos@gmail.com

console.log(txt1.match(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/)); // null

* Patron que verifica que la contraseña introducida tenga entre 8 y 10 caracteres, un digito y un alfanumerico.

/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/

let pass1 = "Carlos1234";
let pass2 = "12345678";

console.log(pass1.match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/)); // Carlos1234 (ok)

console.log(pass2.match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/)); // null (no cumple)

* Patron que verifica una fecha del tipo XX/XX/XXXX

/^\d{1,2}\/\d{1,2}\/\d{2,4}$/

let data1 = "07/06/2021";
let data2 = "7/6/21";

console.log(data1.match(/^\d{1,2}\/\d{1,2}\/\d{2,4}$/)); // 07/06/2021 (ok)

console.log(data2.match(/^\d{1,2}\/\d{1,2}\/\d{2,4}$/)); // null (no cumple con el patron)

