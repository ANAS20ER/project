// contact.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pro-form");
    const status = document.getElementById("pro-status");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nom = document.getElementById("pro-name").value.trim();
        const email = document.getElementById("pro-email").value.trim();
        const phone = document.getElementById("pro-phone").value.trim();
        const subject = document.getElementById("pro-subject").value;
        const message = document.getElementById("pro-message").value.trim();

        if (!nom || !email || !subject || !message) {
            showStatus("Veuillez remplir tous les champs obligatoires.", "error");
            return;
        }

        showStatus("⏳ Envoi en cours...", "loading");

        setTimeout(() => {
            const demande = { nom, email, phone, subject, message, date: new Date().toLocaleString() };
            let demandes = JSON.parse(localStorage.getItem("demandes")) || [];
            demandes.push(demande);
            localStorage.setItem("demandes", JSON.stringify(demandes));

            showStatus("✔ Votre message a été envoyé ! Nous vous contacterons sous 24h.", "success");
            form.reset();
            // Redirection après un délai
            // ========================
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
            // ========================
        }, 1200);
    });

    // ... (le reste de votre code pour les boutons d'assistance rapide reste inchangé)
btnSuivi.addEventListener("click", () => {
    window.location.href = "formuvoyage.html";
});

btnPaiement.addEventListener("click", () => {
    window.location.href = "paiement.html";
});

btnFaq.addEventListener("click", () => {
    window.location.href = "faq.html";
});

function showStatus(message, type) {
    status.textContent = message;
    status.className = "status-message";
    
    if (type === "error") {
        status.style.color = "#d32f2f";
    } else if (type === "success") {
        status.style.color = "#388e3c";
    } else if (type === "loading") {
        status.style.color = "#1976d2";
    }
    
    status.style.display = "block";
}
});