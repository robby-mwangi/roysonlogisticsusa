const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "14695869434";

    const whatsappMessage =
        "Hello Royson Logistics,%0A%0A" +
        "I would like to request a transportation quote.%0A%0A" +
        "Name: " + name + "%0A" +
        "Company: " + company + "%0A" +
        "Email: " + email + "%0A" +
        "Phone: " + phone + "%0A%0A" +
        "Shipment Details:%0A" + message;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
});