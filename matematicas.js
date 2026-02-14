console.log ("Hola, este es el sistema matematico inicial ingrese \n 1. para sumar \n Ingrese 2 para mutiplicar"  );

var opcion = prompt("Ingrese su opcion");

    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));



    if (opcion == "1") {
        var resultado = num1 + num2;
    }else if (opcion == "2") {
        var resultado = num1 * num2;
    }


