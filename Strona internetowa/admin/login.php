
<?php
session_start();

$login = $_POST['login'];
$password = $_POST['password'];

if ($login == "admin" && $password == "1234") {
    $_SESSION["isLogin"] = true;
    header("Location: admin.html");
    print("udalo sie");
} else {
    print("złe dane logowania");
}
