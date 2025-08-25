<?php
require 'smtp/PHPMailerAutoload.php';

class SendMail
{
    public $SenderEmail = "hitixa.bhuva@uniqueconsumerservices.com";
    public $SenderEmailPassword = "1f1UOc{3U*64";
    public $ReciverEmail = "varunglobaledu@gmail.com";
    public $Subject = "";
    public $Body = "hello";

    public function sendMail()
    {
        $inputData = json_decode(file_get_contents('php://input'), true);
        $subject = isset($inputData['Subject']) ? $inputData['Subject'] : '';
        $body = isset($inputData['Body']) ? $inputData['Body'] : '';


        $mail = new PHPMailer();
        $mail->SMTPDebug = 2; // Change to 3 for detailed debug output
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = '';
        $mail->Host = "216.10.241.228";
        $mail->Port = 587;
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Username = $this->SenderEmail;
        $mail->Password = $this->SenderEmailPassword;
        $mail->setFrom($this->SenderEmail, 'Your Name or Company'); // Add a name for better identification
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->addAddress($this->ReciverEmail);


        // Optional: Configure SSL options
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true,
            ],
        ];

        try {
            if (!$mail->send()) {
                // Handle failure
                echo json_encode([
                    'status' => false,
                    'message' => 'Message could not be sent.',
                    'error' => $mail->ErrorInfo,
                ]);
            } else {
                // Handle success
                echo json_encode([
                    'status' => true,
                    'message' => 'Message sent successfully.',
                ]);
            }
        } catch (Exception $e) {
            echo json_encode([
                'status' => false,
                'message' => 'Message could not be sent. Mailer Error.',
                'error' => $e->getMessage(),
            ]);
        }
    }
}

// Instantiate the class and call the method
$mailer = new SendMail();
// $mailer->sendMail();
?>