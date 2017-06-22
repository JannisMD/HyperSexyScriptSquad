

//Server starten
var express = require('express');
var app = express();
var server = app.listen(3000,function(){
  console.log('Server läuft');
});
app.use(express.static('websites'));


//Module für die Get/Post etc aufrufe
var _ = require('underscore');
var players = require('./generated.json');
//
//
//Socket Setup//////////////////////////////////////////////////
var socket = require('socket.io');
var io = socket(server);

io.on('connection',function(socket){
  console.log('Socket Verbindung hergestellt', socket.id);


  //auf chat emit reagieren ,, data daten die gesendet werden
  socket.on('chat', function(data){
    //wegen bug gemacht
    console.log('jetzt Server.js methode chat');
    //remote call
    io.sockets.emit('chat', data);
  });
});

////////////////////////////////////////////////////////////////

app.get('/api/players', function(req,res){
  if(req.query.favorites && req.query.favorites == 'true'){
    console.log('Favoriten werden angezeigt');
    var active = 'isActive';
    var filtered = _.filter(players,function(element){
      return element[active] === true;
    });
    //console.log(filtered);
    return res.json(filtered);
  }
  if(!req.query.favorite && !req.query.search){
    console.log('Alle Spieler');
    console.log(players);


    return res.json(players);

  }
  if(req.query.search){
    var buchstabe = req.query.search;
    console.log('Nach '+' '+buchstabe + 'wird sortiert');
    var reg = new RegExp('^' + buchstabe);
    var nachname = 'name';
    var filter = _.filter(players,function(element){
      return reg.test(element[nachname]);
    });
    console.log('Nach Char sortiert wird gesendet');

    return res.json(filter);

  }

});

app.delete('/api/players/:id',function(req,res){
  var id = req.params.id;
  var deletedPlayers = players;
  console.log('delete request für id: ' + id);
  var identifier = '_id';
  var filtered = _.filter(deletedPlayers,function(element){
    if(element[identifier] === id){
      /*
      delete element._id;
      delete element.name;
      delete element.vorname;
      delete element.verein;
      delete element.coach;
      delete element.position;
      delete element.number;
      delete element.jahr;
      delete element.isActive;
      //console.log(delete element);
      //console.log(deletedPlayers);
      */
      delete element;
    }
    return element;
  });

  res.json(filtered);

  //res.end('gelöscht');
});

app.post('/api/players', function(req,res){
  var antwort = {"message":"Spieler wurde erfolgreich gespeichert"};
  console.log('POST');
  res.json(antwort);
});

app.put('/api/players/:id', function(req,res){
  var id = req.params.id;
  console.log(id);
  var antwort = {"message":"Spieler geupdatet"};
  res.json(antwort);
});

//CHAT WEBSOCKETS
