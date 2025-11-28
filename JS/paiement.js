// paiement.js

document.addEventListener('DOMContentLoaded', () => {
    const paymentMethodSelect = document.getElementById('payment-method');
    const cardDetails = document.getElementById('card-details');
    const transferDetails = document.getElementById('transfer-details');
    const agencyDetails = document.getElementById('agency-details');
    const proceedButtons = document.querySelectorAll('.proceed-btn');

    // Fonction pour cacher tous les détails
    function hideAllDetails() {
        cardDetails.classList.add('hidden');
        transferDetails.classList.add('hidden');
        agencyDetails.classList.add('hidden');
    }

    // Écouteur d'événement sur le menu déroulant
    paymentMethodSelect.addEventListener('change', (event) => {
        const selectedMethod = event.target.value;
        
        // 1. Cacher tous les détails d'abord
        hideAllDetails();

        // 2. Afficher les détails correspondants au choix
        if (selectedMethod === 'card') {
            cardDetails.classList.remove('hidden');
        } else if (selectedMethod === 'transfer') {
            transferDetails.classList.remove('hidden');
        } else if (selectedMethod === 'agency') {
            agencyDetails.classList.remove('hidden');
        }
    });

    // Écouteur d'événement sur tous les boutons "Procéder"
    proceedButtons.forEach(button => {
        button.addEventListener('click', () => {
            const method = button.getAttribute('data-method');
            
            if (method === 'card') {
                alert('Redirection vers la passerelle de paiement sécurisée... (Simulation)');
                // window.location.href = 'https://secure-payment-gateway.com';
            } else if (method === 'transfer') {
                alert('Veuillez effectuer le virement avec les coordonnées fournies. Votre réservation sera validée sous 24h.');
            } else if (method === 'agency') {
                alert('Redirection vers Google Maps pour localiser notre agence... (Simulation)');
                // window.location.href = 'https://maps.google.com/?q=TESA+Voyage+Casablanca';
            }
        });
    });
});