let altura = 1.73;
let peso = 88;
let imc = 0;

function calculoImc (altura,peso) {

    imc = peso / (altura*altura);
    return imc;
}

function calcularFactorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

let dolares = 10;
let cotizacionReal = 4.8;
let reales = 0;

function dolarAReal (dolares,cotizacionReal) {

    cotizacionReal = dolar*cotizacionReal;
    return reales;
}

let lado1 = 10;
let lado2 = 5;
let perimetro = 0;
let area = 0;

function calculoPerimetro (lado1,lado2){
    perimetro = (lado1*2) + (lado2*2);
    return perimetro;
}

function calculoArea (lad1,lado2){
    area = lado1*lado2;
    return area;
}

alert (`el perimetro del rectangulo es ${perimetro} y el area es ${area} `);

function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);

  function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);