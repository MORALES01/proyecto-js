//console.log("inicio del programa");
//var dado =Math.floor(Math.random() * 6) + 1;
//alert("dato dice:" + dado);
//console.log("programa completado");

/*function tiraDados(){
//	var dado = Math.floor(Math.random() * 6) + 1;
//	return dado;
}
alert("tiramos 3 datos:");
alert(" el dado dice : " + tiraDados());
var multiplo = 2 + tiraDados();
alert( "El multiplo de bonus es :" + multiplo);*/

/*function numeroAlAzarHastaLimite(limite){
	var num = Math.floor(Math.random()* limite) + 1;
	return num;	}
	var numAzar = numeroAlAzarHastaLimite(100);
	alert("El numero Es:" + numAzar);*/

/*function max(numero1, numero2)
{
if(parseInt(numero1)> parseInt(numero2))
{
	var numMax = numero2;
}
	return numMax;
}
var result= max(10,6);
	alert("El numero mayor Es:" + result);*/
	/*function saludo(){
		 mensaje ="hola a todos";
		alert(mensaje); 
	}
	var mensaje = "chao";
	saludo();
	alert(mensaje);
	saludo();*/

	/*var num = prompt("ingrese un numero");
	if (isNaN(num))
	{
		throw Error ("no es un numero valido");
	}
		else{ 
			num = num * 0.5;}

		alert("la mitad del numero es" + num);*/


	/*function numeroAlAzarHastaLimite(limiteInferior, limiteSuperior){
	if (isNaN(limiteInferior)|| isNaN(limiteSuperior)
		throw new Error("valor ingresado no corresponde a un numero");
	var num = Math.round(Math.random()*(limiteSuperior +limiteInferior)) +limiteInferior;
	return num;
}

var limiteSuperior = prompt("ingrese unlimite superior pára el numeroAlAzar");
var limiteInferior = prompt("ingrese unlimite inferior pára el numeroAlAzar");
alert(" su numero al Azar es: "+ numeroAlAzarHastaLimite(parseInt(limiteInferior),
parseInt(limiteSuperior)));*/

/*function numeroAlAzarEntreLimites(limite1,limite2)
{
	var num=Math.floor(Math.random()*(limite1-limite2))+limite2;
	return num;
}
var limiteSuperior=prompt("Ingrese limite superior: ");
var limiteInferior=prompt("Ingrese limite Inferior: ");

if (isNaN(limiteInferior) || isNaN(limiteSuperior))
{
	throw Error("Numero no es valido");
}

var contador = 0;
while (contador<10)
{
var randomico = numeroAlAzarEntreLimites(parseInt(limiteSuperior),parseInt(limiteInferior));
document.write(randomico+" ");
contador++;
}*/

function numeroAdivinar()
{
	var result = Math.floor(Math.random()*100)+1;
	return result;
	}
var numero = numeroAdivinar();
var contad = 0;

	while (true){
	contad = contad+1;
	num2 = numeroAdivinar();
	if (numero === num2)
{
		alert("numero inicial: " + numero);
		alert("numero adivinado: " + num2);
		break;
	}
}
	alert("total intentos: " + contad);