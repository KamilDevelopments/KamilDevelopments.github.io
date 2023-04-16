<HTML>
  <head>
  <link rel="stylesheet" type="text/css" href="stronaPHP.css" />

  </head>
<body>
<div id="main">
<form id="wylogujForm" method="POST" action="formularz.php">
        <input type="submit" name="wyloguj" value="Wyloguj">
      </form></br>
<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.php');
    exit;

	if(isset($_POST['wyloguj'])){
		session_destroy();
		header('Location: login.php');
		exit();
	  }
}
		if($_POST) {
			echo "<p>Imię: " . $_POST['imie'] . "</p>";
			echo "<p>Nazwisko: " . $_POST['Nazwisko'] . "</p>";
			echo "<p>Ulica: " . $_POST['Ulica'] . "</p>";
			echo "<p>Numer domu: " . $_POST['nrdom'] . "</p>";
			echo "<p>Numer mieszkania: " . $_POST['nrmiesk'] . "</p>";
			echo "<p>Miasto: " . $_POST['miasto'] . "</p>";
			echo "<p>Płeć: " . $_POST['plec'] . "</p>";
			echo "<p>Prawo jazdy: " . (isset($_POST['prawko']) ? "Tak, posiada" : "Nie posiada") . "</p>";
			echo "<p>Województwo: " . $_POST['wojewodztwo'] . "</p>";
			echo "<p>Uwagi: " . $_POST['uwagi'] . "</p>";
			echo "<p>Data urodzenia: " . $_POST['dataur'] . "</p>";
			echo "<p>Numer telefonu: " . $_POST['telefon'] . "</p>";
			echo "<p>Pesel: " . $_POST['pesel'] . "</p>";
			echo "<p>Kod pocztowy: " . $_POST['kod'] . "</p>";
		}
	?>

</div>





</body>
</HTML>