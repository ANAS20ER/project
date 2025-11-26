// Fonction pour récupérer les réservations depuis localStorage
function getReservations() {
    return JSON.parse(localStorage.getItem("reservations")) || [];
}




// mode sembre
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change le texte du bouton
    if(document.body.classList.contains("dark-mode")) {
        modeToggle.textContent = "☀️ Mode clair";
    } else {
        modeToggle.textContent = "🌙 Mode sombre";
    }
});

// fin mode sembre




// Fonction pour afficher les réservations dans le tableau
function displayReservations() {
    const tableBody = document.querySelector("#reservationsTable tbody");
    tableBody.innerHTML = "";

    const reservations = getReservations();
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
            <td>${res.retour}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Supprimer toutes les réservations
document.getElementById("clearReservations").addEventListener("click", () => {
    if(confirm("Voulez-vous vraiment supprimer toutes les réservations ?")) {
        localStorage.removeItem("reservations");
        displayReservations();
    }
});

// Afficher les réservations au chargement de la page
displayReservations();
