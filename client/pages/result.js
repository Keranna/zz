import Layout from '../components/Layout';
import { useState } from "react";


export default function Result() {

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
  
    // Fonction pour récupérer les recettes depuis l'API
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:4000/resukl?number=10"); // Appel à l'API pour obtenir 10 recettes aléatoires
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
        <a>Résultat recherche</a>
      </Layout>
    );
  }