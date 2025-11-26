// login.js

// Attendre que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionner le formulaire de connexion et l'élément d'erreur
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    // Vérifier si le formulaire existe bien sur la page
    if (loginForm) {
        // Ajouter un écouteur d'événement pour la soumission du formulaire
        loginForm.addEventListener('submit', (e) => {
            // Empêcher le comportement par défaut du formulaire (rechargement de la page)
            e.preventDefault();

            // Récupérer les valeurs des champs et supprimer les espaces vides
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            // Définir les identifiants corrects
            const correctUsername = 'anas';
            const correctPassword = '123456';

            // ===================== VALIDATION ÉTAPE PAR ÉTAPE =====================

            // Étape 1 : Vérifier si l'un des champs est vide
            if (username === '' || password === '') {
                loginError.textContent = "Veuillez remplir tous les champs.";
                loginError.style.display = 'block';
                return; // Arrêter le script ici
            }

            // Étape 2 : Vérifier si le nom d'utilisateur est incorrect
            if (username !== correctUsername) {
                loginError.textContent = "Nom d'utilisateur introuvable.";
                loginError.style.display = 'block';
                return; // Arrêter le script ici
            }

            // Étape 3 : Vérifier si le mot de passe est incorrect (le nom d'utilisateur est déjà correct)
            if (password !== correctPassword) {
                loginError.textContent = "Mot de passe incorrect.";
                loginError.style.display = 'block';
                return; // Arrêter le script ici
            }

            // Étape 4 : Si toutes les validations sont passées, rediriger l'utilisateur
            window.location.href = 'destinations.html';
            // =======================================================================
        });

        // Optionnel : Cacher le message d'erreur lorsque l'utilisateur commence à taper
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        [usernameInput, passwordInput].forEach(input => {
            input.addEventListener('input', () => {
                loginError.style.display = 'none'; // Cacher l'erreur
            });
        });
    }
});