/*require("dotenv").config();
const express = require("express");
const recipesRouter = require("./routes/recipes");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware pour les JSON
app.use(express.json());

// Routes
app.use("/recipes", recipesRouter);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});

*/
const express = require("express");
const cors = require("cors");
const recipesRouter = require("./routes/recipes"); // import de votre fichier de routes

const app = express();

// Activer CORS pour toutes les origines (tout le monde peut accéder à votre API)
app.use(cors());

// Si vous voulez restreindre les origines, vous pouvez passer un objet à cors comme ceci :
// app.use(cors({ origin: 'http://localhost:3000' })); // Permet uniquement les requêtes de localhost:3000

app.use("/recipes", recipesRouter); // Utilisation de votre route pour les recettes

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
