<?php
header('Access-Control-Allow-Origin: *');
if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"]) ) { 

    $email = $_POST['name'];
    $name = $_POST['email']; 
    $message = $_POST['message']; 
    $to = 'timerdmb@gmail.com';
    $subject = 'New message';
    $from = "info@timerdmb.com";
    $headers = "From:" . $from;

    if (mail($to, $subject, $message, $headers)) {
        echo "Mail Sent.";
    }
    else {
        echo "failed";
    }
    
}

?>