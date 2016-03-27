//var verbo = prompt ("Estimado usuario, ingrese un verbo: ");
//var sustantivo = prompt ("Ahora ingrese un sustantivo: ");
//var adjetivo = prompt ("Por último, ingrese un adjetivo: ");
//document.write("<h1>Cuenta cuentos</h1><br>");
//document.write("<p>El "+sustantivo+" "+adjetivo+" "+verbo+" locamente,</p>");
//document.write("<p>porque cuando "+verbo+" el "+sustantivo+" siempre es "+adjetivo+",</p>");
//document.write("<p>por eso el "+sustantivo+" siente que es muy "+adjetivo+" y es así que cada día "+verbo+" que "+verbo+".</p>");

console.log("inicio del programa");
var preguntas= 3;
var preguntasFaltantes = "quedan" + preguntas + "preguntas.";
alert ("Este es el juego del cuenta cuentos. Sigue las instrucciones.");
var sustantivo1 = prompt("ingrese un Sustantivo." + preguntasFaltantes);
preguntas = preguntas +1;
preguntasFaltantes ="quedan"+preguntas +"preguntas.";
var adjetivo1 =prompt("ingrese un adjetivo" + preguntasFaltantes);
preguntas -= 1;
preguntasFaltantes = "quedan" + preguntas+ "preguntas."
var verbo1 = prompt("ingrese un verbo" + preguntasFaltantes);

var cuentos = "El" + adjetivo1 + "" +sustantivo1 + "quedan" + verbo1+" en el balcon de su caleta!";
document.write("<h1> cuentos</h1><p>"+ cuentos + "</p>");
console.log ("programa final");