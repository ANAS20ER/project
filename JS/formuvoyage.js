// Sélection des éléments
const form = document.getElementById("reservationForm");
const successMessage = document.getElementById("successMessage");
/*
//burger
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
*/


//aghjhjgh
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change le texte du bouton
    if(document.body.classList.contains("dark-mode")) {
        modeToggle.textContent = "☀️ Mode clair";
    } else {
        modeToggle.textContent = "🌙 Mode sombre";
    }
});

// Champs adultes / enfants
const adultes = document.getElementById("adultes");
const childrenQuestion = document.getElementById("childrenQuestion");
const childrenNumberGroup = document.getElementById("childrenNumberGroup");
const nombreEnfants = document.getElementById("nombreEnfants");
const totalVoyageurs = document.getElementById("totalVoyageurs");

// Afficher / cacher nombre d’enfants
childrenQuestion.addEventListener("change", () => {
    if (childrenQuestion.value === "oui") {
        childrenNumberGroup.style.display = "block";
    } else {
        childrenNumberGroup.style.display = "none";
        nombreEnfants.value = 0;
    }
    calculerTotal();
});

// Recalcul quand on modifie adultes ou enfants
adultes.addEventListener("input", calculerTotal);
nombreEnfants.addEventListener("input", calculerTotal);

// Fonction pour calculer total voyageurs
function calculerTotal() {
    const ad = parseInt(adultes.value) || 0;
    const enf = (childrenQuestion.value === "oui") ? parseInt(nombreEnfants.value || 0) : 0;

    totalVoyageurs.value = ad + enf;
}

// Fonction affichage d’erreur
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorDisplay = formGroup.querySelector(".error-msg");
    errorDisplay.textContent = message;
    input.style.borderColor = "red";
}

// Effacer l’erreur quand l’utilisateur corrige
document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("input", () => {
        const formGroup = el.parentElement;
        const errorDisplay = formGroup.querySelector(".error-msg");
        errorDisplay.textContent = "";
        el.style.borderColor = "#ccc";
    });
});

// Validation email
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validation du fichier
function isValidFile(fileInput) {
    if (!fileInput.files.length) return false;

    const file = fileInput.files[0];
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg"];

    return allowedTypes.includes(file.type);
}

// Soumission du formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Vérif âge
    const age = document.getElementById("age");
    if (age.value < 18) {
        showError(age, "Vous devez avoir au moins 18 ans.");
        isValid = false;
    }

    // Vérif email
    const email = document.getElementById("email");
    if (!isValidEmail(email.value)) {
        showError(email, "Email invalide.");
        isValid = false;
    }

    // Vérif fichiers
    const file = document.getElementById("file");
    const passport = document.getElementById("passport");

    if (!isValidFile(file)) {
        showError(file, "Le fichier doit être PDF ou JPG.");
        isValid = false;
    }

    if (!isValidFile(passport)) {
        showError(passport, "Le fichier doit être PDF ou JPG.");
        isValid = false;
    }

    // Vérif mot de passe si rempli
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (password.value.length > 0 || confirmPassword.value.length > 0) {
        if (password.value.length < 6) {
            showError(password, "Le mot de passe doit contenir au moins 6 caractères.");
            isValid = false;
        }
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "Les mots de passe ne correspondent pas.");
            isValid = false;
        }
    }

// ===================== VÉRIFICATION DES DATES (CORRIGÉE) =====================
const inputDepart = document.getElementById("depart");

// 1. Convertir les valeurs en objets Date
const dateDepart = new Date(inputDepart.value);
const today = new Date();
today.setHours(0, 0, 0, 0); // Réinitialiser l'heure pour comparer uniquement les jours

// Réinitialiser la variable de validation pour être sûr
let dateValidationPassed = true;

// 2. Vérification 1 : Date de départ dans le passé
if (inputDepart.value && dateDepart < today) {
    showError(inputDepart, "La date de départ ne peut pas être dans le passé.");
    isValid = false;
    dateValidationPassed = false;
}
    // Si tout est bon
    if (isValid) {
        const reservation = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephone").value,
        totalVoyageurs: totalVoyageurs.value,
        destination: document.getElementById("destination").value,
        depart: document.getElementById("depart").value,
        retour: document.getElementById("retour").value
    };

    // Récupérer les réservations existantes et ajouter la nouvelle
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
    reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));

    successMessage.textContent = "Votre demande de réservation a été envoyée avec succès !";
    form.reset();
    childrenNumberGroup.style.display = "none";
    totalVoyageurs.value = "";
        successMessage.textContent = "Votre demande de réservation a été envoyée avec succès !";
        form.reset();
        childrenNumberGroup.style.display = "none";
        totalVoyageurs.value = "";
    }
});
