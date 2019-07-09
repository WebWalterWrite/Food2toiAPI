
// Récupérer le contenu du localstorage
const getLocalStorage = item => JSON.parse(localStorage.getItem(item));

console.log(getLocalStorage())
// persister localstorage
const setLocalStorage = (item, array) => localStorage.setItem(item, JSON.stringify(array));

/**
 * 
 * @param {string} item - La clé localStorage
 * @param {object} p - Contient les données de l'ingrédient séléctionné.
 */
export const storeData = (item, p) => {


    // Vérifier si des données existent si non créer un nouveau array.
    let arrayOfProducts = getLocalStorage(item) ? getLocalStorage(item) : [];

    // Récupérer le array
    let getStorage = getLocalStorage(item);

    // Si getStorage true, Vérifier si le produit est déjà présent
    const isProduct = getStorage && getStorage.find(({ id }) => id === p.id);

    // Si non présent l'insérer dans le tableau
    !isProduct && arrayOfProducts.push(p);

    // Persister les données 
    setLocalStorage(item,arrayOfProducts);

};


/**
 * @description - remplace par un espace tous le tirets
 * @param {string} value - la valeur à traiter
 * @returns {string} - renvoi la valeur sans tirets
 */
export const replaceBySpace = value => value.split('-').join(' ');
