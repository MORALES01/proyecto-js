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

	var num = prompt("ingrese un numero");
	if (isNaN(num))
	{
		throw Error ("no es un numero valido");
	}
		else{ 
			num = num * 0.5;}

		alert("la mitad del numero es" + num);