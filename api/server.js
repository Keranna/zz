const express = require("express");
const cors = require("cors");
const recipeRouter = require("./routes/recipe"); // Détails d'une recette
const recipesRouter = require("./routes/recipes"); // Recherche des recettes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Montage des routes
app.use("/recipes", recipesRouter); // Routes pour la recherche et la liste des recettes
app.use("/recipe", recipeRouter);  // Routes pour les détails d'une recette

// Démarrer le serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
