// Textes pour chaque langue
const translations = {
    "fr": {
        "navbarPrevente": "Prévente",
        "navbarFunds": "Collecte de fonds",
        "navbarRoadmap": "Roadmap",
        "navbarFaq": "FAQ",
        "heroTitle": "HumanCoin ($HUMC) - L'éspèce Humaine désormais Tokenisée",
        "heroSubtitle": "HumanCoin est la première cryptomonnaie permettant la tokenisation de notre civilisation.",
        "heroLine1": "8,2 milliards de jetons disponibles, chaque jeton correspondant à un être humain sur Terre.",
        "heroLine2": "Saisis ta chance de sauver le maximum d'humains des griffes du destin !",
        "launchPrice": "Prix au lancement : 0,10$USD/HumanCoin",
        "preventeTitle": "Prévente de HumanCoin",
        "preventeText": "Détenteur ou détenu ? Un seul HumanCoin te correspond sur les 8,2 milliards disponibles. Dépêche-toi de l'acquérir avant qu'un autre ne fasse de toi un détenu !",
        "walletLabel": "Adresse Wallet :",
        "amountLabel": "Combien d'Humains vas tu acheter ?! :",
        "buyButton": "Acheter des $HUMC",
        "fundsTitle": "Nombre d'HumanCoin actuellement détenu dans le monde",
        "roadmapTitle": "Roadmap de HumanCoin - Un Voyage vers l'Impact Social et l'Innovation",
        "phase1": "Phase 1 : Conception et Développement",
        "phase2": "Phase 2 : Prévente et Stratégie de Croissance",
        "phase3": "Phase 3 : Listing sur les Échanges et Augmentation de la Visibilité",
        "phase4": "Phase 4 : Lancer des Projets Humanistes et Écologiques",
        "faqTitle": "FAQ - Questions fréquentes",
        "faqQuestion1": "Qu'est-ce que HumanCoin ($HUMC) ?",
        "faqAnswer1": "$HUMC est un memecoin unique avec une offre limitée à 8,2 milliards de jetons, un pour chaque être humain sur Terre.",
        "faqQuestion2": "Comment participer à la prévente ?",
        "faqAnswer2": "Pour participer, entrez votre adresse Solana et le montant en $HUMC dans la section prévente.",
        "faqQuestion3": "Est-ce que $HUMC est sécurisé ?",
        "faqAnswer3": "Oui, $HUMC est basé sur la technologie blockchain, garantissant transparence et sécurité des transactions.",
        "faqQuestion4": "Quels sont les frais de transaction ?",
        "faqAnswer4": "Les frais sont minimes et dépendent de la blockchain utilisée pour l'achat de $HUMC."
    },
    // Ajout des traductions des autres langues ici (en, it, de, es, ru)
    "en": {
        "navbarPrevente": "Presale",
        "navbarFunds": "Fund Collection",
        "navbarRoadmap": "Roadmap",
        "navbarFaq": "FAQ",
        "heroTitle": "HumanCoin ($HUMC) - The revolution is underway",
        "heroSubtitle": "HumanCoin is the first cryptocurrency to enable the tokenization of our civilization.",
        "heroLine1": "8.2 billion tokens available, each corresponding to a human on Earth.",
        "heroLine2": "Seize your chance to save as many humans as possible from the clutches of fate!",
        "launchPrice": "Launch Price: €0.10/HumanCoin",
        "preventeTitle": "HumanCoin Presale",
        "preventeText": "Holder or detainee? Only one HumanCoin corresponds to you out of the 8.2 billion available. Hurry to acquire it before someone else makes you a detainee!",
        "walletLabel": "Wallet Address:",
        "amountLabel": "Amount in $HUMC:",
        "buyButton": "Buy $HUMC",
        "fundsTitle": "Current Number of HumanCoins Held",
        "roadmapTitle": "HumanCoin Roadmap - A Journey Towards Social Impact and Innovation",
        "phase1": "Phase 1: Design and Development",
        "phase2": "Phase 2: Presale and Growth Strategy",
        "phase3": "Phase 3: Exchange Listing and Visibility Increase",
        "phase4": "Phase 4: Launching Humanitarian and Ecological Projects",
        "faqTitle": "FAQ - Frequently Asked Questions",
        "faqQuestion1": "What is HumanCoin ($HUMC)?",
        "faqAnswer1": "$HUMC is a unique memecoin with a limited supply of 8.2 billion tokens, one for each person on Earth.",
        "faqQuestion2": "How to participate in the presale?",
        "faqAnswer2": "To participate, enter your Solana address and the amount in $HUMC in the presale section.",
        "faqQuestion3": "Is $HUMC secure?",
        "faqAnswer3": "Yes, $HUMC is based on blockchain technology, ensuring transaction transparency and security.",
        "faqQuestion4": "What are the transaction fees?",
        "faqAnswer4": "The fees are minimal and depend on the blockchain used for purchasing $HUMC."
    }
    // Traductions supplémentaires pour l'italien, espagnol, allemand, et russe ici.
};


 // Fonction pour changer la langue
