# Calculatrice Scientifique JavaScript avec IA

Une application web responsive de calculatrice scientifique avec intégration d'IA, développée avec HTML, CSS et JavaScript.

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
- Intégration d'IA :
  - Support de Claude 3 Opus (Anthropic)
  - Support de Gemini 2.0 Flash (Google)
  - Interface de chat simple avec sélection de modèle
- Interface utilisateur intuitive et entièrement responsive
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

4. Configurez les clés API dans un fichier `.env` :

```
ANTHROPIC_API_KEY=votre_clé_api_claude
GEMINI_API_KEY=votre_clé_api_gemini
```

> **Note**: Vous pouvez obtenir une clé API Claude sur [console.anthropic.com](https://console.anthropic.com/) et une clé API Gemini sur [Google AI Studio](https://makersuite.google.com/app/apikey).

## Démarrage

Pour lancer l'application, exécutez :

```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Utilisation

### Mode Calculatrice Standard
- Utilisez les boutons numériques pour entrer des nombres
- Cliquez sur les opérateurs (+, -, ×, /) pour effectuer des opérations
- Appuyez sur "=" pour calculer le résultat
- Utilisez "C" pour effacer l'écran
- Utilisez "⌫" pour supprimer le dernier caractère

### Mode Calculatrice Scientifique
- Accédez aux fonctions trigonométriques (sin, cos, tan)
- Utilisez les logarithmes (log, ln)
- Calculez des racines carrées et des puissances
- Utilisez les constantes mathématiques (π, e)
- Basculez entre degrés et radians avec le bouton DEG/RAD

### Mode IA
- Sélectionnez le modèle d'IA (Claude ou Gemini)
- Saisissez votre question dans la zone de texte
- Cliquez sur "Envoyer" pour obtenir une réponse
- Les réponses s'affichent dans la zone en dessous

### Raccourcis clavier

- Touches numériques (0-9) : Entrer des nombres
- Opérateurs (+, -, *, /) : Effectuer des opérations
- Parenthèses ( ) : Grouper les expressions
- Entrée ou = : Calculer le résultat
- Échap : Effacer l'écran
- Retour arrière : Supprimer le dernier caractère
- ^ : Puissance

## Structure du projet

- `index.html` : Structure de la page web et interface utilisateur
- `styles.css` : Styles, mise en page et responsive design
- `script.js` : Logique de la calculatrice et fonctions IA côté client
- `server.js` : Serveur Express et intégration des API IA
- `package.json` : Configuration du projet et dépendances
- `.env` : Fichier de configuration pour les clés API (à créer)
- `.gitignore` : Configuration des fichiers à ignorer par Git

## Modèles d'IA supportés

- **Claude 3 Opus** : Modèle avancé d'Anthropic pour des réponses détaillées et précises
- **Gemini 2.0 Flash** : Modèle rapide de Google AI pour des réponses efficaces

## Compatibilité

L'application est compatible avec tous les navigateurs modernes et s'adapte à tous les types d'écrans (desktop, tablette, mobile).
