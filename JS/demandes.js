// demande.js

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // --- Fonctions utilitaires ---

    // Fonction pour récupérer les réservations depuis localStorage
    function getReservations() {
        return JSON.parse(localStorage.getItem("reservations")) || [];
    }

    // Fonction pour afficher les réservations dans le tableau
    function displayReservations() {
        const tableBody = document.querySelector("#reservationsTable tbody");
        if (!tableBody) return; // Arrêter si le tableau n'existe pas sur la page

        tableBody.innerHTML = ""; // Vider le tableau avant de le remplir

        const reservations = getReservations();
        if (reservations.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='8'>Aucune réservation trouvée.</td></tr>";
            return;
        }

        reservations.forEach((res, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${res.nom}</td>
                <td>${res.prenom}</td>
                <td>${res.email}</td>
                <td>${res.telephone}</td>
                <td>${res.totalVoyageurs}</td>
                <td>${res.destination}</td>
                <td>${res.depart}</td>
                <td><button class="deleteBtn" data-index="${index}">❌ Supprimer</button></td>
            `;
            tableBody.appendChild(row);
        });

        // Ajouter les événements de suppression après avoir créé les boutons
        addDeleteEvents();
    }

    // Fonction pour gérer le clic sur les boutons de suppression
    function addDeleteEvents() {
        const deleteButtons = document.querySelectorAll(".deleteBtn");

        deleteButtons.forEach(btn => {
            btn.addEventListener("click", function() {
                const index = this.getAttribute("data-index");

                if (confirm("Voulez-vous vraiment supprimer cette réservation ?")) {
                    let reservations = getReservations();
                    reservations.splice(index, 1); // Supprimer la réservation du tableau

                    // Mettre à jour localStorage
                    localStorage.setItem("reservations", JSON.stringify(reservations));

                    // Rafraîchir l'affichage du tableau
                    displayReservations();
                }
            });
        });
    }

    // --- Initialisation ---
    // Afficher les réservations au chargement de la page
    displayReservations();
});