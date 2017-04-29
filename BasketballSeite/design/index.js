
(function(global) {

	var header  = document.querySelector('header');
	var welcome = document.querySelector('header div');
	var video   = document.querySelector('main iframe');



	if (header !== null && welcome !== null) {

		var _resize = function() {

			var offset = ((global.innerHeight - welcome.offsetHeight) / 2).toFixed(0);

			header.style.paddingTop    = offset + 'px';
			header.style.paddingBottom = offset + 'px';


			var width  = Math.floor(global.innerWidth * 7/8 / 128) * 128;
			var height = width * 9/16;


			video.setAttribute('width',  width);
			video.setAttribute('height', height);

		};


		global.addEventListener('resize', _resize, true);
		global.addEventListener('orientationchange', _resize, true);

		setTimeout(function() {
			_resize();
		}, 100);

	}

})(this);

//MEIN SCRIPT FÜR DIE INDEX HTML WÜRDE AUCH FUNKTIONIEREN WENN IN HTML DIE ONSUBMIT MIT DER METHODE WÄRE
/*var element = document.getElementById('formularLos');
element.addEventListener('click', chkFormular);

//hier jetzt alle überprüfungen für die einzelnen Felder in einer Funktion
function chkFormular(){
	//FELD VORNAME
	//
	//
	if(document.Formular.vorname.value == ""){
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.vorname.focus();
		return false;
	}
	//FELD NACHNAME
	//
	//
	if (document.Formular.name.value == "") {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.name.focus();
		return false;
	}
	//FELD VEREIN
	//
	//
	if(document.Formular.verein.value == ""){
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.verein.focus();
		return false;
	}
	//FELD HEADCOACH
	//
	//
	if(document.Formular.hcoach.value == ""){
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.hcoach.focus();
		return false;
	}

	//FELD ASSISTENTCOACH
	//
	//
	if(document.Formular.acoach.value == ""){
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.acoach.focus();
		return false;
	}




}
*/
var aktiv = document.getElementById('aktiv');
var inaktiv = document.getElementById('inaktiv');

var arrayDatum = document.getElementById('jahr').value;
var arrayDatumSplit = arrayDatum.split(".");

function checkAktiv(){
	if (!aktiv.checked && !inaktiv.checked) {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.aktiv.focus();
		return false;
	}
	if (arrayDatumSplit[2] >= 2016) {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.jahr.focus();
		return false;
	}
	if(arrayDatumSplit[2] <= 1){
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		document.Formular.jahr.focus();
		return false;
	}
}
