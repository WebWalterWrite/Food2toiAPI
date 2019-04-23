import axios from "axios";

const API_ID = process.env.REACT_APP_FOOD_API_ID;
const API_KEY = process.env.REACT_APP_FOOD_API_KEY;
const URL = process.env.REACT_APP_FOOD_API_URL;

/* Pour rechercher avec un ou plusieurs ingrédients.
    parametre de fonction => "q" prend 1 ou plusieurs paramètres ( a ou a+b ou a+b+c ...): 
        - Si chaine de caractères depuis le composant demandeur convertir en array => param = ...data
        - Sinon transmettre un array directement depuis le composant demandeur et donc param = data

    "q" prend 1 ou plusieurs paramètres ( poulet / poulet+riz / poulet+riz+carottes)
*/

export const getRecipes = async (...data) => {
  // concatener les ingrédients si plusieurs choix.
  let choice = data.join("+");

  const result = await axios.get(
    `${URL}?q=${choice}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=20`
  );
  console.log(result);
  return result.data.hits;
};
