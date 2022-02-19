//Helpers

function calcularMediaAritmetica (lista) {
    // let  sumaLista = 0;
    
    // for (let i = 0; i <lista.length; i++) {
    //     sumaLista = sumaLista + lista[i]; 
    // }


    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    //metodo reduce va a permitir sumando cada uno de los elementos

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de medianas

function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);


    if (esPar(lista.length)){
        const personaMitad1 = lista [mitad -1];
        const personaMitad2 = lista [mitad];


        const mediana = calcularMediaAritmetica[personaMitad1, personaMitad2];
        return mediana;
    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }


};
 
//Mediana General
const salariosCol = colombia.map(
    function (persona){
      return persona.salary;  
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB
    }
);

function esPar (numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica (lista) {
    // let  sumaLista = 0;
    
    // for (let i = 0; i <lista.length; i++) {
    //     sumaLista = sumaLista + lista[i]; 
    // }


    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    //metodo reduce va a permitir sumando cada uno de los elementos

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}



const medianaGeneralCol = medianaSalarios (salariosColSorted);

//Mediana del top 10



const spliceStart = (salariosColSorted.length * (100 - 10)) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarioscolTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10lCol = medianaSalarios (medianaColTop10);


console.log ({
    medianaGeneralCol,
    medianaTop10Col,
    
});


