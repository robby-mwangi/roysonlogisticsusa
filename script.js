javascript
// =========================================================
// ROYSON LOGISTICS LLC
// WhatsApp Contact Form
// =========================================================


// Get the contact form
const contactForm = document.querySelector(".contact-form");


// Royson Logistics WhatsApp number
const whatsappNumber = "14695869434";


// Listen for form submission
contactForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get information from the form
    const name = document.getElementById("name").value.trim();

    const company = document.getElementById("company").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();


    // Create the WhatsApp message
    const whatsappMessage =
        `Hello Royson Logistics,

I would like to inquire about your transportation services.

Customer Details:
Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}

Shipment Details:
${message}

Thank you.`;

    
    // Convert the message into a format WhatsApp can understand
    const encodedMessage = encodeURIComponent(whatsappMessage);


    // Create WhatsApp link
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});

