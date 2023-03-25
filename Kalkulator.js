let text = "";
let isDot = false;
//get Buttons from html
let ansp = document.getElementById("ansp");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btndot = document.getElementById("btndot");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");
//add OnClick to buttons
btn1.addEventListener("click", addText);
btn2.addEventListener("click", addText);
btn3.addEventListener("click", addText);
btn4.addEventListener("click", addText);
btn5.addEventListener("click", addText);
btn6.addEventListener("click", addText);
btn7.addEventListener("click", addText);
btn8.addEventListener("click", addText);
btn9.addEventListener("click", addText);
btn0.addEventListener("click", addText);
btndot.addEventListener("click", addText);
btnPlus.addEventListener("click", addText);
btnMinus.addEventListener("click", addText);
btnMul.addEventListener("click", addText);
btnDiv.addEventListener("click", addText);

let btnDel = document.getElementById("btnDel");
btnDel.addEventListener("click", deleteText);

let btnSum = document.getElementById("btnSum");
btnSum.addEventListener("click", sum);
//add text to string
function addText(event) {
  var letter = event.target.innerHTML;
  var prevLetter = text.charAt(text.length - 1);
   if (letter == "." && prevLetter == "."||((letter == "+" || letter == "-" || letter == "*"||letter == "/")&&(prevLetter == "+" || prevLetter == "-" || prevLetter == "*"||prevLetter == "/"))) {
	return;
  }
  if((letter == "+" || letter == "-" || letter == "*" || letter == "/" || letter == ".")&&(text.length == 0)){
	  return;
  }
  var prevPrevLetter = text.charAt(text.length - 2);
  if((letter == "0" && prevLetter == "/")||(prevPrevLetter=="/"&&prevLetter == "." && letter == "0")){
	   alert("Nie dzielimy przez 0");
	  return;
  }
  if(letter == "." && isDot == true){
	  return;
  }
  if(letter == ".")
  {isDot = true;}
if(letter == "+" || letter == "-" || letter == "*" || letter == "/"){
	isDot = false;
	}
  
  text += event.target.innerHTML;
  ansp.innerHTML = text;
}
//add delete text from string
function deleteText() {
  text = text.slice(0, text.length-1);
  ansp.innerHTML = text;
}

function sum() {
	var prevLetter = text.charAt(text.length - 1);
	if(prevLetter == "+" || prevLetter == "-" || prevLetter == "*" || prevLetter == "/" || prevLetter == "." ){
		alert("Nie poprawny format zapisu");
		return;
	}
  let result = eval(text);
  result = Math.round(result*100)/100;
  ansp.innerHTML = result;
  text = result.toString();
  if(text.includes(".")){
	 isDot = true;   
  }else{
	isDot = false;     
}
  
}