function walidacja() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    
    if (login === "admin" && password === "admin") {
      window.location.href = "formularz.php";
    } else {
      alert("Login = admin, Hasło = admin");
    }
  }