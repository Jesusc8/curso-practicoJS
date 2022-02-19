const lista1 = [
    1,
    2,
    3,
    1,
    3,
    4,
    1,
    3,
    4,
    2,
    2,
    1, 
];

const lista1Count = {};

//map Recorrer el array
lista1.map(
    function(elemento) {
        if (lista1Count[elemento]){

            lista1Count[elemento] += 1; 
        } else {
            
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries (lista1Count).sort (
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }   
);

const moda = lista1Array[lista1Array.length - 1];

//Object.entries() convierte los elementos de un objeto a un array con arrays por dentro
// const lista1Array = Object.entries(lista1Count).sort (
//     function (valorAcumulado, nuevoValor) {
//         valorAcumulado - nuevoValor
//     }
// );
