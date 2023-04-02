function walidacja() {

  // Pobranie wartości pól formularza
  let ansp = document.getElementById("ansp");
var imie = document.getElementById("imie").value.trim();
var nazwisko = document.getElementById("Nazwisko").value.trim();
var ulica = document.getElementById("Ulica").value.trim();
var nrdom = document.getElementById("nrdom").value.trim();
var nrmiesk = document.getElementById("nrmiesk").value.trim();
var miasto = document.getElementById("miasto").value.trim();
//var plec = document.getElementById("plec").value;
//var prawko = document.getElementById("prawko").checked;
var wojewodztwo = document.getElementById("wojewodztwo").value.trim();
var uwagi = document.getElementById("uwagi").value.trim();
var dataur = document.getElementById("dataur").value.trim();
var telefon = document.getElementById("telefon").value.trim();
var pesel = document.getElementById("pesel").value.trim();
var kod = document.getElementById("kod").value.trim();
  let text = "W formularzy wystąpił błąd w :";
  var imieReg = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2-50}$/;
 	
  if(!imie.match(imieReg)) {
    text+="imie, ";
  }
  if (!nazwisko.match(nameRegex)) {
	  text+="nazwisko, ";
  }
  
  
  
  
ansp.innerHTML= text;

}