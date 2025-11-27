// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            const correctUsername = 'anas';
            const correctPassword = '123456';

            if (username === '' || password === '') {
                showError("Veuillez remplir tous les champs.");
                return;
            }

            if (username !== correctUsername || password !== correctPassword) {
                showError("Nom d'utilisateur ou mot de passe incorrect.");
                return;
            }
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'dashboard.html'; 
        });
        function showError(message) {
            loginError.textContent = message;
            loginError.style.display = 'block';
        }
        [usernameInput, passwordInput].forEach(input => {
            input.addEventListener('input', () => {
                loginError.style.display = 'none';
            });
        });
    }
});