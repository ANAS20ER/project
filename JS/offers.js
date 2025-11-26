// offers.js

document.addEventListener('DOMContentLoaded', () => {

    // Base de données des offres (vous devez ajouter toutes les 30 offres ici)
    const offresData = [
        {
            id: 1,
            titre: "Week-end Magique à Marrakech",
            description: "3 Jours / 2 Nuits dans un Riad de charme au cœur de la Médina. Profitez des souks, des jardins Majorelle et de l'ambiance unique de la place Jemaa el-Fna. Une expérience inoubliable au cœur du Maroc.",
            prix: "à partir de 1 800 DH",
            image: "../IMG/im1.jpeg"
        },
        {
            id: 2,
            titre: "Aventure Kitesurf à Dakhla",
            description: "7 Jours / 6 Nuits. Vol inclus + Hébergement en bungalow face à la lagune. Stage de kitesurf en option pour tous les niveaux. Venez découvrir le spot de kitesurf le plus célèbre du Maroc.",
            prix: "à partir de 7 500 DH",
            image: "../IMG/im2.jpeg"
        },
        {
            id: 3,
            titre: "Escapade Bleue à Chefchaouen",
            description: "3 Jours / 2 Nuits. Explorez la perle bleue du Rif. Transport et hôtel inclus. Promenez-vous dans les rues pittoresques et admirez les paysages montagneux époustouflants.",
            prix: "à partir de 1 600 DH",
            image: "../IMG/imageTEST.jpeg"
        },
        {
            id: 4,
            titre: "Nuit dans le Désert (Merzouga)",
            description: "2 Jours / 1 Nuit. Inclus : Transfert 4x4, balade à dos de chameau, nuit en bivouac de luxe et dîner sous les étoiles. Une expérience magique au cœur des dunes de merzouga.",
            prix: "à partir de 1 200 DH",
            image: "../IMG/im4.jpeg"
        },
        {
            id: 5,
            titre: "Circuit Villes Impériales",
            description: "5 Jours / 4 Nuits. Découvrez Fès, Meknès et Volubilis. Hôtels et guide privé inclus. Plongez dans l'histoire et la culture marocaine à travers ces villes emblématiques.",
            prix: "à partir de 4 200 DH",
            image: "../IMG/im3.jpeg"
        },
        {
            id: 6,
            titre: "Détente & Surf à Taghazout",
            description: "4 Jours / 3 Nuits en appart-hôtel vue mer. Idéal pour les amateurs de surf et de yoga. Détendez-vous dans ce village de pêcheurs devenu un spot de surf international.",
            prix: "à partir de 2 900 DH",
            image: "../IMG/im6.jpeg"
        },
        // ... Continuez à ajouter les 24 autres offres ici en suivant le même modèle
    ];

    // Utiliser la délégation d'événements sur le corps du document
    document.body.addEventListener('click', (e) => {
        // Vérifier si l'élément cliqué est un bouton "détails"
        if (e.target.classList.contains('details-btn')) {
            // Trouver la carte parente pour obtenir l'ID de l'offre
            const card = e.target.closest('.card');
            const offreId = parseInt(card.getAttribute('data-offre-id'));

            // Trouver l'offre correspondante dans notre base de données
            const selectedOffer = offresData.find(offer => offer.id === offreId);

            if (selectedOffer) {
                // Stocker l'offre sélectionnée dans localStorage
                localStorage.setItem('selectedOffer', JSON.stringify(selectedOffer));
                // Rediriger vers la page de détails
                window.location.href = 'infor.html';
            } else {
                console.error('Offre non trouvée pour l\'ID :', offreId);
            }
        }
    });
});