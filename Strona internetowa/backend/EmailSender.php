<?php

require 'includes/PHPMailer.php';
require 'includes/Exception.php';
require 'includes/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;

function emailSender($email, $telnr, $imie, $tekst)
{
    // Tworzenie instancji PHP Mailera
    $mail = new PHPMailer();

    // Konfiguracja PHP Mailera
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->Username = ""; // twoj mail
    $mail->Password = ""; // haslo do twojego maila
    $mail->SMTPAuth = "true";
    $mail->SMTPSecure = "ssl";
    $mail->Port = "465";
    $mail->CharSet = "UTF-8";

    // Tresc maila

    $mail->Subject = "PODŁOGI - " . $imie;
    $mail->setFrom($email, "Arek");
    $mail->Body = $tekst .
        "\n\nAdres e-mail: " . $email .
        "\nNumer telefonu: " . $telnr;
    $mail->addAddress("arekzaluska@gmail.com");

    // Wysylanie maila

    if ($mail->Send()) {
        $mail->smtpClose();
        return true;
    } else {
        $mail->smtpClose();
        return false;
    }
}
