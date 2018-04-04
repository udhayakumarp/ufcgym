<?php
require 'PHPMailer/PHPMailerAutoload.php';

$recmail = 'aravindkumardev@gmail.com';

$mail = new PHPMailer;

$mail->isSMTP();                                   // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                            // Enable SMTP authentication
$mail->Username = 'ufcgym4321@gmail.com';          // SMTP username
$mail->Password = 'Admin@4321'; // SMTP password
$mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                 // TCP port to connect to

$mail->setFrom('info@ufcgym.com', 'UFC Gym');
//$mail->addReplyTo('udhaya@teampumpkin.com', 'UD');
$mail->addAddress($recmail);   // Add a recipient
// $mail->addCC('reachus@merusridevelopers.com');
//$mail->addBCC('bcc@example.com');

$mail->isHTML(true);  // Set email format to HTML

$bodyContent = '<h1>How to Send Email using PHP in Localhost</h1>';
$bodyContent .= '<p>This is the HTML email sent from localhost using PHP script by <b>Udhaya</b></p>';

$mail->Subject = 'Email from Localhost by Udhaya';
$mail->Body    = $bodyContent;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
