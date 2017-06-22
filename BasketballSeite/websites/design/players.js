//DATEN VOM SERVER HOLEN MIT DER GET-METHODE
////////////////////////////////////////////
function holeDaten(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/api/players');
  xhr.responseType = 'json';

  xhr.onload = function(){
    var data = xhr.response;
    if(data !== null){

      console.log(data);

      //Vorherige Felder löschen
      /////////////////////////////////////////////
      var tab = document.getElementById('tabelle');
      while(tab.rows.length > 1){
        tab.deleteRow(1);
      }

      //Tabelle ertellen sollten Daten da sein.
      //Seite blockiert nicht, da wir Daten direkt beim Laden
      //verarbeiten.
      ///////////////////////////////////////////////////////
        document.getElementById('tabellenUeberschrift').innerHTML = "Alle Spieler";
        //Hier erst die Überschriften
        ////////////////////////////////////////////////////////////////////////////
        var tUeberschrift = document.getElementById('tabelle').insertRow(1);
        var schriftEins = document.createElement("th");
        var schriftZwei = document.createElement("th");
        var schriftDrei = document.createElement("th");
        var schriftVier = document.createElement("th");
        var schriftFuenf = document.createElement("th");
        var schriftSechs = document.createElement("th");
        var schriftSieben = document.createElement("th");
        var schriftAcht = document.createElement("th");
        var schriftNeun = document.createElement("th");


        //Jetzt Überschriften definieren
        //////////////////////////////////
        schriftEins.innerHTML = "ID";
        schriftZwei.innerHTML = "Vorname";
        schriftDrei.innerHTML = "Name";
        schriftVier.innerHTML = "Verein";
        schriftFuenf.innerHTML = "Coach";
        schriftSechs.innerHTML = "Position";
        schriftSieben.innerHTML = "Nummer";
        schriftAcht.innerHTML = "Jahr";
        schriftNeun.innerHTML = "Favorite";


        //Felder an Zeile anheften
        ///////////////////////////////////////
        tUeberschrift.appendChild(schriftEins);
        tUeberschrift.appendChild(schriftZwei);
        tUeberschrift.appendChild(schriftDrei);
        tUeberschrift.appendChild(schriftVier);
        tUeberschrift.appendChild(schriftFuenf);
        tUeberschrift.appendChild(schriftSechs);
        tUeberschrift.appendChild(schriftSieben);
        tUeberschrift.appendChild(schriftAcht);
        tUeberschrift.appendChild(schriftNeun);


        //Werte aus JSON array einlesen und Tabelle erstellen
        /////////////////////////////////////////////////////////////
        for(var i = 0; i < data.length; i++){

          var zeile = document.getElementById('tabelle').insertRow(2);

          var obj = data[i];
          for(var key in obj){
            var attrName = key;
            var attrValue = obj[key];

            var feld = document.createElement("td");
            feld.innerHTML = attrValue;
            zeile.appendChild(feld);
          }
        }
    }

  };
  xhr.send(null);

}

function holeFavoriten(){


  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/api/players?favorites=true');
  xhr.responseTyp = 'json';

  xhr.onload = function(){
    var dataEins = xhr.response;
    dataEinsObjekte = JSON.parse(dataEins);

    if(dataEins != null){
      console.log(dataEins);

      //Vorherige Felder löschen
      /////////////////////////////////////////////
      var tab = document.getElementById('tabelle');
      while(tab.rows.length > 1){
        tab.deleteRow(1);
      }

      //Überschrift ändern
      ///////////////////////////////////////////////////////////////////////
      document.getElementById('tabellenUeberschrift').innerHTML = "Favoriten";

      //Hier erst die Überschriften
      ///////////////////////////////////////////////////////////////////
      var tUeberschrift = document.getElementById('tabelle').insertRow(1);

      var schriftEins = document.createElement("th");
      var schriftZwei = document.createElement("th");
      var schriftDrei = document.createElement("th");
      var schriftVier = document.createElement("th");
      var schriftFuenf = document.createElement("th");
      var schriftSechs = document.createElement("th");
      var schriftSieben = document.createElement("th");
      var schriftAcht = document.createElement("th");
      var schriftNeun = document.createElement("th");

      //Jetzt Überschriften definieren
      ////////////////////////////////
      schriftEins.innerHTML = "ID";
      schriftZwei.innerHTML = "Vorname";
      schriftDrei.innerHTML = "Name";
      schriftVier.innerHTML = "Verein";
      schriftFuenf.innerHTML = "Coach";
      schriftSechs.innerHTML = "Position";
      schriftSieben.innerHTML = "Nummer";
      schriftAcht.innerHTML = "Jahr";
      schriftNeun.innerHTML = "Favorite";

      //Felder an Zeile anheften
      ///////////////////////////////////////
      tUeberschrift.appendChild(schriftEins);
      tUeberschrift.appendChild(schriftZwei);
      tUeberschrift.appendChild(schriftDrei);
      tUeberschrift.appendChild(schriftVier);
      tUeberschrift.appendChild(schriftFuenf);
      tUeberschrift.appendChild(schriftSechs);
      tUeberschrift.appendChild(schriftSieben);
      tUeberschrift.appendChild(schriftAcht);
      tUeberschrift.appendChild(schriftNeun);

      //Werte aus JSON array einlesen und Tabelle erstellen
      /////////////////////////////////////////////////////
      for(var i = 0; i < dataEinsObjekte.length; i++){

        var zeile = document.getElementById('tabelle').insertRow(2);

        var obj = dataEinsObjekte[i];
        for(var key in obj){
          var attrName = key;
          var attrValue = obj[key];

          var feld = document.createElement("td");
          feld.innerHTML = attrValue;
          zeile.appendChild(feld);
        }
      }

    }
  };
  xhr.send(null);
}
