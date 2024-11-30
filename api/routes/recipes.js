const express = require("express");
const axios = require("axios");
const cors = require("cors");  // Importation du middleware CORS
const router = express.Router();

router.use(cors());  // Activation de CORS pour cette route uniquement (pour `/recipes`)

const SPOONACULAR_API_KEY = "a5a7ded5890e4d2d85d017f368d8f82e";
const SPOONACULAR_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

router.get("/", async (req, res) => {
  try {
    const { number } = req.query;

    const params = {
      apiKey: SPOONACULAR_API_KEY,
      number: number || 10,
    };

    const requestUrl = `${SPOONACULAR_BASE_URL}?${new URLSearchParams(params).toString()}`;
    console.log('URL complète : ', requestUrl);

    const response = await axios.get(SPOONACULAR_BASE_URL, { params });
    if (response.data.results.length > 0) {
      res.status(200).json({
        status: "success",
        message: "Recettes trouvées",
        data: response.data.results,
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "Aucune recette trouvée avec ces critères.",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Une erreur est survenue lors de la recherche des recettes.",
      error: error.message,
    });
  }
});

module.exports = router;