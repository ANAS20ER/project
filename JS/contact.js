// contact.js - Version finale et structurée correctement

document.addEventListener("DOMContentLoaded", () => {
    // --- SÉLECTION DES ÉLÉMENTS DU DOM ---
    // Toutes les sélections doivent être faites ICI, à l'intérieur du bloc
    const form = document.getElementById("pro-form");
    const status = document.getElementById("pro-status");
    const btnSuivi = document.getElementById("btn-suivi");
    const btnPaiement = document.getElementById("btn-paiement");
    const btnFaq = document.getElementById("btn-faq");

    // --- GESTIONNAIRE POUR LE FORMULAIRE DE CONTACT ---
    if (form) {
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
            }, 1200);
        });
    }

    // --- GESTIONNAIRES POUR LES BOUTONS D'ASSISTANCE RAPIDE ---
    // On vérifie que les boutons existent avant d'ajouter un écouteur
    if (btnSuivi) {
        btnSuivi.addEventListener("click", () => {
            window.location.href = "../HTML/request.html";
        });
    }
    
    if (btnPaiement) {
        btnPaiement.addEventListener("click", () => {
            window.location.href = "../HTML/paiement.html";
        });
    }
    
    if (btnFaq) {
        btnFaq.addEventListener("click", () => {
            window.location.href = "../HTML/faq.html";
        });
    }

    // --- FONCTION UTILITAIRE POUR AFFICHER LES MESSAGES ---
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