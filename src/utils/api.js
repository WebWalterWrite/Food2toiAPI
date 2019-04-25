import axios from "axios";

const API_ID = process.env.REACT_APP_FOOD_API_ID;
const API_KEY = process.env.REACT_APP_FOOD_API_KEY;
const URL = process.env.REACT_APP_FOOD_API_URL;

/* Pour rechercher avec un ou plusieurs ingrédients.

INFOS API : 

  https://developer.edamam.com/edamam-docs-recipe-api

OPTIONS :
  - cuisineType : Le type de cuisine de la recette. Vous pouvez utiliser simultanément cette cuisine "cuisineType = chinois &                   cuisineType = indien"
  - dishType : Le type de plat auquel une recette appartient. Vous pouvez utiliser simultanément des types de plats saverals              de cette manière: "plat type = dîner et plat type = dessert"
  
  - health : Label de santé: L'un des paramètres d'api de santé répertoriés dans le tableau des étiquettes de régime et                  de santé à la fin de cette documentation. Les étiquettes Miltiple peuvent être soumises simultanément                       ainsi: «santé = sans arachides et santé = sans noix».
  -q : prend 1 ou plusieurs paramètres ( a ou a+b ou a+b+c ...): 
        - Si chaine de caractères depuis le composant demandeur convertir en array => param = ...data
        - Sinon transmettre un array directement depuis le composant demandeur et donc param = data
        "q" prend 1 ou plusieurs paramètres ( poulet / poulet+riz / poulet+riz+carottes)
*/

export const getRecipes = async (...data) => {
  try{
  // concatener les ingrédients si plusieurs choix.
  let choice = data.join("+");

  const result = await axios.get(
    `${URL}?&app_id=${API_ID}&app_key=${API_KEY}&q=${choice}&r&from=0&to=20`
  );
  console.log(result.data.hits);
  return result.data.hits;
  }
  catch(e){
    console.log(e)
  }
};
