require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Vérification des clés API
if (!process.env.ANTHROPIC_API_KEY) {
  console.warn('Attention: ANTHROPIC_API_KEY n\'est pas définie dans le fichier .env');
}
if (!process.env.GEMINI_API_KEY) {
  console.warn('Attention: GEMINI_API_KEY n\'est pas définie dans le fichier .env');
}

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Servir les fichiers statiques depuis le répertoire courant
app.use(express.static(path.join(__dirname, '/')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route API pour les modèles d'IA
app.post('/api/ai', async (req, res) => {
  try {
    const { prompt, model } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Le prompt est requis' });
    }

    if (!model || (model !== 'claude' && model !== 'gemini')) {
      return res.status(400).json({ error: 'Modèle invalide. Utilisez "claude" ou "gemini"' });
    }

    let response;

    // Appel à l'API Claude
    if (model === 'claude') {
      if (!process.env.ANTHROPIC_API_KEY) {
        return res.status(500).json({ error: 'Clé API Claude non configurée' });
      }

      response = await axios.post(
        'https://api.anthropic.com/v1/messages',
        {
          model: 'claude-3-opus-20240229',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01'
          }
        }
      );

      return res.json({ response: response.data.content[0].text });
    }
    
    // Appel à l'API Gemini
    if (model === 'gemini') {
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Clé API Gemini non configurée' });
      }

      response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            maxOutputTokens: 1000
          }
        }
      );

      // Extraction de la réponse de Gemini
      const geminiText = response.data.candidates[0].content.parts[0].text;
      return res.json({ response: geminiText });
    }
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'API:', error.response?.data || error.message);
    res.status(500).json({ 
      error: `Erreur lors de l'appel à l'API`,
      details: error.response?.data || error.message
    });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
