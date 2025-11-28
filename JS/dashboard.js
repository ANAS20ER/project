document.addEventListener('DOMContentLoaded', () => {
    // === VÉRIFICATION DE SÉCURITÉ ===
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    function displayContactMessages() {
        const container = document.getElementById('contact-messages');
        const demandes = JSON.parse(localStorage.getItem('demandes')) || [];

        if (demandes.length === 0) {
            container.innerHTML = '<p class="empty-message">Aucun message de contact pour le moment.</p>';
            return;
        }

        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Sujet</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
        `;

        demandes.reverse().forEach(demande => {
            tableHTML += `
                <tr>
                    <td>${demande.date}</td>
                    <td>${demande.nom}</td>
                    <td>${demande.email}</td>
                    <td>${demande.subject}</td>
                    <td>${demande.message.substring(0, 50)}...</td>
                </tr>
            `;
        });

        tableHTML += `</tbody></table>`;
        container.innerHTML = tableHTML;
    }
    
    // === FONCTION CORRIGÉE ET COMPLÈTE POUR LES DEMANDES DE VOYAGE ===
    function displayTripRequests() {
        const container = document.getElementById('trip-requests');
        const reservations = JSON.parse(localStorage.getItem('reservations')) || [];

        if (reservations.length === 0) {
            container.innerHTML = '<p class="empty-message">Aucune demande de voyage pour le moment.</p>';
            return;
        }

        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Date de la demande</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Destination</th>
                        <th>Date de voyage</th>
                        <th>Personnes</th>
                    </tr>
                </thead>
                <tbody>
        `;

        reservations.reverse().forEach(reservation => {
            tableHTML += `
                <tr>
                    <td>${reservation.date || 'N/A'}</td>
                    <td>${reservation.nom || 'N/A'}</td>
                    <td>${reservation.email || 'N/A'}</td>
                    <td>${reservation.telephone || 'N/A'}</td>
                    <td>${reservation.destination || 'N/A'}</td>
                    <td>${reservation.dateVoyage || 'N/A'}</td>
                    <td>${reservation.nombrePersonnes || 'N/A'}</td>
                </tr>
            `;
        });

        tableHTML += `</tbody></table>`;
        container.innerHTML = tableHTML;
    }
    window.logout = function() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    };

    // Charger les données au chargement de la page
    displayContactMessages();
    displayTripRequests();
});