// Navigation functionality
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

const navLinks = document.querySelectorAll("nav ")
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseMessage = document.getElementById("responseMessage");

    // Basic form validation
    if (name && email && message) {
        // Mock a successful submission
        responseMessage.textContent = "Thank you for reaching out! We will get back to you soon.";
    } else {
        responseMessage.textContent = "Please fill out all fields.";
    }
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents form from submitting the traditional way

  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  // Send email with EmailJS
  emailjs.sendForm("service_gwh4kmk", "template_jw5agd9", form, "Cc7BpI-iZig7Q1scs")
      .then(
          (result) => {
              console.log("Email sent:", result.text);
              responseMessage.textContent = "Thank you! Your message has been sent.";
              form.reset(); // Reset form fields
          },
          (error) => {
              console.log("Failed to send email:", error.text);
              responseMessage.textContent = "Sorry, there was an error sending your message. Please try again.";
          }
      );
});

