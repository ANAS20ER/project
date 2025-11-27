document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html';
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
                    <td>${demande.message.substring(0, 50)}...</td> <!-- Affiche un aperçu -->
                </tr>
            `;
        });

        tableHTML += `</tbody></table>`;
        container.innerHTML = tableHTML;
    }
    function displayTripRequests() {
        const container = document.getElementById('trip-requests');
        const requests = JSON.parse(localStorage.getItem('tripRequests')) || [];

        if (requests.length === 0) {
            container.innerHTML = '<p class="empty-message">Aucune demande de voyage pour le moment.</p>';
            return;
        }
        container.innerHTML = '<p class="empty-message">Affichage des demandes de voyage à implémenter.</p>';
    }
    window.logout = function() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    };
    displayContactMessages();
    displayTripRequests();
});