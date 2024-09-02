<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'vpraneethnadh@gmail.com';
  $subject = 'New Message from Portfolio Website';

  $body = "Name: $name\nEmail: $email\nMessage: $message";

  $headers = array(
    'From' => $email,
    'Reply-To' => $email,
  );

  mail($to, $subject, $body, $headers);

  header('Location: contact.html?message=success');
  exit;
?>