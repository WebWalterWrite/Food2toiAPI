import { replaceBySpace } from '../../utils/functions';

// Récupérer toutes les images dans le dossier /vegetables
const images = require.context("../../assets/images/", true);

// tableau de légumes nommés
const vegetable = [
	{ name: 'brocolis', api_name:"broccoli"},
	{ name:"carrote",api_name:"carrot"},
	{ name:"concombre", api_name:"cucumber"},
	{ name: "courgette", api_name: "zucchini"},
	{ name:"echalotte", api_name:"shallot"},
	{ name:"gingembre", api_name:"ginger"},
	{ name: "haricots-verts", api_name: "green beans"},
	{ name:"oignons", api_name:"onions"},
	{ name:"poivron", api_name:"pepper"},
	{ name:"salade", api_name:"lettuce"},
	{ name:"soja", api_name:"soybean"}
];

// tableau des feculents
const starchy = [
	{ name:"lentilles", api_name: "Lentils"},
	{ name: "pates", api_name:"pasta"},
	{ name: "p.de-terre", api_name: "potato" },
	{ name: "quinoa", api_name: "quinoa" },
	{ name: "riz", api_name:"rice"},
	{ name: "semoule", api_name: "semolina"}
];

// tableau des herbes aromatiques
const herb = [
	{ name: "basilic", api_name: "basil"},
	{ name: "ciboulette", api_name: "chive"},
	{ name: "menthe", api_name: "mint"},
	{ name: "origan", api_name: "origano"}
];

// tableau des viandes
const meat = [
	{name:"boeuf", api_name:"beef"},
	{name:"crevette", api_name:"shrimp"},
	{name:"jambon", api_name:"ham"},
	{name:"poulet", api_name:"chicken"},
	{name:"saumon", api_name:"salmon"},
	{name:"thon", api_name:"tuna"}
];

// tableau des sauces
const sauce = [
	{name:"creme-fraiche", api_name:"fresh cream"},
	{name:"sauce-tomate", api_name:"tomato sauce"},
	{name:"sauce-poivre", api_name:"pepper sauce"}
];

/**
 * @description - Tableau contenant les légumes
 * @return {Array} - Tableau d'objects
 */
const vegetables = vegetable.map(({name , api_name}) => ({
		id: `v_${name.substr(0,3)}_${Math.floor(Math.random() * (30 - 10 + 1)) + 10}`,
		type:'v',
		name: replaceBySpace(name),
		api_name: api_name,
        image: images(`./vegetables/${name.split(" ").join("")}.jpg`),
    })
 )

 const herbs = herb.map(({name , api_name}) => ({
	id: `h_${name.substr(0,3)}_${Math.floor(Math.random() * (30 - 10 + 1)) + 10}`,
	type:'h',
	name: replaceBySpace(name),
	api_name: api_name,
	image: images(`./herbs/${name.split(" ").join("")}.jpg`),
})
) 
const starchys = starchy.map( ({name, api_name})=> ({
		id: `f_${name.substr(0,3)}_${Math.floor(Math.random() * (30 - 10 + 1)) + 10}`,
		type:'f',
		name: replaceBySpace(name),
		api_name: api_name,
        image: images(`./starchy/${name.split(" ").join("")}.jpg`),
    })
);

const meats = meat.map( ({name, api_name}) =>  ({
	id:  `name_${name.substr(0,3)}_${Math.floor(Math.random() * (30 - 10 + 1)) + 10}`,
	type:'m',
	name: replaceBySpace(name),
	api_name: api_name,
	image: images(`./meat/${name.split(" ").join("")}.jpg`),
 }));

 const sauces = sauce.map( ({name, api_name}) =>({
	id:`name_${name.substr(0,3)}_${Math.floor(Math.random() * (30 - 10 + 1)) + 10}`,
	type:'s',
	name:replaceBySpace(name),
	api_name:api_name,
	image: images(`./sauce/${name.split(" ").join("")}.jpg`),
 }));



 export const ingredients = vegetables.concat(meats, sauces, starchys, herbs);