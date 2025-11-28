document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
  // --- (Scroll to Top Button) ---
  const scrollTopBtn = document.getElementById("scrollToTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  const allLinks = document.querySelectorAll("a");

  allLinks.forEach(function (link) {
    const url = link.href;

    if (url.includes(window.location.hostname) && !url.includes("#")) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        document.body.classList.add("page-fade-out");
        setTimeout(function () {
          window.location.href = url;
        }, 500); // 500ms = 0.5s (doit correspondre au CSS !)
      });
    }
  });

  // Operations liees au theeme
  initializeDarkMode();

  // --- 2. COMPTEUR DE CARACTÈRES ---
  const messageInput = document.getElementById("message");
  const charCountDisplay = document.getElementById("char-count");

  if (messageInput && charCountDisplay) {
    messageInput.addEventListener("input", function () {
      const currentLength = messageInput.value.length;
      charCountDisplay.textContent = currentLength;

      // Changer la couleur si on approche de la limite (visuel bonus)
      if (currentLength > 450) {
        charCountDisplay.style.color = "red";
        charCountDisplay.style.fontWeight = "bold";
      } else {
        charCountDisplay.style.color = "inherit"; // Couleur par défaut
        charCountDisplay.style.fontWeight = "normal";
      }
    });
  }

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
        alert(
          "❌ Désolé, vous devez avoir au moins 18 ans pour réserver un voyage."
        );
        return;
      }

      // التحقق من الحقول
      if (
        !nom ||
        !prenom ||
        !depart ||
        !email ||
        !tel ||
        !dest ||
        !voyageurs ||
        !enfants ||
        !passport
      ) {
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

// Dark mode functions
function initializeDarkMode() {
  const savedMode = localStorage.getItem("darkMode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Use saved preference, or fall back to system preference
  const shouldBeDark =
    savedMode === "true" || (savedMode === null && prefersDark);

  if (shouldBeDark) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    toggleDarkMode();
});
/**
 * Toggle dark mode on/off
 */
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const isDarkMode = htmlElement.classList.contains("dark-mode");

  if (isDarkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

/**
 * Enable dark mode
 */
function enableDarkMode() {
  document.documentElement.classList.add("dark-mode");
  localStorage.setItem("darkMode", "true");
  updateThemeToggleButton(true);
}

/**
 * Disable dark mode (light mode)
 */
function disableDarkMode() {
  document.documentElement.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "false");
  updateThemeToggleButton(false);
}

/**
 * Update theme toggle button appearance and text
 */
function updateThemeToggleButton(isDarkMode) {
  const themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.innerHTML = isDarkMode ?  "🌙" : "☀️";
    themeBtn.setAttribute(
      "aria-label",
      isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

/**
 * Listen for system theme preference changes
 */
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (localStorage.getItem("darkMode") === null) {
      if (e.matches) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    }
    // script.js - Version simplifiée pour l'animation CSS

document.addEventListener('DOMContentLoaded', () => {
    // --- GESTION DU MENU MOBILE ---
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
    // --- PLUS BESOIN DE CODE POUR L'ANIMATION DU PERSONNAGE ---
});
  });
