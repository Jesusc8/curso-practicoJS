//Codigo del cuadrado
console.group ("Cuadrados");

// const ladoCuadrado = 5; // const no va a cambiar el valor de mi var
// console.log ("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado *4;
} 

perimetroCuadrado (12);
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
    return lado * lado;
} 

areaCuadrado (12);

// const areaCuadrado = ladoCuadrado *ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado+ "cm2");

console.groupEnd();

//Codigo del triangulo
console.group ("Triangulos");

// const ladoTriangulo1 = 6; // const no va a cambiar el valor de mi var
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log ("Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     +"cm, " 
//     + ladoTriangulo2 
//     + "cm, "
//     + baseTriangulo 
//     + "cm");



// console.log("El altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 


// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const alturaTriangulo = 5.5;

function areaTriangulo (base, altura){

    return (base * altura) / 2;
} 

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo+ "cm2");


console.groupEnd();

//Codigo del circulo

console.group ("Cirulos");

//Radio

const radioCirculo = 4;
console.log ("El radio del circulo miden: "+ radioCirculo + "cm");

//diametro
// const diametroCirculo = radioCirculo * 2;
// console.log ("El diametro del circulo miden: "+ diametroCirculo + "cm");

function diametroCirculo (radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;

console.log ("La variable PI del circulo miden: "+ PI + "cm");

//Circunferencia
// const perimetroCirculo = diametroCirculo * PI;

function perimetroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}


//Area
//const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo (radio) { 
    return (radio * radio) * PI;
}


// console.log ("El area del circulo miden: "+ areaCirculo + "cm");


console.groupEnd();

// Aqui interactuamos con HTML

function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
