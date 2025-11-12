document.addEventListener("DOMContentLoaded", function() {
  const joinButton = document.querySelector("button");

  joinButton.addEventListener("click", function() {
    alert("🔥 Welcome to Sehaj Fitness! Let's begin your journey! 💪");
  });
});
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
