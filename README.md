# Calculatrice Scientifique JavaScript

Une application web de calculatrice scientifique développée avec HTML, CSS et JavaScript.

## Fonctionnalités

- Opérations arithmétiques de base (addition, soustraction, multiplication, division)
- Fonctions scientifiques avancées :
  - Fonctions trigonométriques (sin, cos, tan)
  - Logarithmes (log, ln)
  - Racine carrée, puissance
  - Factorielle
  - Constantes (π, e)
- Mode standard et mode scientifique
- Support des degrés et radians
- Interface utilisateur intuitive et responsive
- Support des entrées clavier
- Fonction d'effacement et de retour arrière
- Gestion des erreurs

## Technologies utilisées

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js

## Installation

1. Clonez ce dépôt sur votre machine locale
2. Assurez-vous d'avoir Node.js installé
3. Installez les dépendances :

```bash
npm install
```

## Démarrage

Pour lancer l'application, exécutez :

```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Utilisation

- Utilisez les boutons numériques pour entrer des nombres
- Cliquez sur les opérateurs (+, -, ×, /) pour effectuer des opérations
- Appuyez sur "=" pour calculer le résultat
- Utilisez "C" pour effacer l'écran
- Utilisez "⌫" pour supprimer le dernier caractère

### Raccourcis clavier

- Touches numériques (0-9) : Entrer des nombres
- Opérateurs (+, -, *, /) : Effectuer des opérations
- Entrée : Calculer le résultat
- Échap : Effacer l'écran
- Retour arrière : Supprimer le dernier caractère

## Structure du projet

- `index.html` : Structure de la page web
- `styles.css` : Styles et mise en page
- `script.js` : Logique de la calculatrice
- `server.js` : Serveur Express pour héberger l'application
- `package.json` : Configuration du projet et dépendances
