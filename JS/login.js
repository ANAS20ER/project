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

            // Récupérer les valeurs des champs
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Définir les identifiants corrects
            const correctUsername = 'anas';
            const correctPassword = '123456';

            // Vérifier si les identifiants sont corrects
            if (username === correctUsername && password === correctPassword) {
                // Si correct, rediriger l'utilisateur vers la page des destinations
                window.location.href = 'demandes.html';
            } else {
                // Si incorrect, afficher le message d'erreur
                loginError.style.display = 'block'; // Rendre le message visible
            }
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