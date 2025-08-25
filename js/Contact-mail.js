const contactform = document.getElementById("contact-Inquiry-form");
contactform.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted event triggered.");

    // Gather data from the form

    const firstName = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
const subject = document.getElementById("subject").value;


console.log("Collected form data:", { firstName, email, message, subject });


    // Create Email data
    const emailData = {
        "Host": "216.10.241.228",
        "Port": "587",
        "SMTPSecure": "ssl",
        "SenderEmail": "hitixa.bhuva@uniqueconsumerservices.com",
        "SenderEmailPassword": "1f1UOc{3U*66",  
        "ReciverEmail": "varunglobaledu@gmail.com",
        "Subject": subject,
        "Body": `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            min-height: 100vh;
        }
        
        .email-wrapper {
            max-width: 750px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(45deg, #736bff, #57b9fe);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="30" r="1.5" fill="white" opacity="0.1"/></svg>');
            animation: float 20s infinite linear;
        }
        
        @keyframes float {
            0% { transform: translateX(-100px) translateY(-100px) rotate(0deg); }
            100% { transform: translateX(100px) translateY(100px) rotate(360deg); }
        }
        
        .header h1 {
            font-size: 28px;
            font-weight: 800;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 1;
        }
        
        .header-subtitle {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.9);
            margin-top: 8px;
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 30px 20px;
            background: white;
        }
        
        .intro {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .intro-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
        }
        
        .intro-text {
            font-size: 16px;
            color: #6b7280;
            line-height: 1.6;
        }
        
        .fields-grid {
            display: grid;
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .field-card {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            padding: 15px;
            position: relative;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }
        
        .field-card:nth-child(1) { border-left-color: #3b82f6; }
        .field-card:nth-child(2) { border-left-color: #10b981; }
        .field-card:nth-child(3) { border-left-color: #f59e0b; }
        .field-card:nth-child(4) { border-left-color: #ef4444; }
        .field-card:nth-child(5) { border-left-color: #8b5cf6; }
        
        .field-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .field-icon {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 20px;
            opacity: 0.3;
        }
        
        .field-label {
            font-weight: 700;
            font-size: 13px;
            color: #374151;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .field-label::before {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: currentColor;
        }
        
        .field-value {
            font-size: 16px;
            color: #111827;
            font-weight: 500;
            line-height: 1.5;
            word-wrap: break-word;
        }
        
        .message-card {
            background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
            border: 1px solid #fbbf24;
            border-radius: 16px;
            padding: 30px;
            margin-top: 10px;
        }
        
        .message-card .field-value {
            white-space: pre-wrap;
            background: white;
            padding: 20px;
            border-radius: 12px;
            border: 1px solid #f3f4f6;
            min-height: 100px;
        }
        
        .footer {
            background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
            padding: 35px 30px;
            text-align: center;
            color: white;
        }
        
        .footer-logo {
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 15px;
            background: linear-gradient(45deg, #ff6b6b, #feca57);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .footer-text {
            font-size: 14px;
            color: #d1d5db;
            margin-bottom: 10px;
        }
        
        .footer-email {
            color: #60a5fa;
            text-decoration: none;
            font-weight: 600;
        }
        
        .footer-email:hover {
            color: #93c5fd;
        }
        
        .timestamp {
            background: rgba(255, 255, 255, 0.1);
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 12px;
            color: #d1d5db;
            margin-top: 20px;
            display: inline-block;
        }
        
        @media (max-width: 600px) {
            body { padding: 10px; }
            .content { padding: 30px 20px; }
            .header { padding: 30px 20px; }
            .field-card { padding: 20px; }
            .header h1 { font-size: 24px; }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="header">
            <h1>✨ New Contact Submission</h1>
            <div class="header-subtitle">Someone wants to connect with you</div>
        </div>
        
        <div class="content">
            <div class="intro">
                <div class="intro-icon">📧</div>
                <p class="intro-text">
                    A new contact form submission has been received. Here are the details:
                </p>
            </div>
            
            <div class="fields-grid">
                <div class="field-card">
                    <div class="field-icon">👤</div>
                    <div class="field-label">First Name</div>
                    <div class="field-value">${firstName}</div>
                </div>
                
                
                <div class="field-card">
                    <div class="field-icon">📧</div>
                    <div class="field-label">Email Address</div>
                    <div class="field-value">${email}</div>
                </div>
                
                <div class="field-card">
                    <div class="field-icon">📱</div>
                    <div class="field-label">subject</div>
                    <div class="field-value">${subject}</div>
                </div>
            </div>
            
            <div class="message-card">
                <div class="field-icon">💬</div>
                <div class="field-label">Message & Description</div>
                <div class="field-value">${subject}</div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-text">
                Need assistance? Contact our support team at 
                <a href="mailto:hello@nexusdigital.com" class="footer-email">hello@nexusdigital.com</a>
            </div>
            <div class="timestamp">
                📅 Received: July 4, 2025 at 2:30 PM
            </div>
        </div>
    </div>
</body>
</html>

    `,
    };

    console.log("Email data prepared:", emailData);

    const apiUrl = "./Mail/test.php";
    const headers = {
        "Content-Type": "application/json",
    };

    console.log("API URL:", apiUrl);

    function toggleClassForField(fieldId, className, duration) {
        console.log(`Adding class ${className} to ${fieldId} for ${duration}ms`);
        const field = document.getElementById(fieldId);
        field.classList.add(className);
        setTimeout(() => {
            field.classList.remove(className);
            console.log(`Removed class ${className} from ${fieldId}`);
        }, duration);
    }

    console.log("Checking form validation...");

   if (!firstName || !email  || !subject || !message) {
        console.log("Validation failed: Missing required fields.");
    if (!message) {
            toggleClassForField('message', 'border-danger', 3000);
        }
        if (!firstName) {
            toggleClassForField('firstName', 'border-danger', 3000);
        }
        if (!subject) {   // OPTIONAL: if you want to validate company name too
            toggleClassForField('subject', 'border-danger', 3000);
        }
        if (!email) {
            toggleClassForField('email', 'border-danger', 3000);
        }
    
        showFeedback('Please fill in all required fields.', 'col-12 text-center py-2 border-danger border text-danger mt-3');
        return;
    }
    

    console.log("Validating email...");
    if (!isValidEmail(email)) {
        console.log("Invalid email entered.");
        showFeedback('Please enter a valid email address.', 'col-12 text-center border-1 py-2 border-info border text-info mt-3');
        return;
    }

    console.log("Sending email request...");

    const submitButton = document.getElementById("submit-button");
