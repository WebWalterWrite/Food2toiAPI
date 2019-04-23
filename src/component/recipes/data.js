// Récupérer toutes les images dans le dossier /vegetables
const images = require.context("../../assets/images/vegetables/", true);

// tableau de légumes nommés
const vegetable = [
	"carrote",
	"concombre",
	"echalotte",
	"poivron",
	"pomme de terre",
	"quinoa",
	"salade",
	"soja"
];

/**
 * @description - Tableau contenant les légumes
 * @return {Array} - Tableau d'objects
 */
const vegetables = vegetable.map( v => ({
        name: v,
        image: images(`./${v.split(" ").join("")}.jpg`)
    })
 )


export default vegetables;
