function aleatorio(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var opcionUsuario;
var opcionPc = 0;
var opciones = ["Piedra","Papel","Tijeras"];

var Piedra  = 0;
var Papel   = 1;
var Tijeras = 2;


function run(opcionUsuario){
    opcionPc = aleatorio(0,2);
if ( opcionUsuario == Piedra){
	if(opcionPc == Piedra){
		document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Empate<br/><br/>Elegiste: Piedra<br/>Computadora Elige: Piedra</h1>";
	}
	else if(opcionPc == Papel){
		document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Perdiste<br/><br/>Elegiste: Piedra<br/>Computadora Elige: Papel</h1>";
	}
	else if(opcionPc == Tijeras){
		document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Ganaste<br/><br/>Elegiste: Piedra<br/>Computadora Elige: Tijeras</h1>";
	}
}
else if ( opcionUsuario == Papel){
	if(opcionPc == Piedra){
		document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Ganaste<br/><br/>Elegiste: Papel<br/>Computadora Elige: Piedra</h1>";
	}
	else if( opcionPc == Papel){
		document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Empate<br/><br/>Elegiste: Papel<br/>Computadora Elige: Papel</h1>";
	}
	else if(opcionPc == Tijeras){
		document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Perdiste<br/><br/>Elegiste: Papel<br/>Computadora Elige: Tijeras</h1>";
	}
}
else if( opcionUsuario == Tijeras){
	if(opcionPc == Piedra){
		document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Perdiste<br/><br/>Elegiste: Tijeras<br/>Computadora Elige: Piedras</h1>";
	}
	else if( opcionPc == Papel){
	    document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Ganaste<br/><br/>Elegiste: Tijeras<br/>Computadora Elige: Papel</h1>";
	}
	else if(opcionPc == Tijeras){
		document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>Empate<br/><br/>Elegiste: Tijeras<br/>Computadora Elige: Tijeras</h1>";
	}
else {document.getElementById('efecto').innerHTML ="<h1 style='font-size:4em; color:white; text-align:center;'>¿¡¿¡Que haces?!?!<br/>Numero del 0 al 2";
     }
}
document.getElementById('efecto').style.display = "";
}

function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}