submitButton.disabled = true;
submitButton.innerHTML = 'Sending... <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'; // Optional: show loading indicator

    fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(emailData),
    })
    .then((response) => response.json())
    .then((data) => {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send a message <span></span>';

        if (data.status) {
            console.log("Message sent successfully", data);
            showFeedback(
                "Message sent successfully",
                "col-12 text-center border-1 my-2 py-2 border-primary border text-primary"
            );
            HomeclearForm();
        } else {
            console.log("Server returned an error", data);
            showFeedback(
                "Message sending failed. Please try again later.",
                "col-12 text-center border-1 py-2 border-danger border text-danger"
            );
            HomeclearForm();
        }
    })
    .catch((error) => {
        console.error("Error while sending request:", error);
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send a message <span></span>';
        showFeedback(
            "An error occurred while sending the message. Please try again later.",
            "col-12 text-center border-1 py-2 border-danger border text-danger"
        );
    });
});

function isValidEmail(email) {
    console.log("Checking email format...");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    console.log(`Email validation result for ${email}: ${isValid}`);
    return isValid;
}

function showFeedback(message, type = "success") {
    const toast = document.getElementById("toast");
    const toastMessage = toast.querySelector(".toast-message");
    const toastIcon = toast.querySelector(".toast-icon");
    const toastProgress = toast.querySelector(".toast-progress");

    // Customize icon and color based on type
    if (type === "success") {
        toastIcon.textContent = "✓";
        toastIcon.style.color = "green";
        toastProgress.style.backgroundColor = "green";
    } else if (type === "error") {
        toastIcon.textContent = "⚠";
        toastIcon.style.color = "red";
        toastProgress.style.backgroundColor = "red";
    } else if (type === "info") {
        toastIcon.textContent = "ℹ";
        toastIcon.style.color = "blue";
        toastProgress.style.backgroundColor = "blue";
    }

    toastMessage.textContent = message;

    // Show toast
    toast.classList.add("show");

    // Animate progress bar and hide toast after 3s
    toastProgress.style.width = "100%";
    setTimeout(() => {
        toast.classList.remove("show");
        toastProgress.style.width = "0";
    }, 3000);
}

function HomeclearForm() {
    
    console.log("Clearing form fields...");
    document.getElementById('firstName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('subject').value = '';
    console.log("Form reset successfully.");
}