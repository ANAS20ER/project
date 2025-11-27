// formuvoyage.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("reservationForm");
    const successMessage = document.getElementById("successMessage");

    const adultes = document.getElementById("adultes");
    const childrenQuestion = document.getElementById("childrenQuestion");
    const childrenNumberGroup = document.getElementById("childrenNumberGroup");
    const nombreEnfants = document.getElementById("nombreEnfants");
    const totalVoyageurs = document.getElementById("totalVoyageurs");

    childrenQuestion.addEventListener("change", () => {
        if (childrenQuestion.value === "oui") {
            childrenNumberGroup.style.display = "block";
        } else {
            childrenNumberGroup.style.display = "none";
            nombreEnfants.value = 0;
        }
        calculerTotal();
    });

    adultes.addEventListener("input", calculerTotal);
    nombreEnfants.addEventListener("input", calculerTotal);

    function calculerTotal() {
        const ad = parseInt(adultes.value) || 0;
        const enf = (childrenQuestion.value === "oui") ? parseInt(nombreEnfants.value || 0) : 0;
        totalVoyageurs.value = ad + enf;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector(".error-msg");
        errorDisplay.textContent = message;
        input.style.borderColor = "red";
    }

    function clearErrors(input) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector(".error-msg");
        if (errorDisplay) { errorDisplay.textContent = ""; }
        input.style.borderColor = "#ccc";
    }

    document.querySelectorAll("input, select").forEach(el => {
        el.addEventListener("input", () => clearErrors(el));
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidFile(fileInput) {
        if (!fileInput.files.length) return false;
        const file = fileInput.files[0];
        const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg"];
        return allowedTypes.includes(file.type);
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            const age = document.getElementById("age");
            if (age.value < 18) { showError(age, "Vous devez avoir au moins 18 ans."); isValid = false; }

            const email = document.getElementById("email");
            if (!isValidEmail(email.value)) { showError(email, "Email invalide."); isValid = false; }
            
            const file = document.getElementById("file");
            const passport = document.getElementById("passport");
            if (!isValidFile(file)) { showError(file, "Le fichier doit être PDF ou JPG."); isValid = false; }
            if (!isValidFile(passport)) { showError(passport, "Le fichier doit être PDF ou JPG."); isValid = false; }

            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirmPassword");
            if (password.value.length > 0 || confirmPassword.value.length > 0) {
                if (password.value.length < 6) { showError(password, "Le mot de passe doit contenir au moins 6 caractères."); isValid = false; }
                if (password.value !== confirmPassword.value) { showError(confirmPassword, "Les mots de passe ne correspondent pas."); isValid = false; }
            }

            // ===================== VÉRIFICATION DES DATES (SIMPLIFIÉE) =====================
            const inputDepart = document.getElementById("depart");
            const dateDepart = new Date(inputDepart.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            // Vérification 1 : Date de départ dans le passé
            if (inputDepart.value && dateDepart < today) {
                showError(inputDepart, "La date de départ ne peut pas être dans le passé.");
                isValid = false;
            }

            // La vérification de la date de retour a été supprimée
            // ============================================================================

            if (isValid) {
                const reservation = {
                    nom: document.getElementById("nom").value,
                    prenom: document.getElementById("prenom").value,
                    email: document.getElementById("email").value,
                    telephone: document.getElementById("telephone").value,
                    totalVoyageurs: totalVoyageurs.value,
                    destination: document.getElementById("destination").value,
                    depart: document.getElementById("depart").value
                    // La ligne "retour" a été supprimée
                };

                const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
                reservations.push(reservation);
                localStorage.setItem("reservations", JSON.stringify(reservations));

                successMessage.textContent = "Votre demande de réservation a été envoyée avec succès !";
                form.reset();
                childrenNumberGroup.style.display = "none";
                totalVoyageurs.value = "";
            }
        });
    }
});