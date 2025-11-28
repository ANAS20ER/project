<<<<<<< HEAD
// faq.js - Version corrigée et améliorée

document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les éléments de la FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    // Ajouter un écouteur d'événement au clic sur chaque question
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // --- Logique d'Accordéon (une seule réponse ouverte à la fois) ---
            
            // 1. Fermer toutes les autres réponses ouvertes
            faqItems.forEach(otherItem => {
                if (otherItem !== item) { // Ne fermer que les autres, pas celle cliquée
                    otherItem.classList.remove('active');
                }
            });

            // 2. Basculer (ouvrir/fermer) la réponse cliquée
            item.classList.toggle('active');
        });
    });
});
=======
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        const p = item.querySelector("p");
        p.style.display = p.style.display === "block" ? "none" : "block";
    });
});
>>>>>>> b9d6ca908afb807cd7de3f694d4082339ad5bdd6
