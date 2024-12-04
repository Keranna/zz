const express = require("express");
const axios = require("axios");
const router = express.Router();

const SPOONACULAR_API_KEY = "a5a7ded5890e4d2d85d017f368d8f82e";
const SPOONACULAR_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

router.get("/", async (req, res) => {
  try {
    const { query } = req.query;

    const response = await axios.get(SPOONACULAR_BASE_URL, {
      params: { apiKey: SPOONACULAR_API_KEY, query },
    });

    res.status(200).json({
      status: "success",
      message: "Recettes trouvées",
      data: response.data.results,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Une erreur est survenue lors de la recherche des recettes.",
      error: error.message,
    });
  }
});

module.exports = router;
