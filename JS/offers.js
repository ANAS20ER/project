// offers.js

document.addEventListener('DOMContentLoaded', () => {

    // Base de données des offres enrichie pour simuler une vraie page de détails (infor.html)
    const offresData = [
        // --- Offres Nationales (Maroc) ---
        {
            id: 1,
            categorie: "national",
            titre: "Week-end Magique à Marrakech",
            description: "3 Jours / 2 Nuits dans un Riad de charme au cœur de la Médina. Profitez des souks, des jardins Majorelle et de l'ambiance unique de la place Jemaa el-Fna. Une expérience inoubliable au cœur du Maroc.",
            description_courte: "3 Jours / 2 Nuits dans un Riad de charme au cœur de la Médina. Petit-déjeuner inclus.",
            prix: "à partir de 1 800 DH",
            image: "../IMG/im1.jpeg",
            details_highlights: ["Hébergement Riad de charme (2 nuits)", "Petit-déjeuner traditionnel", "Visite des jardins Majorelle"],
            details_inclus: ["Hébergement en chambre double supérieure", "Petit-déjeuner quotidien au Riad", "Transfert A/R aéroport-Riad", "Taxe de séjour"],
            details_non_inclus: ["Vols internationaux", "Déjeuners et dîners", "Entrée aux monuments (Musée Yves Saint Laurent, etc.)", "Assurance voyage"]
        },
        {
            id: 2,
            categorie: "national",
            titre: "Aventure Kitesurf à Dakhla",
            description: "7 Jours / 6 Nuits. Vol inclus + Hébergement en bungalow face à la lagune. Stage de kitesurf en option pour tous les niveaux. Venez découvrir le spot de kitesurf le plus célèbre du Maroc.",
            description_courte: "7 Jours / 6 Nuits. Vol inclus + Hébergement en bungalow face à la lagune. Stage de kitesurf en option.",
            prix: "à partir de 7 500 DH",
            image: "../IMG/im2.jpeg",
            details_highlights: ["Vol A/R inclus (depuis Casablanca)", "Bungalow face à la lagune", "6 jours sur le spot de Kitesurf"],
            details_inclus: ["Vol A/R Casablanca - Dakhla", "Hébergement en pension complète (repas inclus)", "Transferts aéroport-hôtel"],
            details_non_inclus: ["Location d'équipement de Kitesurf", "Cours ou stage de Kitesurf", "Boissons non comprises dans la pension complète"]
        },
        {
            id: 3,
            categorie: "national",
            titre: "Escapade Bleue à Chefchaouen",
            description: "3 Jours / 2 Nuits. Explorez la perle bleue du Rif. Transport et hôtel inclus. Promenez-vous dans les rues pittoresques et admirez les paysages montagneux époustouflants.",
            description_courte: "3 Jours / 2 Nuits. Explorez la perle bleue du Rif. Transport et hôtel inclus.",
            prix: "à partir de 1 600 DH",
            image: "../IMG/imageTEST.jpeg",
            details_highlights: ["Transport A/R en autocar (depuis Rabat/Casablanca)", "Hôtel central (2 nuits)", "Visite guidée de la Médina"],
            details_inclus: ["Transport terrestre A/R", "Hébergement en hôtel 3*", "Petit-déjeuner quotidien"],
            details_non_inclus: ["Déjeuners et dîners", "Guide pour la randonnée", "Assurance annulation"]
        },
        {
            id: 4,
            categorie: "national",
            titre: "Nuit dans le Désert (Merzouga)",
            description: "2 Jours / 1 Nuit. Inclus : Transfert 4x4, balade à dos de chameau, nuit en bivouac de luxe et dîner sous les étoiles. Une expérience magique au cœur des dunes de merzouga.",
            description_courte: "2 Jours / 1 Nuit. Inclus : Transfert 4x4, balade à dos de chameau, nuit en bivouac de luxe et dîner.",
            prix: "à partir de 1 200 DH",
            image: "../IMG/im4.jpeg",
            details_highlights: ["Nuit en Bivouac de luxe (tente privée)", "Dîner et petit-déjeuner", "Balade à dos de chameau au coucher du soleil"],
            details_inclus: ["Transfert A/R en 4x4 depuis l'hôtel de Merzouga/Erfoud", "Dîner traditionnel Berbère", "Petit-déjeuner", "Eau en bouteille"],
            details_non_inclus: ["Hébergement avant/après le bivouac", "Boissons alcoolisées", "Pourboires"]
        },
        {
            id: 5,
            categorie: "national",
            titre: "Circuit Villes Impériales",
            description: "5 Jours / 4 Nuits. Découvrez Fès, Meknès et Volubilis. Hôtels et guide privé inclus. Plongez dans l'histoire et la culture marocaine à travers ces villes emblématiques.",
            description_courte: "5 Jours / 4 Nuits. Découvrez Fès, Meknès et Volubilis. Hôtels et guide privé inclus.",
            prix: "à partir de 4 200 DH",
            image: "../IMG/im3.jpeg",
            details_highlights: ["Guide privé pour les visites historiques", "Hébergement 4 nuits (Fès, Meknès)", "Transport privé entre les villes"],
            details_inclus: ["Hébergement en hôtels 4* (base petit-déjeuner)", "Transport privé climatisé avec chauffeur", "Guide local agréé pour Fès et Meknès"],
            details_non_inclus: ["Entrées aux sites (Volubilis, Medersa Bou Inania)", "Déjeuners et dîners", "Dépenses personnelles"]
        },
        {
            id: 6,
            categorie: "national",
            titre: "Détente & Surf à Taghazout",
            description: "4 Jours / 3 Nuits en appart-hôtel vue mer. Idéal pour les amateurs de surf et de yoga. Détendez-vous dans ce village de pêcheurs devenu un spot de surf international.",
            description_courte: "4 Jours / 3 Nuits en appart-hôtel vue mer. Idéal pour les amateurs de surf et de yoga.",
            prix: "à partir de 2 900 DH",
            image: "../IMG/im6.jpeg",
            details_highlights: ["Appart-hôtel avec vue sur l'océan", "Accès illimité à la plage", "Piscine sur le toit"],
            details_inclus: ["Hébergement 3 nuits en studio équipé", "Petit-déjeuner sain et énergétique", "Cours de yoga matinaux (facultatif)"],
            details_non_inclus: ["Vol A/R Agadir", "Location de planche de surf", "Repas autres que le petit-déjeuner"]
        },
        // --- Offres Europe ---
        {
            id: 7,
            categorie: "europe",
            titre: "City Break à Paris",
            description: "4 Jours / 3 Nuits. Vol A/R + Hôtel 3* près du centre. Découvrez la ville lumière, visitez la Tour Eiffel, le Louvre et promenez-vous sur les Champs-Élysées.",
            description_courte: "4 Jours / 3 Nuits. Vol A/R + Hôtel 3* près du centre. Découvrez la ville lumière.",
            prix: "à partir de 5 500 DH",
            image: "../IMG/im11.jpeg",
            details_highlights: ["Vol A/R inclus (depuis Casablanca)", "Hôtel 3* bien situé (3 nuits)", "Petit-déjeuner continental"],
            details_inclus: ["Vol aller-retour en classe économique", "Hébergement en hôtel 3* (base petit-déjeuner)", "Trousse de voyage et guide de la ville"],
            details_non_inclus: ["Transferts aéroport-hôtel", "Tickets de métro/bus", "Assurance annulation/médicale"]
        },
        {
            id: 8,
            categorie: "europe",
            titre: "Magie d'Istanbul, Turquie",
            description: "6 Jours / 5 Nuits. Vol A/R + Hôtel 4* à Taksim. Croisière Bosphore offerte. Explorez la mosquée Bleue, Sainte-Sophie et le Grand Bazar, le tout entre Orient et Occident.",
            description_courte: "6 Jours / 5 Nuits. Vol A/R + Hôtel 4* à Taksim. Croisière Bosphore offerte.",
            prix: "à partir: de 7 800 DH",
            image: "../IMG/im12.jpeg",
            details_highlights: ["Hôtel 4* à Taksim (5 nuits)", "Croisière gratuite sur le Bosphore", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 4* (base petit-déjeuner)", "Transferts A/R aéroport-hôtel"],
            details_non_inclus: ["Déjeuners et dîners", "Entrées aux musées et sites historiques", "Frais de visa (si applicable)"]
        },
        {
            id: 9,
            categorie: "europe",
            titre: "Vibrante Barcelone, Espagne",
            description: "4 Jours / 3 Nuits. Vol + Hôtel central. Tickets pour la Sagrada Familia inclus. Plongez dans l'univers de Gaudí et profitez des plages méditerranéennes.",
            description_courte: "4 Jours / 3 Nuits. Vol + Hôtel central. Tickets pour la Sagrada Familia inclus.",
            prix: "à partir de 4 900 DH",
            image: "../IMG/im13.jpeg",
            details_highlights: ["Ticket coupe-file Sagrada Familia", "Hôtel près des Ramblas", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 3* (base petit-déjeuner)", "Ticket Sagrada Familia"],
            details_non_inclus: ["Repas non mentionnés", "Transferts aéroport-hôtel", "City Pass transports"]
        },
        {
            id: 10,
            categorie: "europe",
            titre: "Histoire à Rome, Italie",
            description: "5 Jours / 4 Nuits. Vol + Hôtel. Découvrez le Colisée, le Vatican, la Fontaine de Trevi et goûtez aux délices de la cuisine italienne.",
            description_courte: "5 Jours / 4 Nuits. Vol + Hôtel. Découvrez le Colisée et le Vatican.",
            prix: "à partir de 6 200 DH",
            image: "../IMG/im14.jpeg",
            details_highlights: ["Hôtel central à proximité des sites", "Visite du Vatican (excursion d'une journée)", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 4* (base petit-déjeuner)", "Excursion au Vatican"],
            details_non_inclus: ["Taxe de séjour (à payer sur place)", "Repas du midi et du soir", "Billets pour le Colisée et le Forum Romanum"]
        },
        {
            id: 11,
            categorie: "europe",
            titre: "Charme de Lisbonne, Portugal",
            description: "4 Jours / 3 Nuits. Vol + Hôtel. Tour de ville et dégustation de Pastéis de Nata. Flânez dans les quartiers historiques et écoutez le Fado.",
            description_courte: "4 Jours / 3 Nuits. Vol + Hôtel. Tour de ville et dégustation de Pastéis de Nata.",
            prix: "à partir de 4 500 DH",
            image: "../IMG/im15.jpeg",
            details_highlights: ["Dégustation de Pastéis de Nata offerte", "Visite en tramway historique", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 3* (base petit-déjeuner)", "Tour de ville d'une demi-journée"],
            details_non_inclus: ["Transferts aéroport-hôtel", "Boissons", "Frais de bagages en soute (selon compagnie aérienne)"]
        },
        {
            id: 12,
            categorie: "europe",
            titre: "Canaux d'Amsterdam",
            description: "4 Jours / 3 Nuits. Vol + Hôtel. Visite des musées (Rijksmuseum, Van Gogh) et tour en bateau sur les célèbres canaux.",
            description_courte: "4 Jours / 3 Nuits. Vol + Hôtel. Visite des musées et tour en bateau.",
            prix: "à partir de 6 800 DH",
            image: "../IMG/im16.jpeg",
            details_highlights: ["Croisière d'une heure sur les canaux", "Hôtel 4* proche du Vondelpark", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 4* (base petit-déjeuner)", "Billet pour la croisière sur les canaux"],
            details_non_inclus: ["Entrées aux musées (Rijksmuseum, etc.)", "Déjeuners et dîners", "Location de vélo"]
        },
        {
            id: 13,
            categorie: "europe",
            titre: "Tour d'Andalousie, Espagne",
            description: "7 Jours / 6 Nuits. Séville, Grenade, Cordoue. Hôtels et location de voiture inclus. Un voyage au cœur de l'histoire hispano-mauresque.",
            description_courte: "7 Jours / 6 Nuits. Séville, Grenade, Cordoue. Hôtels et location de voiture inclus.",
            prix: "à partir de 9 500 DH",
            image: "../IMG/im17.jpeg",
            details_highlights: ["Location de voiture pour la durée du séjour", "Hébergement 6 nuits (3 villes)", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Location de voiture catégorie économique (kilométrage illimité)", "Hébergement en hôtels 3*/4* (base petit-déjeuner)"],
            details_non_inclus: ["Carburant et péages", "Parking aux hôtels", "Entrées à l'Alhambra et à l'Alcazar"]
        },
        {
            id: 14,
            categorie: "europe",
            titre: "Prague, Cœur de l'Europe",
            description: "5 Jours / 4 Nuits. Vol + Hôtel 4*. Découvrez le château de Prague, le pont Charles et l'horloge astronomique. Une ville magique.",
            description_courte: "5 Jours / 4 Nuits. Vol + Hôtel 4*. Découvrez le château et le pont Charles.",
            prix: "à partir de 7 100 DH",
            image: "../IMG/im18.jpeg",
            details_highlights: ["Hôtel 4* en Vieille Ville", "Dîner-croisière sur la Vltava", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 4* (base petit-déjeuner)", "Dîner-croisière sur la Vltava (un soir)"],
            details_non_inclus: ["Déjeuners", "Assurance voyage", "Tickets de transport public"]
        },
        // --- Offres Afrique & Moyen-Orient ---
        {
            id: 15,
            categorie: "afrique_moyen_orient",
            titre: "Futuriste Dubai, EAU",
            description: "5 Jours / 4 Nuits. Vol Emirates A/R + Hôtel 5*. Ticket Burj Khalifa inclus. Shopping, désert et plages luxueuses vous attendent.",
            description_courte: "5 Jours / 4 Nuits. Vol Emirates A/R + Hôtel 5*. Ticket Burj Khalifa inclus.",
            prix: "à partir de 9 900 DH",
            image: "../IMG/im21.jpeg",
            details_highlights: ["Vol Emirates A/R", "Hôtel 5* luxe (4 nuits)", "Accès au 124e étage du Burj Khalifa"],
            details_inclus: ["Vol A/R en classe économique", "Hébergement en hôtel 5* (base petit-déjeuner)", "Ticket Burj Khalifa (non prime time)", "Transferts aéroport-hôtel"],
            details_non_inclus: ["Frais de visa", "Taxe de tourisme (à payer sur place)", "Excursions (Safari désert, etc.)"]
        },
        {
            id: 16,
            categorie: "afrique_moyen_orient",
            titre: "Croisière sur le Nil, Égypte",
            description: "8 Jours / 7 Nuits. Vol + Croisière 5* (Louxor/Assouan). Pension complète et visites des temples et pyramides.",
            description_courte: "8 Jours / 7 Nuits. Vol + Croisière 5* (Louxor/Assouan). Pension complète et visites.",
            prix: "à partir de 13 500 DH",
            image: "../IMG/im22.jpeg",
            details_highlights: ["7 nuits à bord d'un bateau 5*", "Pension complète incluse", "Guide Égyptologue pour les visites"],
            details_inclus: ["Vol A/R", "Croisière 5* de Louxor à Assouan", "Pension complète à bord", "Toutes les visites mentionnées au programme (temples, etc.)"],
            details_non_inclus: ["Boissons sur le bateau", "Pourboires obligatoires pour l'équipage et le guide", "Transfert au Caire (si extension)"]
        },
        {
            id: 17,
            categorie: "afrique_moyen_orient",
            titre: "Safari en Tanzanie",
            description: "7 Jours / 6 Nuits. Parc Serengeti & Ngorongoro. Vol + Lodges et 4x4 privé. Une immersion totale dans la faune africaine.",
            description_courte: "7 Jours / 6 Nuits. Parc Serengeti & Ngorongoro. Vol + Lodges et 4x4 privé.",
            prix: "à partir de 28 000 DH",
            image: "../IMG/im23.jpeg",
            details_highlights: ["Safari privé en 4x4", "Hébergement en Lodge de luxe", "Vol interne inclus"],
            details_inclus: ["Vol international A/R", "Vol interne entre Arusha et Serengeti", "Hébergement en lodge/camp de tentes de luxe", "Pension complète durant le safari", "Droits d'entrée aux parcs nationaux"],
            details_non_inclus: ["Frais de visa", "Boissons alcoolisées", "Ballon Safari (optionnel)"]
        },
        {
            id: 18,
            categorie: "afrique_moyen_orient",
            titre: "Découverte Dakar, Sénégal",
            description: "6 Jours / 5 Nuits. Vol + Hôtel. Visite de l'île de Gorée et du Lac Rose. Découvrez la Teranga (hospitalité sénégalaise).",
            description_courte: "6 Jours / 5 Nuits. Vol + Hôtel. Visite de l'île de Gorée et du Lac Rose.",
            prix: "à partir de 8 900 DH",
            image: "../IMG/im24.jpeg",
            details_highlights: ["Vol A/R inclus", "Visite de l'île de Gorée", "Démonstration de pêche traditionnelle"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 4* à Dakar (base petit-déjeuner)", "Excursions (Gorée, Lac Rose) avec transport"],
            details_non_inclus: ["Déjeuners et dîners", "Assurance voyage", "Pourboires"]
        },
        {
            id: 19,
            categorie: "afrique_moyen_orient",
            titre: "Lune de Miel aux Seychelles",
            description: "9 Jours / 8 Nuits. Vol + Villa sur pilotis. Une évasion paradisiaque sur les plus belles plages du monde.",
            description_courte: "9 Jours / 8 Nuits. Vol + Villa sur pilotis. Une évasion paradisiaque.",
            prix: "à partir de 32 000 DH",
            image: "../IMG/im25.jpeg",
            details_highlights: ["Hébergement en Villa sur pilotis", "Dîner romantique offert", "Transferts hydravion inclus"],
            details_inclus: ["Vol A/R", "Hébergement en villa sur pilotis (pension complète)", "Transferts en hydravion A/R", "Activités nautiques non motorisées"],
            details_non_inclus: ["Boissons alcoolisées", "Dépenses personnelles", "Excursions plongée"]
        },
        {
            id: 20,
            categorie: "afrique_moyen_orient",
            titre: "Séjour All-Inclusive Hammamet",
            description: "8 Jours / 7 Nuits. Vol + Hôtel 5* en bord de mer. Tout compris (repas et boissons). Idéal pour la détente.",
            description_courte: "8 Jours / 7 Nuits. Vol + Hôtel 5* en bord de mer. Tout compris.",
            prix: "à partir de 6 500 DH",
            image: "../IMG/im26.jpeg",
            details_highlights: ["Hôtel 5* All-Inclusive", "Accès à la plage privée", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement 7 nuits en hôtel 5*", "Formule All-Inclusive (repas et boissons locales)"],
            details_non_inclus: ["Soins au spa", "Boissons importées", "Excursions en dehors de l'hôtel"]
        },
        // --- Offres Asie & Amériques ---
        {
            id: 21,
            categorie: "asie_ameriques",
            titre: "Paradis en Thaïlande",
            description: "10 Jours / 9 Nuits. Bangkok & Phuket. Vol + Hôtels et transferts. Entre temples anciens et plages idylliques.",
            description_courte: "10 Jours / 9 Nuits. Bangkok & Phuket. Vol + Hôtels et transferts.",
            prix: "à partir de 14 000 DH",
            image: "../IMG/im31.jpeg",
            details_highlights: ["Découverte de Bangkok et de Phuket", "Vol A/R et vols internes inclus", "Hébergements 4 étoiles"],
            details_inclus: ["Vol A/R et vols internes", "Hébergement en hôtels 4* (base petit-déjeuner)", "Transferts entre les hôtels et aéroports"],
            details_non_inclus: ["Déjeuners et dîners", "Excursion dans les îles (Phi Phi, James Bond)", "Frais de visa (si applicable)"]
        },
        {
            id: 22,
            categorie: "asie_ameriques",
            titre: "Sérénité à Bali, Indonésie",
            description: "9 Jours / 8 Nuits. Vol + Hôtel de luxe à Ubud et Seminyak. Petit-déjeuner inclus. Découvrez les rizières et la culture balinaise.",
            description_courte: "9 Jours / 8 Nuits. Vol + Hôtel de luxe à Ubud et Seminyak. Petit-déjeuner inclus.",
            prix: "à partir de 16 500 DH",
            image: "../IMG/im32.jpeg",
            details_highlights: ["Hôtels de luxe (Ubud et Seminyak)", "Excursion aux rizières de Jatiluwih", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtels 5* (base petit-déjeuner)", "Transferts privés entre les villes et aéroport"],
            details_non_inclus: ["Repas non mentionnés", "Massages et spa", "Droits d'entrée aux temples"]
        },
        {
            id: 23,
            categorie: "asie_ameriques",
            titre: "New York : La ville qui ne dort jamais",
            description: "7 Jours / 6 Nuits. Vol A/R + Hôtel 4* à Manhattan. City Pass inclus. Visitez Times Square, Central Park et la Statue de la Liberté.",
            description_courte: "7 Jours / 6 Nuits. Vol A/R + Hôtel 4* à Manhattan. City Pass inclus.",
            prix: "à partir de 18 000 DH",
            image: "../IMG/im33.jpeg",
            details_highlights: ["Hôtel 4* au cœur de Manhattan", "New York City Pass inclus", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 4*", "New York City Pass (accès à 5 attractions majeures)"],
            details_non_inclus: ["Frais de demande de visa ESTA", "Repas", "Transport dans la ville (hors City Pass)"]
        },
        {
            id: 24,
            categorie: "asie_ameriques",
            titre: "Aventure au Japon",
            description: "12 Jours / 11 Nuits. Tokyo & Kyoto. Vol + Hôtels et JR Pass 7 jours. Entre modernité et traditions ancestrales.",
            description_courte: "12 Jours / 11 Nuits. Tokyo & Kyoto. Vol + Hôtels et JR Pass 7 jours.",
            prix: "à partir of 29 000 DH",
            image: "../IMG/im34.jpeg",
            details_highlights: ["JR Pass 7 jours (trains illimités)", "Hébergement 11 nuits (Tokyo/Kyoto)", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtels 3*/4* (base petit-déjeuner)", "Japan Rail Pass 7 jours"],
            details_non_inclus: ["Assurance voyage", "Repas (déjeuner et dîner)", "Guide local"]
        },
        {
            id: 25,
            categorie: "asie_ameriques",
            titre: "Malaisie : Kuala Lumpur & Langkawi",
            description: "10 Jours / 9 Nuits. Vol + Hôtels 5*. Entre ville moderne (Tours Petronas) et plages de rêve (Langkawi).",
            description_courte: "10 Jours / 9 Nuits. Vol + Hôtels 5*. Entre ville moderne et plages de rêve.",
            prix: "à partir de 15 500 DH",
            image: "../IMG/im35.jpeg",
            details_highlights: ["Hébergements 5 étoiles", "Vols internes inclus", "Vol A/R inclus"],
            details_inclus: ["Vol A/R et vols internes", "Hébergement en hôtels 5* (base petit-déjeuner)", "Transferts aéroports/hôtels"],
            details_non_inclus: ["Taxe de tourisme (à payer sur place)", "Repas", "Excursions"],
        },
        {
            id: 26,
            categorie: "asie_ameriques",
            titre: "Est Canadien (Montréal & Québec)",
            description: "9 Jours / 8 Nuits. Vol + Hôtels. Découvrez la culture francophone d'Amérique, les chutes du Niagara et les grands espaces.",
            description_courte: "9 Jours / 8 Nuits. Vol + Hôtels. Découvrez la culture francophone d'Amérique.",
            prix: "à partir de 21 000 DH",
            image: "../IMG/im36.jpeg",
            details_highlights: ["Découverte de 2 grandes villes", "Visite des Chutes du Niagara", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtels 3*/4*", "Transport en train/bus entre Montréal et Québec", "Excursion aux Chutes du Niagara"],
            details_non_inclus: ["Frais de visa (AVE)", "Repas (sauf petit-déjeuner)", "Activités hivernales"],
        },
        {
            id: 27,
            categorie: "asie_ameriques",
            titre: "Samba à Rio, Brésil",
            description: "8 Jours / 7 Nuits. Vol + Hôtel face à Copacabana. Visite du Corcovado (Christ Rédempteur) et du Pain de Sucre.",
            description_courte: "8 Jours / 7 Nuits. Vol + Hôtel face à Copacabana. Visite du Corcovado.",
            prix: "à partir de 23 500 DH",
            image: "../IMG/im37.jpeg",
            details_highlights: ["Hôtel face à la plage de Copacabana", "Visite du Christ Rédempteur et du Pain de Sucre", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement en hôtel 4* (base petit-déjeuner)", "Tours du Corcovado et du Pain de Sucre"],
            details_non_inclus: ["Repas", "Assurance voyage obligatoire", "Frais de visa (si applicable)"]
        },
        {
            id: 28,
            categorie: "asie_ameriques",
            titre: "Luxe aux Maldives",
            description: "7 Jours / 6 Nuits. Vol + Hydravion + Villa sur pilotis en pension complète. Plongée, snorkeling et relaxation absolue.",
            description_courte: "7 Jours / 6 Nuits. Vol + Hydravion + Villa sur pilotis en pension complète.",
            prix: "à partir de 35 000 DH",
            image: "../IMG/im38.jpeg",
            details_highlights: ["Villa privée sur pilotis", "Transfert en hydravion A/R", "Pension complète (repas inclus)"],
            details_inclus: ["Vol A/R", "Hébergement en villa sur pilotis", "Pension complète", "Transferts en hydravion"],
            details_non_inclus: ["Boissons (hors eau)", "Activités motorisées", "Excursions sous-marines"]
        },
        {
            id: 29,
            categorie: "asie_ameriques",
            titre: "Caraïbes à Cancun, Mexique",
            description: "9 Jours / 8 Nuits. Vol + Resort 5* All-Inclusive. Plages de sable blanc, sites mayas et ambiance festive.",
            description_courte: "9 Jours / 8 Nuits. Vol + Resort 5* All-Inclusive. Plages de sable blanc.",
            prix: "à partir de 26 000 DH",
            image: "../IMG/im39.jpeg",
            details_highlights: ["Resort 5* All-Inclusive", "Plages privées de sable blanc", "Vol A/R inclus"],
            details_inclus: ["Vol A/R", "Hébergement 8 nuits en resort 5*", "Formule All-Inclusive (repas, boissons, activités)"],
            details_non_inclus: ["Excursions aux sites Mayas (Chichen Itza)", "Pourboires", "Activités nautiques motorisées"]
        },
        {
            id: 30,
            categorie: "asie_ameriques",
            titre: "Grand Tour du Vietnam",
            description: "14 Jours / 13 Nuits. Hanoï, Baie d'Halong, Ho Chi Minh. Circuit complet. Découvrez l'histoire et les paysages incroyables du Vietnam.",
            description_courte: "14 Jours / 13 Nuits. Hanoï, Baie d'Halong, Ho Chi Minh. Circuit complet.",
            prix: "à partir de 24 000 DH",
            image: "../IMG/im40.jpeg",
            details_highlights: ["Croisière en Baie d'Halong", "Vols internes inclus", "Hébergements 13 nuits"],
            details_inclus: ["Vol A/R et vols internes", "Hébergement en hôtels 3*/4* (base petit-déjeuner)", "Croisière 2 jours/1 nuit en Baie d'Halong", "Transferts internes"],
            details_non_inclus: ["Frais de visa", "Repas non mentionnés", "Dépenses personnelles"]
        },
    ];

    // Le reste de la logique (createOfferCard, renderOffers, gestionnaire d'événements)
    // reste inchangé, mais assurez-vous que 'infor.js' est mis à jour pour utiliser ces nouvelles données.
    
    /**
     * Crée le HTML d'une carte d'offre.
     * @param {Object} offre - L'objet offre contenant les données.
     * @returns {string} Le code HTML de la carte.
     */
    const createOfferCard = (offre) => {
        return `
            <div class="card" data-offre-id="${offre.id}">
                <img src="${offre.image}" alt="${offre.titre}">
                <div class="card-content">
                    <h3>${offre.titre}</h3>
                    <p>${offre.description_courte}</p>
                    <p><strong>Prix : ${offre.prix}</strong></p>
                    <br>
                    <button class="cta-button details-btn">Voir les détails</button>
                </div>
            </div>
        `;
    };

    /**
     * Affiche les offres dans les conteneurs appropriés de la page.
     */
    const renderOffers = () => {
        const categories = {
            national: document.querySelector('.grid-container[data-category="national"]'),
            europe: document.querySelector('.grid-container[data-category="europe"]'),
            afrique_moyen_orient: document.querySelector('.grid-container[data-category="afrique_moyen_orient"]'),
            asie_ameriques: document.querySelector('.grid-container[data-category="asie_ameriques"]'),
        };

        if (!categories.national) return; 

        Object.values(categories).forEach(container => {
            if(container) container.innerHTML = '';
        });

        offresData.forEach(offre => {
            const cardHtml = createOfferCard(offre);
            const container = categories[offre.categorie];
            if (container) {
                container.insertAdjacentHTML('beforeend', cardHtml);
            }
        });
    };

    // 1. Générer et afficher les cartes au chargement de la page
    renderOffers();


    // 2. Gestion du clic sur le bouton "Voir les détails"
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('details-btn')) {
            const card = e.target.closest('.card');
            const offreId = parseInt(card.getAttribute('data-offre-id'));

            const selectedOffer = offresData.find(offer => offer.id === offreId);

            if (selectedOffer) {
                // Stocker l'offre sélectionnée complète dans localStorage
                localStorage.setItem('selectedOffer', JSON.stringify(selectedOffer));
                // Rediriger vers la page de détails
                window.location.href = 'infor.html';
            } else {
                console.error('Offre non trouvée pour l\'ID :', offreId);
            }
        }
    });
});