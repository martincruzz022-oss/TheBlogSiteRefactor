// Contact form alert
const contactForm = document.getElementById("contactForm");
const messageAlert = document.getElementById("messageAlert");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    messageAlert.classList.add("show");
    contactForm.reset();
  });
}