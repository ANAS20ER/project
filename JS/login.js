// login.js

// Attendre que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionner les éléments du DOM une seule fois pour de meilleures performances
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Vérifier si le formulaire existe bien sur la page avant d'ajouter des écouteurs
    if (loginForm) {

        // Ajouter un écouteur d'événement pour la soumission du formulaire
        loginForm.addEventListener('submit', (e) => {
            // Empêcher le comportement par défaut du formulaire (rechargement de la page)
            e.preventDefault();

            // Récupérer les valeurs des champs et supprimer les espaces vides au début et à la fin
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // Définir les identifiants corrects
            const correctUsername = 'anas';
            const correctPassword = '123456';

            // ===================== VALIDATION ÉTAPE PAR ÉTAPE =====================

            // Étape 1 : Vérifier si l'un des champs est vide
            if (username === '' || password === '') {
                showError("Veuillez remplir tous les champs.");
                return; // Arrêter le script ici
            }

            // Étape 2 : Vérifier si le nom d'utilisateur est incorrect
            if (username !== correctUsername) {
                showError("Nom d'utilisateur ou mot de passe incorrect."); // Message plus sécurisé
                return; // Arrêter le script ici
            }

            // Étape 3 : Vérifier si le mot de passe est incorrect (le nom d'utilisateur est déjà correct)
            if (password !== correctPassword) {
                showError("Nom d'utilisateur ou mot de passe incorrect."); // Message plus sécurisé
                return; // Arrêter le script ici
            }

            // Étape 4 : Si toutes les validations sont passées, rediriger l'utilisateur
            // Assurez-vous que le nom du fichier est correct
            window.location.href = 'dashboard.html'; 
            // =======================================================================
        });

        // --- Fonction utilitaire pour afficher les erreurs ---
        function showError(message) {
            loginError.textContent = message;
            loginError.style.display = 'block';
        }

        // --- Fonctionnalité : Cacher le message d'erreur lorsque l'utilisateur commence à taper ---
        [usernameInput, passwordInput].forEach(input => {
            input.addEventListener('input', () => {
                loginError.style.display = 'none';
            });
        });
    }
});