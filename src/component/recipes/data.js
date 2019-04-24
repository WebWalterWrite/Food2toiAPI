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
		id: `v_${v.substr(0,3)}_${Math.floor(Math.random() * (30 - 10 + 1)) + 10}`,
        name: v,
        image: images(`./${v.split(" ").join("")}.jpg`),
    })
 )


export default vegetables;
