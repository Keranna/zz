const express = require("express");
const axios = require("axios");
const router = express.Router();

const SPOONACULAR_API_KEY = "a5a7ded5890e4d2d85d017f368d8f82e";
const SPOONACULAR_BASE_URL = "https://api.spoonacular.com/recipes";

// Route pour récupérer les détails d'une recette
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Requête reçue pour l'ID : ${id}`);

    const params = { apiKey: SPOONACULAR_API_KEY };

    const response = await axios.get(`${SPOONACULAR_BASE_URL}/${id}/information`, { params });

    res.status(200).json({
      status: "success",
      message: "Détails de la recette récupérés",
      data: response.data,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération :", error.message);
    res.status(500).json({
      status: "error",
      message: "Une erreur est survenue lors de la récupération des détails.",
      error: error.message,
    });
  }
});

module.exports = router;
