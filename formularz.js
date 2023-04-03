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
  var imieReg = /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,50})$/;
    var nazwiskoMiastoReg = /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,50})(([\s-]([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,50}))?)$/;
    var ulicaReg = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]{2,30}$/;
    var numerDomuReg = /^[0-9]{1,3}[a-zA-Z]{0,1}$/;
    var numerMieszkReg = /^([0-9]{1,3}[a-zA-Z]{0,1}?)?$/;
    var peselReg = /^[0-9]{11}$/;
    var kodPocztowyReg = /^[0-9]{2}-[0-9]{3}$/;
    var telefonReg = /^([0-9]{9})$/;


    var errorReg = false;
    if (!imie.match(imieReg)) {
    text += "imie, ";
  }
  if (nazwisko.includes("-")) {
    if (!nazwisko.match(nazwiskoMiastoReg)) {
        text += "nazwisko, ";
      }
  }else{
    if (!nazwisko.match(imieReg)) {
        text += "nazwisko, ";
      }
  }
    
    if (!ulica.match(ulicaReg)) {
        text += "ulica, ";
        errorReg = true;
    }
    if (!nrdom.match(numerDomuReg)) {
        text += "numer domu, ";
        errorReg = true;
    }
    if (!nrmiesk.match(numerMieszkReg)) {
        text += "numer mieszkania, ";
        errorReg = true;
    }
    if (!miasto.match(nazwiskoMiastoReg)) {
        text += "miasto, ";
        errorReg = true;
    }
    if (!telefon.match(telefonReg)) {
        text += "numer telefonu (XXXXXXXXX), ";
        errorReg = true;
    }
    if (!pesel.match(peselReg)) {
        text += "pesel(XXXXXXXXXXX), ";
        errorReg = true;
    }
    if (!kod.match(kodPocztowyReg)) {
        text += "kod Pocztowy(XX-XXX), ";
        errorReg = true;
    }
    if((new Date(dataur)).getFullYear()>2100||isNaN((new Date(dataur).getFullYear()))){
        text += "data, "; 
      errorReg = true; 
    }
    if (errorReg) {
        errorReg = false
    } else {
        document.getElementById("formularz").submit();
    }
if(text.charAt(text.length-2) == ","){
    text = text.slice(0,text.length-2);
}
ansp.innerHTML = text;
    text = "";
}
