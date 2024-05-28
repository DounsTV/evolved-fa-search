// JavaScript (script.js)

// Exemple de données pour les items (à remplacer par vos propres données)
const itemsData = [
    { image: "ressources/water.png", nom: "Water", itemId: "water", prixAchat: "?", prixVente: "?", poids: "?", effet: "thirst 20", tags: "Nourriture" },
    { image: "ressources/burger.png", nom: "Burger", itemId: "burger", prixAchat: "?", prixVente: "?", poids: "?", effet: "hunger 20", tags: "Nourriture" }
];

// Fonction pour ajouter les items à la table
function populateItemsTable(items) {
    const itemsTable = document.getElementById("itemsTable");

    // Vide d'abord le contenu de la table
    itemsTable.innerHTML = "";

    // Parcours des items et création des lignes de tableau
    items.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><img src="${item.image}" style="max-width: 40px;"></td>
            <td>${item.nom}</td>
            <td>${item.itemId}</td>
            <td>${item.prixAchat}</td>
            <td>${item.prixVente}</td>
            <td>${item.poids}</td>
            <td>${item.effet}</td>
            <td>${item.tags}</td>
        `;
        itemsTable.appendChild(row);
    });
}

// Appel de la fonction pour remplir la table des items lors du chargement de la page
window.onload = function() {
    populateItemsTable(itemsData); // Remplit la table avec tous les items au chargement de la page
};

// Fonction pour filtrer les items en fonction de la recherche
function filterItems() {
    const searchTerm = document.getElementById("itemsSearch").value.toLowerCase();
    const filteredItems = itemsData.filter(item => {
        return (
            item.nom.toLowerCase().includes(searchTerm) ||
            item.itemId.toLowerCase().includes(searchTerm) ||
            item.prixAchat.toLowerCase().includes(searchTerm) ||
            item.prixVente.toLowerCase().includes(searchTerm) ||
            item.poids.toLowerCase().includes(searchTerm) ||
            item.effet.toLowerCase().includes(searchTerm) ||
            item.tags.toLowerCase().includes(searchTerm)
        );
    });

    populateItemsTable(filteredItems); // Met à jour la table avec les items filtrés
}

// Ajout d'un événement d'écoute sur la barre de recherche des items
document.getElementById("itemsSearch").addEventListener("input", filterItems);


const jobsData = [
    { nom: "ambulance", label: "LSMC", vehicules: "GSD2022emsexp, ambulance1" },
    { nom: "autoecole", label: "Auto Ecole", vehicules: "" },
    { nom: "cardealer", label: "Concessionnaire", vehicules: "" },
    { nom: "delivery", label: "Livreur", vehicules: "NSPEEDO" },
    { nom: "four", label: "Fourrière", vehicules: "" },
    { nom: "police", label: "Police", vehicules: "polnscout2, polnscout, polnscout3" },
    { nom: "realestateagent", label: "Agent immobilier", vehicules: "" },
    { nom: "tabac", label: "Tabac", vehicules: "NSPEEDO" },
    { nom: "taxi", label: "Taxi", vehicules: "taxi, caravantaxi, trans_mbv250" },
    { nom: "unemplyed", label: "Aucun", vehicules: "" },
    // Ajoutez d'autres données de jobs
];

function populateJobsTable(jobs) {
    const jobsTable = document.getElementById("jobsTable");
    jobsTable.innerHTML = "";
    jobs.forEach(job => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${job.nom}</td>
            <td>${job.label}</td>
            <td>${job.vehicules}</td>
        `;
        jobsTable.appendChild(row);
    });
}

function filterJobs() {
    const searchTerm = document.getElementById("jobsSearch").value.toLowerCase();
    const filteredJobs = jobsData.filter(job => {
        return (
            job.nom.toLowerCase().includes(searchTerm) ||
            job.label.toString().includes(searchTerm) ||
            job.vehicules.toLowerCase().includes(searchTerm)
        );
    });
    populateJobsTable(filteredJobs);
}

document.getElementById("jobsSearch").addEventListener("input", filterJobs);




























// Appel de la fonction pour remplir la table des items lors du chargement de la page
window.onload = function() {
    populateItemsTable(itemsData); // Remplit la table avec tous les items au chargement de la page
    populateJobsTable(jobsData);
};