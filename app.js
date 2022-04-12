// toggle between day/night mode
const btn = document.querySelector(".darkmode-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
