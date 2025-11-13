<?php
  // Check if form was submitted
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['from_name']) ? trim($_POST['from_name']) : '';
    $email = isset($_POST['email_id']) ? trim($_POST['email_id']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
      header('Location: src/contact.html?message=error');
      exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      header('Location: src/contact.html?message=error');
      exit;
    }

    $to = 'vpraneethnadh@gmail.com';
    $subject = 'New Message from Portfolio Website - ' . $name;
    
    $body = "You have received a new message from your portfolio website.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Attempt to send email
    $mailSent = @mail($to, $subject, $body, $headers);

    if ($mailSent) {
      header('Location: src/contact.html?message=success');
    } else {
      header('Location: src/contact.html?message=error');
    }
    exit;
  } else {
    // If not POST request, redirect to contact page
    header('Location: src/contact.html');
    exit;
  }
?>
