function getName(){
	var name = document.getElementById("user-name").value;
	if (name === '') {// Si el jugador deja vacio el nombre
		document.getElementById('welcome-name').innerHTML += 'Invitad@';
	}else {
		document.getElementById('welcome-name').innerHTML += name;
	}
	var boxStart = document.getElementById('start');
	boxStart.style.visibility = 'visible';

}

function game(){
	var startGame = document.getElementById('option-game').value;
	if(startGame === 'a'){// Si el jugador contesta que SI quiere jugar (a)
		var box = document.getElementById('box');// Seleccionar la caja donde están todas las preguntas
		box.style.visibility = 'visible';// Cambiar el valor del atributo 'visibility' a 'visible' (muestra las preguntas)
	}else if(startGame === 'b' ){// Si el jugador NO quiere jugar
		document.getElementById('no-game').innerHTML = 'Vuelve cuando quieras jugar!';
		}else{// Cualquier otra opción que el jugador ingrese
			document.getElementById('no-game').innerHTML = 'Opcion incorrecta';
		}
}
// Funciones para verificar las respuestas
function answer1(){
	var ans1Text = document.getElementById('ans1').value;
	if(ans1Text  === 'a'){
		document.getElementById('result1').innerHTML = 'Respuesta Correcta!';
	}else{
		document.getElementById('result1').innerHTML = 'Respuesta Incorrecta!';
	}
}

function answer2(){
	var ans2Text = document.getElementById('ans2').value;
	if(ans2Text  === 'a'){
		document.getElementById('result2').innerHTML = 'Respuesta Correcta!';
	}else{
		document.getElementById('result2').innerHTML = 'Respuesta Incorrecta!';
	}
}
function answer3(){
	var ans3Text = document.getElementById('ans3').value;
	if(ans3Text  === 'c'){
		document.getElementById('result3').innerHTML = 'Respuesta Correcta!';
	}else{
		document.getElementById('result3').innerHTML = 'Respuesta Incorrecta!';
	}
}
