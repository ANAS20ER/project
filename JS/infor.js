// infor.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Récupérer les données de l'offre depuis le localStorage
    const storedOffer = localStorage.getItem('selectedOffer');
    
    // Si aucune offre n'est trouvée, rediriger ou afficher un message d'erreur
    if (!storedOffer) {
        document.getElementById('detail-title').textContent = "Erreur: Aucune offre sélectionnée.";
        document.getElementById('detail-description').textContent = "Veuillez retourner à la page des offres pour choisir un voyage.";
        // Optionnel : Rediriger après un court délai
        // setTimeout(() => window.location.href = 'offers.html', 3000); 
        return; 
    }

    const offer = JSON.parse(storedOffer);

    // 2. Références aux éléments HTML
    const titleEl = document.getElementById('detail-title');
    const priceEl = document.getElementById('detail-price');
    const descriptionEl = document.getElementById('detail-description');
    const imageEl = document.getElementById('detail-image');
    
    // Nouveaux éléments pour les détails
    const highlightsList = document.getElementById('details-highlights');
    const inclusList = document.getElementById('details-inclus');
    const nonInclusList = document.getElementById('details-non-inclus');
    const bookBtn = document.getElementById('book-btn');

    // 3. Affichage des informations de base
    titleEl.textContent = offer.titre;
    priceEl.textContent = offer.prix;
    descriptionEl.textContent = offer.description;
    imageEl.src = offer.image;
    imageEl.alt = offer.titre;

    // 4. Fonction pour injecter une liste de détails
    const populateList = (ulElement, dataArray, tag = 'li') => {
        ulElement.innerHTML = ''; // Nettoyer la liste existante
        if (dataArray && dataArray.length > 0) {
            dataArray.forEach(item => {
                const li = document.createElement(tag);
                li.textContent = item;
                ulElement.appendChild(li);
            });
        } else {
             // Si la liste est vide, on peut masquer la section
             ulElement.closest('.details-section').style.display = 'none';
        }
    };
    
    // 5. Affichage des listes de détails enrichis
    populateList(highlightsList, offer.details_highlights, 'li'); // Utilise 'li' pour l'affichage des tags
    populateList(inclusList, offer.details_inclus);
    populateList(nonInclusList, offer.details_non_inclus);

    // 6. Gestionnaire pour le bouton de réservation (CTA)
    bookBtn.addEventListener('click', () => {
        // Envoi de l'offre vers la page de demande de devis/réservation
        localStorage.setItem('bookingOfferTitle', offer.titre);
        window.location.href = 'request.html'; // Assurez-vous que cette page existe
    });
    
    // 7. Gestionnaire pour le bouton de retour (si vous voulez qu'il retourne à la dernière page visitée)
    // C'est mieux d'utiliser le <a> href="offers.html" dans ce cas.
});