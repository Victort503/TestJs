//Creado por Victor Romero

// Ejercicio 1
const arrayNumerico = [10, "5", "7", 9, "23", "17"];

function multiplicarArray(arr){
    let resultado = 1;
    for(let i = 0; i < arr.length; i++){
        // Verificamos si el elemento es un número o una cadena
        if(typeof arr[i] === 'number'){
            resultado *= arr[i];
        } else if(typeof arr[i] === 'string'){
            resultado *= parseInt(arr[i]);
        }
    }
    return resultado;
}

let resultadoMultiplicacion = multiplicarArray(arrayNumerico);
console.log("El resultado de la multiplicación es: " + resultadoMultiplicacion);

// Ejercicio 2
const frutasArray = ["manzana", "sandia", "melocoton", "mangos"];

function obtenerElementosDeSeisCaracteres(array){
    return array.filter(elemento => elemento.length === 6);
}

const elementosSeisCaracteres = obtenerElementosDeSeisCaracteres(frutasArray);
console.log("Elementos de seis caracteres:", elementosSeisCaracteres);

// Ejercicio 3
const siete = 7;
const numerosArray = [1,2,3,4,5,6,7,8,9,10];

numerosArray.forEach(function(numero){
    let resultado = siete * numero;
    console.log(siete + " X " + numero + " = " + resultado);
});

// Ejercicio 4
// Manera 1
const frutasIncluidas1 = ["manzana", "limon", "sandia", "pera", "toronja", "naranja"];
let frutaConSandia1 = frutasIncluidas1.find(fruta => fruta.includes("sandia"));
if(frutaConSandia1){
    console.log("El array incluye la palabra 'sandia': ", frutaConSandia1);
} else {
    console.log("El array no incluye la palabra 'sandia'");
}

// Manera 2
const frutas2 = ["manzana", "limón", "sandía", "pera", "toronja", "naranja"];
if (frutas2.includes("sandía")) {
    console.log("El arreglo incluye la fruta sandía.");
} else {
    console.log("El arreglo no incluye la fruta sandía.");
}

// Ejercicio 5
const usuariosArray = [
    {
        nombre: "Rafael Perez",
        email: "rafael@gmail.com"
     },
    {
        nombre: "Rosario Perez",
        email: "rosario@gmail.com"
     },
    {
        nombre: "Rodrigo Avila",
        email: "rodrigo@gmail.com"
     },
    {
        nombre: "Alberto Campos",
        email: "alberto@gmail.com"
     }
  ];

const usuarioEncontrado = usuariosArray.find(usuario => usuario.email === "rosario@gmail.com");

if(usuarioEncontrado) {
    console.log("El usuario", usuarioEncontrado.email ,"fue encontrado dentro del array de usuarios");
} else {
    console.log("El usuario no fue encontrado dentro del array de usuarios");
}

// Ejercicio 6
const arregloDescendente = [1, 6, 3, 4, 2, 56, 10];
arregloDescendente.sort((a, b) => b - a);
console.log("Arreglo ordenado descendentemente:", arregloDescendente);

// Ejercicio 7
const numerosMayoresACinco = [1,2,3,4,5,6,7];
const todosMayoresACinco = numerosMayoresACinco.every(numero => numero > 5);
if(todosMayoresACinco) {
    console.log("Todos los números son mayores a 5");
} else {
    console.log("No todos los números son mayores a 5");
}

// Ejercicio 8
const numeros3 = [1, 2, 3];
const stringsArray = ["hola", "mundo", "Azul"];
const booleanosArray = [true, false, true];
const concatenadosArray = numeros3.concat(stringsArray, booleanosArray);
console.log("Arrays concatenados:", concatenadosArray);

// Ejercicio 9
const numericoArray = [1,2,3,4,5,6];
const eliminacionPrimero = numericoArray.shift();
console.log("Elemento eliminado:", eliminacionPrimero);
console.log("Array actualizado:", numericoArray);

// Ejercicio 10
const indiceArray = [12,6,7,8,11,10,9,5,3,43];
let encontradoIndice = indiceArray.indexOf(5);
console.log("Índice del número 5:", encontradoIndice);

// Ejercicio 11
const arregloInicial1 = [];
for(let i = 1; i <= 10; i++) {
    arregloInicial1.push(i);
}
const copiaMultiplicada = arregloInicial1.map(numero => numero * 3);
console.log("Arreglo inicial:", arregloInicial1);
console.log("Copia del arreglo multiplicado por 3:", copiaMultiplicada);
