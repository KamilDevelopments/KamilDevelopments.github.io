<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <title>Baza użytkowników</title>
  <link rel="stylesheet" type="text/css" href="mysql.css" />
</head>
<body>

<?php
// Dane logowania do bazy danych
$servername = "localhost";
$username = "kamil";
$password = "Admin!200";
$dbname = "bazadanychbsi";
//Nawiązanie połączenia z bazą
$conn = new mysqli($servername, $username, $password, $dbname);
//sprawdzenie czy udało się połączyć
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Dodanie użytownika
if (isset($_POST["add"])) {
  $imie = $_POST["imie"];
  $nazwisko = $_POST["nazwisko"];
  $wiek = $_POST["wiek"];
// String z kwerendą
  $sql = "INSERT INTO user (imie, nazwisko, wiek) VALUES ('$imie', '$nazwisko', '$wiek')";
  if ($conn->query($sql) === TRUE) {
    echo "New record added successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Edycja użytkownika
if (isset($_POST["edit"])) {
  $id = $_POST["edit"];
  $imie = $_POST["imie"];
  $nazwisko = $_POST["nazwisko"];
  $wiek = $_POST["wiek"];

  $sql = "UPDATE user SET imie='$imie', nazwisko='$nazwisko', wiek='$wiek' WHERE id='$id'";
  if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Usunięcie użytkownika
if (isset($_POST["delete"])) {
  $id = $_POST["delete"];

  $sql = "DELETE FROM user WHERE id=$id";
  if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Wydobycie danych z bazy i stworzenie z nich tabeli
$sql = "SELECT * FROM user";
$result = $conn->query($sql);

echo "<table>";
echo "<tr><th>Imie</th><th>Nazwisko</th><th>Wiek</th><th>Akcje</th></tr>";
//Bierze 1 rekord z bazy
while ($row = $result->fetch_assoc()) {
  echo "<tr>";
  echo "<td>" . $row["imie"] . "</td>";
  echo "<td>" . $row["nazwisko"] . "</td>";
  echo "<td>" . $row["wiek"] . "</td>";
  echo "<td>";
  //Ukryty form do edycji lini
  echo "<form method=\"post\" style=\"display:inline\">";
  echo "<input type=\"hidden\" name=\"edit\" value=\"" . $row["id"] . "\">";
  echo "<input type=\"hidden\" name=\"imie\" id=\"edit_imie_" . $row["id"] . "\">";
  echo "<input type=\"hidden\" name=\"nazwisko\" id=\"edit_nazwisko_" . $row["id"] . "\">";
  echo "<input type=\"hidden\" name=\"wiek\" id=\"edit_wiek_" . $row["id"] . "\">";
  echo "<button onclick=\"document.getElementById('edit_imie_" . $row["id"] . "').value = document.getElementById('imie').value; document.getElementById('edit_nazwisko_" . $row["id"] . "').value = document.getElementById('nazwisko').value; document.getElementById('edit_wiek_" . $row["id"] . "').value = document.getElementById('wiek').value;\" >Edit</button>";
  echo "</form>";
  echo "<form method=\"post\" style=\"display:inline\">";
  echo "<input type=\"hidden\" name=\"delete\" value=\"" . $row["id"] . "\">";
  echo "<button type=\"submit\">Delete</button>";
  echo "</form>";
  echo "</td>";
  echo "</tr>";
}

echo "</table>";

$conn->close();
?>
<div id="main">
<form method="post">
  <label for="imie">Imie:</label>
  <input type="text" id="imie" name="imie" required minlength="1"><br><br>
  <label for="nazwisko">Nazwisko:</label>
  <input type="text" id="nazwisko" name="nazwisko" required minlength="1"><br><br>
  <label for="wiek">Wiek:</label>
  <input type="number" id="wiek" name="wiek" required minlength="1"><br><br>
  <button type="submit" name="add">Dodaj</button>
</form>
</div>
</body>
</html>