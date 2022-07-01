//  Nota:
//  Mi programa es capáz de mostrar la tabla del 1 al 100,
//  dependiendo el número que ingrese el usuario lo va a 
//  multiplicar del uno al diez dando los resultados al instante
//  y le avisará con una alerta que lo muestra en consola.


let numero = parseInt(prompt("Ingrese un numero de 1 a 100"));
if (numero <=100) {
    alert (`se mostrará en consola la tabla del ${numero}`);
    for(let i = 1; i <=10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    alert ("El numero ingresa no es valido");
}

