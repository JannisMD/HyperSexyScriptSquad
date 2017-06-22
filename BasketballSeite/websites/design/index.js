
//Hier jetzt alle Überprüfungen für die einzelnen Felder in einer Funktion
//--> Schauen ob Feld leer ist
//--> Schauen ob Pattern eingehalten wurde
//--> In HTML5 wird das Datum überprüft
//////////////////////////////////////////////////////////////////////////
function chkFormular(){
	var ok = true;
	var inputField = document.getElementById("vorname");
	var pattern = /^[a-zA-zöaüßÖÄÜ]+$/;

	if(inputField.value.length == 0 || !pattern.test(inputField.value) ){
		ok = false;
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		inputField.focus();
	}
	inputField = document.getElementById("name");
	if (inputField.value.length == 0 || !pattern.test(inputField.value)){
		ok = false;
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		inputField.focus();
	}
	inputField = document.getElementById("verein");
	if(inputField.value.length == 0 || !pattern.test(inputField.value)){
		ok = false;
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.verein.focus();
	}
	inputField = document.getElementById("hcoach");
	if(inputField.value.length == 0 || !pattern.test(inputField.value)){
		ok = false;
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		inputField.focus();
	}
	inputField = document.getElementById("acoach");
	if(inputField.value.length == 0 || !pattern.test(inputField.value)){
		ok = false;
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		inputField.focus();

	}
	inputField = document.getElementById("aktiv");
	var inputFieldTwo = document.getElementById("inaktiv");
	if (!aktiv.checked && !inaktiv.checked) {
		ok = false;
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		inputField.focus();
	}

	return ok;
}

//DATEN SENDEN MIT POST METHODE
///////////////////////////////
function sendData(form){

	if(chkFormular()){
		console.log("true");
		var formData = new FormData(form);

		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost:3000/api/players' ,true);
		xhr.responseTyp = 'json';
		xhr.onload = function(json){ }
		xhr.send(formData);
		console.log("abgeschickt");
		alert("Ihre Daten wurden erfolgreich an den Server übermittelt");

	}	else {
		console.log("false");
	  }


}
/*
//WEBSOCKET verbindung herstellen
var socket = io.connect('http://localhost:3000');

//HTML ELEMENTE HOLEN FÜE chat
var message = document.getElementById('message');
var chatName = document.getElementById('chatName');
var senden = document.getElementById('senden');
var chatAnzeige = document.getElementById('chatAnzeige');

//Events emiten , chat name des request
senden.addEventListener('click', function(){

	socket.emit('chat', {
		message: message.value,
		chatName: chatName.value
	});
});

//Frontend auf Chat event hören
socket.on('chat', function(data){
	chatAnzeige.innerHTML += '<p>' + data.chatName + ':' + data.message + '</p>';
});
*/
