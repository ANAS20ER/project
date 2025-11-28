// common.js
// Gestion du mode sombre, partagée entre plusieurs pages

const modeToggle = document.getElementById("modeToggle");

if (modeToggle) {
    modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        modeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙 Mode sombre" : "☀️ Mode clair" ;
    });
}