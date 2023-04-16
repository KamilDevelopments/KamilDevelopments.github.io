<HTML>
  <head>
  <link rel="stylesheet" type="text/css" href="login.css" />
  <meta charset="UTF-8">
  </head>
  <?php
 session_start();
 if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
  header("location: formularz.php");
  die();
}
 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   $login = $_POST['login'] ?? '';
   $password = $_POST['password'] ?? '';
   if ($login === 'admin' && $password === 'admin') {
     $_SESSION['logged_in'] = true;
     header('Location: formularz.php');
     die();
   }else{
    echo "<p>podano niepoprawne dane</p>";
   }
 }
?>
<body>
<p text-align=left><a href="index.html">Powrót</a></p>

<div id="main" >
<form id="myForm" method="POST" action="login.php">
  <label for="login">Login:</label>
  <input type="login" id="login" name="login" placeholder="admin"><br>
  <label for="password">Hasło:</label>
  <input type="password" id="password" name="password" placeholder="admin"><br>
  <input type="submit" value="Submit">
</div>
</body>
</html>
