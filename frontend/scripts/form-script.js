window.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "#contact") {
    const form = document.querySelector(".retro-form");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".retro-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.createElement("div");
    message.textContent = "Form submitted successfully!";
    message.style.backgroundColor = "#000080";
    message.style.color = "white";
    message.style.padding = "0.5rem";
    message.style.marginTop = "1rem";
    message.style.textAlign = "center";
    message.style.border = "2px solid black";
    message.style.boxShadow = "inset -2px -2px 0 #fff, inset 2px 2px 0 #404040";

    this.appendChild(message);

    this.reset();

    setTimeout(() => message.remove(), 3000);
  });
});
