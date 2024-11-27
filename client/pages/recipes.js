import Layout from '../components/Layout';
import { useState } from "react";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les recettes depuis l'API
  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:4000/recipes?number=10"); // Appel à l'API pour obtenir 10 recettes aléatoires
      const data = await response.json();

      if (data.status === "success") {
        setRecipes(data.data); // On met à jour l'état des recettes avec les données reçues
      } else {
        setError(data.message); // En cas d'erreur, on met à jour l'état d'erreur
      }
    } catch (err) {
      setError("Erreur lors de la récupération des recettes. Mais je t'aime quand même"); // Gestion des erreurs de réseau
    }
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Rechercher des Recettes</h1>
          <button
            onClick={fetchRecipes}
            className="mt-4 mb-8 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Charger les Recettes
          </button>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <a key={recipe.id} href="#" className="group">
                  <img
                    src={recipe.image || "https://via.placeholder.com/150"} // Remplacer par une image par défaut si `recipe.image` est indisponible
                    alt={recipe.title}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{recipe.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{recipe.description || "Description non disponible"}</p>
                </a>
              ))
            ) : (
              <p className="col-span-full text-gray-500 text-center">Aucune recette disponible. Cliquez sur "Charger les Recettes".</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

/*import Layout from '../components/Layout';
import { useState } from "react";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les recettes depuis l'API
  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:4000/recipes?number=10"); // Appel à l'API pour obtenir 10 recettes aléatoires
      const data = await response.json();

      if (data.status === "success") {
        setRecipes(data.data);  // On met à jour l'état des recettes avec les données reçues
      } else {
        setError(data.message); // En cas d'erreur, on met à jour l'état d'erreur
      }
    } catch (err) {
      setError("Erreur lors de la récupération des recettes. Mais je t'aime quand même"); // Gestion des erreurs de réseau
    }
  };

  return (
    <Layout>
      <div>
        <h1>Rechercher des Recettes</h1>
        <button onClick={fetchRecipes}>Charger les Recettes</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li key={recipe.id}>{recipe.title}</li>
              
            ))
          ) : (
            <p> </p>
          )}
        </ul>
      </div>
    </Layout>
  );
}*/

/*<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products</h2>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" class="group">
        <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
        <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>
      <a href="#" class="group">
        <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
        <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>
      <a href="#" class="group">
        <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
        <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
      </a>
      <a href="#" class="group">
        <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
        <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>

      <!-- More products... -->
    </div>
  </div>
</div>*/