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
    var imieMiastoReg = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]{2,50}$/;
    var ulicaReg = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]{2,30}\s\d{1,4}[a-zA-Z]{0,1}$/;
    var numerDomuReg = /^[0-9]{1,4}[a-zA-Z]{0,1}$/;
    var peselReg = /^[0-9]{11}$/;
    var kodPocztowyReg = /^[0-9]{2}-[0-9]{3}$/;
    var telefonReg = /^([0-9]{3}[\s-]?){3}$/;

    var errorReg = false;
    if (!imie.match(imieMiastoReg)) {
    text += "imie, ";
  }
  //if (!nazwisko.match(nameRegex)) {
  // text+="nazwisko, ";
  //}
    
    if (!ulica.match(ulicaReg)) {
        text += "ulica, ";
        errorReg = true;
    }
    if (!nrdom.match(numerDomuReg)) {
        text += "numer domu, ";
        errorReg = true;
    }
    if (!nrmiesk.match(numerDomuReg)) {
        text += "numer mieszkania, ";
        errorReg = true;
    }
    if (!miasto.match(imieMiastoReg)) {
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
    if (errorReg) {
        errorReg = false
    } else {
        document.getElementById("formularz").submit();
    }
   
  
  
ansp.innerHTML = text;
    text = "";
}