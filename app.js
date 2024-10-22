// Total initial de tokens
const totalTokens = "8200000000";

// Montant de tokens vendus (qui va augmenter au fur et à mesure des ventes)
let tokensSold = 0;

// Fonction pour afficher les tokens avec les chiffres vendus en gris foncé et séparateur de milliers
function updateTokenDisplay() {
    const totalTokensElement = document.getElementById('total-tokens');
    totalTokensElement.innerHTML = ''; // Vider l'élément

    // Conversion en chaîne avec séparateurs de milliers (espace en France)
    const totalStr = Number(totalTokens).toLocaleString('fr-FR').split('');
    const soldStr = Number(tokensSold).toLocaleString('fr-FR').padStart(totalStr.length, '0').split('');

    for (let i = 0; i < totalStr.length; i++) {
        const span = document.createElement('span');
        span.textContent = totalStr[i];

        // Vérifier si c'est un chiffre et non un séparateur, appliquer le style
        if (isFinite(totalStr[i])) {
            span.classList.add('number-box'); // Appliquer la classe pour les chiffres
            if (soldStr[i] !== '0') { // Si la valeur correspond à un chiffre vendu
                span.classList.add('sold'); // Appliquer la classe pour les chiffres vendus
            }
        } else {
            span.classList.add('separator'); // Classe sans cadre vert pour les séparateurs
        }

        totalTokensElement.appendChild(span);
    }
}

// Simuler l'achat de tokens (en augmentant la valeur de tokensSold)
function simulateTokenSale() {
    tokensSold++; // Augmenter le nombre de tokens vendus
    updateTokenDisplay(); // Mettre à jour l'affichage
}

// Simuler une vente toutes les secondes
setInterval(simulateTokenSale, 1000);
