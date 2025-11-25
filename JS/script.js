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
if (window.location.pathname.includes("offers.html")) {

    const detailButtons = document.querySelectorAll('.cta-button');

    detailButtons.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Vous avez été victime d'une escroquerie :)");
        });
    });}
// ======================================================================================
// je voulais ajouter quelques chose . mais je ne veux pas compilque les choses inulement :)
// ======================================================================================

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
// ======================================================================================
/* ============================================================
   === 3. Formulaire de réservation (ONLY request.html) =======
   ============================================================ */

if (window.location.pathname.includes("request.html")) {

    const form = document.getElementById("travelForm");
    const modal = document.getElementById("confirmationModal");
    const confirmText = document.getElementById("confirmationText");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = form.nom.value.trim();
        const prenom = form.prenom.value.trim();
        const depart = form.depart.value.trim();
        const age = parseInt(form.age.value);
        const email = form.email.value.trim();
        const tel = form.telephone.value.trim();
        const dest = form.destination.value;
        const voyageurs = form.voyageurs.value;
        const enfants = form.children.value;
        const passport = form.passport.value;

        // التحقق من العمر
        if (age < 18) {
            alert("❌ Désolé, vous devez avoir au moins 18 ans pour réserver un voyage.");
            return;
        }

        // التحقق من الحقول
        if (!nom || !prenom || !depart || !email || !tel || !dest || !voyageurs || !enfants || !passport) {
            alert("⚠️ Merci de remplir tous les champs.");
            return;
        }

        // إنشاء نص التأكيد
        confirmText.innerHTML = `
            <strong>Merci ${prenom} ${nom} !</strong><br><br>
            Votre demande de voyage a été envoyée avec succès.<br><br>

            <strong>📌 Détails de votre réservation :</strong><br>
            • <b>Départ :</b> ${depart}<br>
            • <b>Destination :</b> ${dest}<br>
            • <b>Voyageurs :</b> ${voyageurs}<br>
            • <b>Enfants :</b> ${enfants}<br><br>

            <strong>📞 Nous vous contacterons bientôt :</strong><br>
            • <b>Email :</b> ${email}<br>
            • <b>Téléphone :</b> ${tel}<br><br>

            Votre dossier est en cours de traitement. Merci d'avoir choisi <b>TESA Voyage</b>.
        `;

        // إظهار المودال
        modal.style.display = "flex";

        // إعادة تعيين الفورم
        form.reset();
    });

    // إغلاق المودال
    window.closeModal = function () {
        modal.style.display = "none";
    };
}
}); 