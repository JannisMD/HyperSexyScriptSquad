//WEBSOCKET Verbindung herstellen
var senden = document.getElementById('senden');
var socket = io.connect('http://localhost:3000');

//HTML ELEMENTE HOLEN FÜE Chat
var message = document.getElementById('message');
var senden = document.getElementById('senden');
var chatAnzeige = document.getElementById('chatAnzeige');

//wegen bug
console.log(senden);
///////////////////////////////////////////////////////////////////////////////
var text = prompt('Sie haben den Chat betreten, bitte gib deinen Namen ein', 'Username');
chatAnzeige.innerHTML += '<p>' + 'Wilkommen im Chat' + ' ' + text + '</p>';
console.log(text);

//Click chat daten senden
senden.addEventListener('click', function(){

	socket.emit('chat', {
		message: message.value,
		chatName: text,
	});
  message.value = '';
});

//Frontend auf 'Chat' event hören
socket.on('chat', function(data){
	chatAnzeige.innerHTML += '<p>' + data.chatName + ': ' + data.message + '</p>';
});
