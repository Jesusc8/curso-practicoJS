

// let declara una variable que puede cambiar en el futuro


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