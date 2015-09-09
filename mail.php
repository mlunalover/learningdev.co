<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['comment'];
$formcontent=" From: $name \n Email: $email \n Comment: $comment";
$recipient = "mlunalover@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='contact.html' style='text-decoration:none;color:#ff0099;'> Home</a>";
?>