function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    console.log(`Langue sélectionnée : ${lang}`);

    // Traduction de la bannière de navigation
 document.querySelector('a[href="#prevente"]').textContent = translations[lang].navbarPrevente;
 document.querySelector('a[href="#funds"]').textContent = translations[lang].navbarFunds;
 document.querySelector('a[href="#roadmap"]').textContent = translations[lang].navbarRoadmap;
 document.querySelector('a[href="#faq"]').textContent = translations[lang].navbarFaq;

    // Vérification et mise à jour des éléments de la page
    const elementsToTranslate = [
        { id: 'hero-title', key: 'heroTitle' },
        { id: 'hero-subtitle', key: 'heroSubtitle' },
        { id: 'hero-line1', key: 'heroLine1' },
        { id: 'hero-line2', key: 'heroLine2' },
        { id: 'launch-price', key: 'launchPrice' },
        { id: 'prevente-title', key: 'preventeTitle' },
        { id: 'prevente-text', key: 'preventeText' },
        { id: 'wallet-label', key: 'walletLabel' },
        { id: 'amount-label', key: 'amountLabel' },
        { id: 'buy-button', key: 'buyButton' },
        { id: 'funds-title', key: 'fundsTitle' },
        { id: 'roadmap-title', key: 'roadmapTitle' },
        { id: 'phase1', key: 'phase1' },
        { id: 'phase2', key: 'phase2' },
        { id: 'phase3', key: 'phase3' },
        { id: 'phase4', key: 'phase4' },
        { id: 'faq-title', key: 'faqTitle' },
        { id: 'faq-question1', key: 'faqQuestion1' },
        { id: 'faq-answer1', key: 'faqAnswer1' },
        { id: 'faq-question2', key: 'faqQuestion2' },
        { id: 'faq-answer2', key: 'faqAnswer2' },
        { id: 'faq-question3', key: 'faqQuestion3' },
        { id: 'faq-answer3', key: 'faqAnswer3' },
        { id: 'faq-question4', key: 'faqQuestion4' },
        { id: 'faq-answer4', key: 'faqAnswer4' }
    ];

    // Boucle pour mettre à jour chaque élément
    elementsToTranslate.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            element.textContent = translations[lang][item.key];
            console.log(`Mis à jour : ${item.id} avec '${translations[lang][item.key]}'`);
        } else {
            console.warn(`Élément introuvable avec l'id : ${item.id}`);
        }
    });
}

// Détecter le changement de langue
document.getElementById('language-select').addEventListener('change', changeLanguage);

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', changeLanguage);

// Code pour afficher/masquer les réponses dans la FAQ
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item h3');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;

            // Si la réponse est masquée, on l'affiche, sinon on la masque
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
// Sélectionner l'élément de champ de montant et de conversion
const montantInput = document.getElementById('montant');
const usdConversion = document.getElementById('usd-conversion');

// Définir le taux de conversion (1 $HUMC = 0.10 USD)
const conversionRate = 0.10;

// Mettre à jour la conversion en USD lorsque l'utilisateur entre un montant
montantInput.addEventListener('input', () => {
    const montantHumc = parseFloat(montantInput.value);
    const montantUsd = montantHumc * conversionRate;

    // Mettre à jour l'affichage en dessous avec deux décimales
    if (!isNaN(montantUsd)) {
        usdConversion.textContent = `Valeur en USD : $${montantUsd.toFixed(2)}`;
    } else {
        usdConversion.textContent = `Valeur en USD : $0.00`;
    }
});// Total initial de tokens
const totalTokens = "8200000000";

// Montant de tokens vendus (qui va augmenter au fur et à mesure des ventes)
let tokensSold = 0;

// Fonction pour afficher les tokens avec les chiffres vendus en gris foncé et séparateur de milliers
function updateTokenDisplay() {
    const totalTokensElement = document.getElementById('total-tokens');
    
    if (!totalTokensElement) {
        console.error('Élément avec l\'ID "total-tokens" introuvable');
        return;
    }
    
    totalTokensElement.innerHTML = '';

    // Conversion en chaîne avec séparateurs de milliers
    const totalStr = Number(totalTokens).toLocaleString('fr-FR').split('');
    const soldStr = Number(tokensSold).toLocaleString('fr-FR').padStart(totalStr.length, '0').split('');

    for (let i = 0; i < totalStr.length; i++) {
        const span = document.createElement('span');
        span.textContent = totalStr[i];
        
        if (isFinite(totalStr[i])) {
            span.classList.add('number-box');
            if (soldStr[i] !== '0') {
                span.classList.add('sold');
            }
        } else {
            span.classList.add('separator');
        }

        totalTokensElement.appendChild(span);
    }
}

// Simuler l'achat de tokens
function simulateTokenSale() {
    tokensSold++;
    updateTokenDisplay();
}

// Initialiser l'affichage et lancer le compteur
document.addEventListener('DOMContentLoaded', () => {
    updateTokenDisplay();
    setInterval(simulateTokenSale, 600); // Simuler une vente toutes les 600 ms
});

