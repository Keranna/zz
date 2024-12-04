import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function RecipeDetails() {
  const router = useRouter();
  const { id } = router.query; // Récupérer l'ID depuis l'URL
  const [recipe, setRecipe] = useState(null); // Stocker les détails de la recette
  const [error, setError] = useState(null); // Stocker les erreurs

  // Fonction pour récupérer les détails de la recette
  const fetchRecipe = async () => {
    try {
      const response = await fetch(`http://localhost:4000/recipe/${id}`);
  
      const data = await response.json();
  
      if (data.status === "success") {
        setRecipe(data.data);
      } else {
        setError("Recette non trouvée.");
      }
    } catch (err) {
      console.error("Erreur lors de la récupération :", err.message);
      setError("Erreur lors de la récupération de la recette. Veuillez réessayer.");
    }
  };
  
  // Charger les données de la recette lorsque l'ID change
  useEffect(() => {
    if (id) {
      fetchRecipe();
    }
  }, [id]);

  // Gérer les erreurs
  if (error) {
    return (
      <Layout>
        <p className="text-red-500">{error}</p>
      </Layout>
    );
  }

  // Gérer le chargement
  if (!recipe) {
    return (
      <Layout>
        <p>Chargement des données de la recette...</p>
      </Layout>
    );
  }

  // Afficher les détails de la recette
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
          <p className="text-gray-500 mt-4 italic">{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div>
            <img
              src={recipe.image || "https://via.placeholder.com/300"}
              alt={recipe.title}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Informations */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              <strong>Temps de préparation :</strong> {recipe.readyInMinutes || "N/A"} minutes
            </p>
            <p className="text-gray-800 text-lg mt-2">
              <strong>Portions :</strong> {recipe.servings || "N/A"}
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Ingrédients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.extendedIngredients?.map((ingredient, index) => (
                <li key={index}>{ingredient.original}</li>
              )) || <li>Aucun ingrédient disponible.</li>}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.analyzedInstructions?.[0]?.steps?.map((step, index) => (
              <li key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">{step.step}</li>
            )) || <li>Aucune instruction disponible.</li>}
          </ol>
        </div>
      </div>
    </Layout>
  );
}
