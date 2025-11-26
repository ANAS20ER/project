// infor.js

document.addEventListener('DOMContentLoaded', () => {
    const detailImage = document.getElementById('detail-image');
    const detailTitle = document.getElementById('detail-title');
    const detailPrice = document.getElementById('detail-price');
    const detailDescription = document.getElementById('detail-description');
    const retourBtn = document.getElementById('retour-btn');

    const offerData = localStorage.getItem('selectedOffer');

    if (offerData) {
        const offer = JSON.parse(offerData);
        detailImage.src = offer.image;
        detailImage.alt = `Image de ${offer.titre}`;
        detailTitle.textContent = offer.titre;
        detailPrice.textContent = offer.prix;
        detailDescription.textContent = offer.description;
        localStorage.removeItem('selectedOffer');
    } else {
        document.querySelector('.detail-container').innerHTML = `
            <h1>Aucune offre sélectionnée</h1>
            <p>Il semble que vous ayez accédé à cette page directement. Veuillez choisir une offre depuis la liste.</p>
            <a href="offers.html" class="retour-btn">Retour aux offres</a>
        `;
    }

    if (retourBtn) {
        retourBtn.addEventListener('click', () => {
            window.location.href = 'offers.html';
        });
    }
});