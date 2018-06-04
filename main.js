var good = 0; // Contador para respuestas correctas
var bad = 0; // Contador para respuestas incorrectas
function getName(){
	var name = document.getElementById("user-name").value;
	if (name === '') {// Si el jugador deja vacio el nombre
		document.getElementById('welcome-name').innerHTML += 'Invitad@';
	}else {
		document.getElementById('welcome-name').innerHTML += name;
	}
	var boxStart = document.getElementById('start');
	boxStart.style.display = 'inline';

}

function game(){
	var startGame = document.getElementById('option-game').value;
	if(startGame === 'a'){// Si el jugador contesta que SI quiere jugar (a)
		var box = document.getElementById('box');// Seleccionar la caja donde están todas las preguntas
		box.style.display = 'inline';// Cambiar el valor del atributo 'display' a 'inline' (muestra las preguntas)
	}else if(startGame === 'b' ){// Si el jugador NO quiere jugar
		document.getElementById('no-game').innerHTML = 'Vuelve cuando quieras jugar!';
		}else{// Cualquier otra opción que el jugador ingrese
			document.getElementById('no-game').innerHTML = 'Opcion incorrecta';
		}
}
// Funciones para verificar las respuestas
function answer1(){
	var ansText = document.getElementById('ans1').value;
	if(ansText  === 'a'){
		document.getElementById('result1').innerHTML = 'Respuesta Correcta!';
		good+=1;
	}else{
		document.getElementById('result1').innerHTML = 'Respuesta Incorrecta!';
		bad+=1;
	}
}

function answer2(){
	var ansText = document.getElementById('ans2').value;
	if(ansText  === 'a'){
		document.getElementById('result2').innerHTML = 'Respuesta Correcta!';
		good+=1;
	}else{
		document.getElementById('result2').innerHTML = 'Respuesta Incorrecta!';
		bad+=1;
	}
}
function answer3(){
	var ansText = document.getElementById('ans3').value;
	if(ansText  === 'c'){
		document.getElementById('result3').innerHTML = 'Respuesta Correcta!';
		good+=1;
	}else{
		document.getElementById('result3').innerHTML = 'Respuesta Incorrecta!';
		bad+=1;
	}
	var boxFinal = document.getElementById('results-box');
	boxFinal.style.display = 'inline'; // Mostrar los resultados finales
	document.getElementById('right-answers').innerHTML += good; // Agregar marcador de respuestas correctas
	document.getElementById('wrong-answers').innerHTML += bad; // Agregar marcador de respuestas incorrectas

}
