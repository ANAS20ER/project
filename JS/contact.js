document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("pro-form");
    const status = document.getElementById("pro-status");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        status.style.color = "#0057b8";
        status.textContent = "⏳ Envoi en cours...";

        setTimeout(() => {
            status.style.color = "#28a745";
            status.textContent = "✔ Votre message a été envoyé ! Nous vous contacterons sous 24h.";
            form.reset();
        }, 1200);
    });

});
document.getElementById("btn-suivi").onclick = function() {
    window.location.href = "formuvoyage.html";   // vers ta page actuelle
};

document.getElementById("btn-paiement").onclick = function() {
    window.location.href = "paiement.html";
};

document.getElementById("btn-faq").onclick = function() {
    window.location.href = "faq.html";
};



