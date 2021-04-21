<?php


function addDataBase($email, $telnr, $imie, $tekst)
{
    $host = "127.0.0.1";
    $user = "root";
    $password = "";
    $database = "";
    $time = date('Y-m-d H:i:s');


    $query = 'INSERT INTO emails (name, message, email, telnumber,data) VALUES ("' . $imie . '", "' . $tekst . '", "' . $email . '", "' . $telnr . '","' . $time . '")';
    $connect =  mysqli_connect($host, $user, $password, $database);
    print mysqli_error($connect);
    if (mysqli_query($connect, $query)) {
        mysqli_close($connect);
        return true;
    } else {
        mysqli_close($connect);
        return false;
    }
}
