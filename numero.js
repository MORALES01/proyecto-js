console.log("inicio del programa");
var numerodeUsuario = prompt("ingrese un numero de 1 al 5");
var numeroAdivinar = 3;

if(parseInt(numerodeUsuario)=== numeroAdivinar)
{
	adivinoCorrectamente =true;
}
	else if (parseInt(numerodeUsuario) > numeroAdivinar)
	{
		alert("El numero que ingreso es mayor");
		var nuevoIntento = prompt("Intenta de nuevo un numero de 1 al 5:");
		if (parseInt(nuevoIntento) === numeroAdivinar)
	{
		adivinoCorrectamente = true;
	}
	else 
	{
		adivinoCorrectamente = false;
	}
}
else if(parseInt(numerodeUsuario)< numeroAdivinar)
{
		alert("El numero a divinar es menor");
		var nuevoIntento = prompt("intente de nuevo, ingrese numero del 1 al 5:");
		if(parseInt(nuevoIntento)===numeroAdivinar)
		{
		adivinoCorrectamente =true;
	}
	else {
		adivinoCorrectamente =false;	
	}
}
	if (adivinoCorrectamente)
	{
		document.write ("<p> adivinaste</p>");
	}
	else {
	document.write ("<p> no adivinaste</p>")
	}
	console.log("programa completado");


