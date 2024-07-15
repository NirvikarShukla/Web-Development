<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $recipient = $_POST['recipient'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Handle file upload (if needed)
    if (isset($_FILES['attachment'])) {
        $attachment = $_FILES['attachment'];
        // Process and attach the file as needed
        // (e.g., move it to a specific directory)
    }

    // Send email
    $headers = "From: webmaster@example.com"; // Set your desired "From" address
    if (mail($recipient, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
