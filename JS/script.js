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
/* Mettez ce code à l'intérieur de 'DOMContentLoaded' */
/* ... après votre code de menu, scroll, et formulaire ... */

/* --- 5. Logique de Transition de Page --- */

// Sélectionner tous les liens de votre site
const allLinks = document.querySelectorAll('a');

allLinks.forEach(function(link) {
    
    // Obtenir l'URL du lien
    const url = link.href;

    // Vérifier si c'est un lien "interne" (pas un lien externe comme "google.com" ou une ancre "#")
    if (url.includes(window.location.hostname) && !url.includes('#')) {
        
        // Si c'est un lien interne, ajouter un écouteur d'événement
        link.addEventListener('click', function(event) {
            
            // 1. Empêcher le navigateur de changer de page immédiatement
            event.preventDefault();
            
            // 2. Ajouter notre classe d'animation de sortie au body
            document.body.classList.add('page-fade-out');

            // 3. Attendre 500ms (la durée de l'animation)
            setTimeout(function() {
                
                // 4. Changer manuellement de page
                window.location.href = url;

            }, 500); // 500ms = 0.5s (doit correspondre au CSS !)
        });
    }
});
}); 