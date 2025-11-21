document.addEventListener('DOMContentLoaded', function() {

    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    // --- (Scroll to Top Button) ---
    const scrollTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {

            const name = document.getElementById('name');
            const email = document.getElementById('email');

            if (name.value === '' || email.value === '') {
                alert("Erreur : Veuillez remplir tous les champs.");     
            } else if (email.value.includes('@') === false) {
                alert("Erreur : L'adresse email n'est pas valide.");
                event.preventDefault();
            
            } else {
                alert("Message envoyé ! (simulation)");
            }
        });
    }
const allLinks = document.querySelectorAll('a');

allLinks.forEach(function(link) {

    const url = link.href;

    if (url.includes(window.location.hostname) && !url.includes('#')) {
        
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('page-fade-out');
            setTimeout(function() {
                window.location.href = url;
            }, 500); // 500ms = 0.5s (doit correspondre au CSS !)
        });
    }
});
// --- Message pour "Voir les détails" ---
const detailButtons = document.querySelectorAll('.cta-button');

detailButtons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Vous avez été victime d'une escroquerie :)");
    });
});
// ==========================================
// === SPRINT 6 : BONUS FONCTIONNALITÉS ===
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. MODE SOMBRE (Dark Mode) ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Vérifier si un thème est déjà sauvegardé (Bonus cookie/storage)
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeBtn.textContent = '☀️'; // Changer l'icône
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            // Basculer la classe 'dark-mode'
            body.classList.toggle('dark-mode');

            // Changer l'icône et sauvegarder la préférence
            if (body.classList.contains('dark-mode')) {
                themeBtn.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeBtn.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 2. COMPTEUR DE CARACTÈRES ---
    const messageInput = document.getElementById('message');
    const charCountDisplay = document.getElementById('char-count');

    if (messageInput && charCountDisplay) {
        messageInput.addEventListener('input', function() {
            const currentLength = messageInput.value.length;
            charCountDisplay.textContent = currentLength;

            // Changer la couleur si on approche de la limite (visuel bonus)
            if (currentLength > 450) {
                charCountDisplay.style.color = 'red';
                charCountDisplay.style.fontWeight = 'bold';
            } else {
                charCountDisplay.style.color = 'inherit'; // Couleur par défaut
                charCountDisplay.style.fontWeight = 'normal';
            }
        });
    }
});
}); 