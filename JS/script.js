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

}); 