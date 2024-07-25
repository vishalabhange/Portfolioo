let docTitle = document.title;
window.addEventlistener("blur", () => {
  document.title = "Come back :(";
});
window.addEventlistener("focus", () => {
  document.title = docTitle;
});

//   contact us **********->

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_2efunlr";
  const templateID = "template_x58cuup";

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(serviceID, templateID, templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("Failed to send the message. Please try again later.");
    }
  );
});
