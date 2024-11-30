import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { query } = router.query; // Obtenir la query string depuis l'URL

  // Fonction pour récupérer les recettes
  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/recipes?query=${query}` // Passer `query` à l'API
      );
      const data = await response.json();

      if (data.status === "success") {
        setRecipes(data.data); // Mettre à jour l'état des recettes
      } else {
        setError(data.message); // En cas d'erreur, mettre à jour l'état d'erreur
      }
    } catch (err) {
      setError("Erreur lors de la récupération des recettes. Mais je t'aime quand même.");
    }
  };

  // Charger les recettes quand `query` change
  useEffect(() => {
    if (query) {
      fetchRecipes();
    }
  }, [query]);

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Résultats pour "{query}"</h1>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <a key={recipe.id} href="#" className="group">
                  <img
                    src={recipe.image || "https://via.placeholder.com/150"}
                    alt={recipe.title}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{recipe.title}</h3>
                </a>
              ))
            ) : (
              <p className="col-span-full text-gray-500 text-center">
                Aucune recette disponible. Essayez une autre recherche.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
